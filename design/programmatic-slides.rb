# Placeholder gallery slides for the programmatic cases: a results slide per case and one shared
# "picture coming" slide. Run from the project root: ruby design/programmatic-slides.rb .
root = ARGV[0]
dir = File.join(root, 'assets/cases/programmatic')
Dir.mkdir(dir) unless Dir.exist?(dir)

CASES = [
  ['prog-3-mobile', '3 Mobile', '250,000', '35,000', '10.9%', 'Call Center'],
  ['prog-ase', 'Ase', '150,000', '20,000', '11.5%', 'Call Center'],
  ['prog-royal-copenhagen', 'Royal Copenhagen', '350,000', '55,000', '5.4%', 'Newsletter sign-ups'],
  ['prog-magasin', 'Magasin', '170,000', '25,000', '4.6%', 'Web traffic'],
  ['prog-villavilla', 'VillaVilla', '50,000', '7,000', '12.2%', 'Web traffic'],
  ['prog-lego-house', 'LEGO House', '250,000', '30,000', '10.4%', 'Web traffic'],
  ['prog-specsavers', 'Specsavers', '160,000', '20,000', '11.6%', 'Web bookings'],
  ['prog-arla', 'ARLA', '70,000', '10,000', '5.8%', 'Web traffic'],
  ['prog-lyko', 'LYKO', '130,000', '14,000', '23.1%', 'Club members']
]

require 'base64'

# Campaign photos shown behind the results (file in assets/cases/programmatic); embedded, since an SVG
# shown as an image cannot load other files
PHOTOS = %w[prog-3-mobile prog-ase prog-royal-copenhagen prog-magasin prog-villavilla prog-lego-house prog-specsavers prog-arla prog-lyko]
         .to_h { |id| [id, "#{id}-photo.jpg"] }

FONT = %(font-family="'Helvetica Neue', Helvetica, Arial, sans-serif")
esc = ->(s) { s.gsub('&', '&amp;').gsub('<', '&lt;') }

def stat(x, value, label, size = 80) # 80px keeps seven-character numbers like 250,000 inside the card
  # A value of several words (the leads) goes on two lines
  words = value.split(' ')
  body = if words.size > 1
    half = (words.size / 2.0).ceil
    %(<tspan x="40" y="105">#{words[0...half].join(' ')}</tspan><tspan x="40" y="160">#{words[half..].join(' ')}</tspan>)
  else
    value
  end
  %(<g transform="translate(#{x} 560)">
    <rect width="380" height="300" rx="28" fill="#121216" fill-opacity="0.86" stroke="#1f1f26" stroke-width="2" filter="url(#shadow)"/>
    <text x="40" y="150" fill="#3dc0c8" font-size="#{size}" font-weight="900" filter="url(#glow)">#{body}</text>
    <text x="40" y="230" fill="#9ca3af" font-size="30" font-weight="700" letter-spacing="4">#{label}</text>
  </g>)
end

CASES.each do |id, name, imp, vouchers, ctr, leads|
  photo = PHOTOS[id] && File.join(dir, PHOTOS[id])
  background = if photo
    data = Base64.strict_encode64(File.binread(photo))
    %(<image href="data:image/jpeg;base64,#{data}" width="1920" height="1080" preserveAspectRatio="xMidYMid slice"/>
      <rect width="1920" height="1080" fill="url(#shadeLeft)"/>
      <rect width="1920" height="1080" fill="url(#shadeBottom)"/>)
  else
    %(<rect width="1920" height="1080" fill="url(#beam)"/>)
  end
  svg = <<~SVG
    <?xml version="1.0" encoding="UTF-8"?>
    <!-- Results slide for the #{esc.(name)} programmatic case#{photo ? ', on the campaign photo' : ', until the real pictures are in'} -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080" #{FONT}>
      <defs>
        <radialGradient id="beam" cx="50%" cy="0%" r="80%"><stop offset="0" stop-color="#3dc0c8" stop-opacity="0.2"/><stop offset="1" stop-color="#3dc0c8" stop-opacity="0"/></radialGradient>
        <linearGradient id="shadeLeft" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0a0a0c" stop-opacity="0.85"/><stop offset="0.55" stop-color="#0a0a0c" stop-opacity="0.35"/><stop offset="1" stop-color="#0a0a0c" stop-opacity="0.15"/></linearGradient>
        <linearGradient id="shadeBottom" x1="0" y1="0" x2="0" y2="1"><stop offset="0.35" stop-color="#0a0a0c" stop-opacity="0"/><stop offset="1" stop-color="#0a0a0c" stop-opacity="0.75"/></linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="24" stdDeviation="28" flood-color="#000" flood-opacity="0.7"/></filter>
        <filter id="glow" x="-20%" y="-40%" width="140%" height="180%"><feGaussianBlur in="SourceGraphic" stdDeviation="14" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="1920" height="1080" fill="#0a0a0c"/>
      #{background}
      <text x="160" y="250" fill="#3dc0c8" font-size="34" font-weight="700" letter-spacing="6">PROGRAMMATIC CASE</text>
      <text x="152" y="420" fill="#ffffff" font-size="150" font-weight="900" letter-spacing="-3">#{esc.(name.upcase)}</text>
      #{stat(160, imp, 'IMPRESSIONS')}
      #{stat(580, vouchers, 'VOUCHERS')}
      #{stat(1000, ctr, 'CTR')}
      #{stat(1420, esc.(leads), 'LEADS', 52)}
    </svg>
  SVG
  File.write(File.join(dir, "#{id}-results.svg"), svg)
end

placeholder = <<~SVG
  <?xml version="1.0" encoding="UTF-8"?>
  <!-- Shared placeholder for programmatic case galleries: replace with the campaign's own pictures -->
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080" #{FONT}>
    <rect width="1920" height="1080" fill="#121216"/>
    <rect x="160" y="140" width="1600" height="800" rx="40" fill="none" stroke="#3dc0c8" stroke-opacity="0.45" stroke-width="4" stroke-dasharray="18 16"/>
    <g transform="translate(960 470)" fill="none" stroke="#3dc0c8" stroke-width="10" stroke-linejoin="round">
      <rect x="-110" y="-80" width="220" height="160" rx="18"/>
      <circle cx="-45" cy="-25" r="20"/>
      <path d="M-110 60 L-30 -10 L30 45 L65 15 L110 55"/>
    </g>
    <text x="960" y="660" fill="#ffffff" font-size="44" font-weight="900" letter-spacing="8" text-anchor="middle">PICTURES COMING SOON</text>
  </svg>
SVG
File.write(File.join(dir, 'placeholder.svg'), placeholder)
puts Dir.children(dir).sort
