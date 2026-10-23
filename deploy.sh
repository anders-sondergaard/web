#!/bin/bash
# Uploads the site to addthunder.com/ai over encrypted FTP (FTPS). Only files that changed since the
# last upload are sent; .deploy-manifest (not in git) remembers what was uploaded.
# The FTP login is read from ~/.netrc and never appears in this script.
#
#   ./deploy.sh          upload what changed
#   ./deploy.sh --dry    only list what would be uploaded
#   ./deploy.sh --all    upload everything again
#   ./deploy.sh --mark   record everything as uploaded, without uploading
set -euo pipefail
cd "$(dirname "$0")"

HOST="ftp.addthunder.com"
REMOTE="/webroots/www/ai"
MANIFEST=".deploy-manifest"
MODE="${1:-}"

# Site files: everything except git, editor and design files, the local-only page and the master video
files=$(find . -type f \
    ! -path './.git/*' ! -path './.claude/*' ! -path './design/*' \
    ! -name '.DS_Store' ! -name '.gitignore' ! -name 'deploy.sh' ! -name "$MANIFEST" ! -name "$MANIFEST.tmp" \
    ! -name 'cases-overview.html' ! -name 'cinemataztic_programmatic_final.mp4' \
    | sed 's|^\./||' | sort)

# One checksum run for all files; a file is new or changed when its line isn't in the manifest
sums=$(printf '%s\n' "$files" | tr '\n' '\0' | xargs -0 shasum -a 1)
if [ "$MODE" = "--mark" ]; then
    printf '%s\n' "$sums" > "$MANIFEST"
    echo "Recorded $(printf '%s\n' "$files" | wc -l | tr -d ' ') files as uploaded."
    exit 0
fi
touch "$MANIFEST"
changed=()
while IFS= read -r line; do
    if [ "$MODE" = "--all" ] || ! grep -qxF "$line" "$MANIFEST"; then
        changed+=("${line#*  }")
    fi
done <<< "$sums"

if [ ${#changed[@]} -eq 0 ]; then
    echo "Nothing to upload: the site is up to date."
    exit 0
fi

printf '%s\n' "${changed[@]}"
echo "${#changed[@]} file(s) to upload."
[ "$MODE" = "--dry" ] && exit 0

# Upload in batches over one connection; folders are created as needed
batch=()
upload() {
    [ ${#batch[@]} -eq 0 ] && return
    args=()
    for f in "${batch[@]}"; do args+=(-T "$f" "ftp://$HOST$REMOTE/$f"); done
    curl --netrc --ssl-reqd --ftp-create-dirs --silent --show-error --fail "${args[@]}"
    # Remember what is now online
    for f in "${batch[@]}"; do
        grep -vF "  $f" "$MANIFEST" > "$MANIFEST.tmp" || true
        shasum -a 1 "$f" >> "$MANIFEST.tmp"
        mv "$MANIFEST.tmp" "$MANIFEST"
    done
    batch=()
}
for f in "${changed[@]}"; do
    batch+=("$f")
    if [ ${#batch[@]} -ge 40 ]; then upload; fi
done
upload
echo "Uploaded ${#changed[@]} file(s) to https://addthunder.com/ai/"
