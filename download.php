<?php
// Sends a case video as a download. The videos live on other servers that don't let the page fetch
// them, so the download button in the case popup links here: download.php?url=<video link>.
// Only videos from Cinemataztic's own storage are passed on, so this can't be used to fetch anything else.

$allowed = [
    'https://storage.googleapis.com/cinemataztic-public/',
    'https://cinemataztic.com/static/',
];

$url = isset($_GET['url']) ? (string) $_GET['url'] : '';
if ($url === '') {
    http_response_code(400);
    exit('Missing url');
}
$isAllowed = false;
foreach ($allowed as $prefix) {
    if (strpos($url, $prefix) === 0) $isAllowed = true;
}
$name = basename((string) parse_url($url, PHP_URL_PATH));
if (!$isAllowed || strpos($url, '..') !== false || preg_match('/[\r\n]/', $url) || !preg_match('/\.(mp4|mov|m4v|webm)$/i', $name)) {
    http_response_code(403);
    exit('Not allowed');
}
$name = preg_replace('/[^A-Za-z0-9._-]/', '_', $name);

set_time_limit(0);
while (ob_get_level()) ob_end_clean();
header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; filename="' . $name . '"');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

if (function_exists('curl_init')) {
    // Stream it through as it arrives, passing on the size so the browser can show progress
    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_FOLLOWLOCATION => false,
        CURLOPT_FAILONERROR => true,
        CURLOPT_CONNECTTIMEOUT => 15,
        CURLOPT_HEADERFUNCTION => function ($ch, $line) {
            if (stripos($line, 'content-length:') === 0) header('Content-Length: ' . trim(substr($line, 15)));
            return strlen($line);
        },
        CURLOPT_WRITEFUNCTION => function ($ch, $data) {
            echo $data;
            flush();
            return strlen($data);
        },
    ]);
    curl_exec($ch);
    curl_close($ch);
} else {
    readfile($url);
}
