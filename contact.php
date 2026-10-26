<?php
// Receives the contact form on contact.html and emails it to Cinemataztic. Answers in JSON:
// {"ok": true} when the mail was handed to the server, otherwise {"ok": false, "error": "..."}.

$to = 'mikkel@cinemataztic.com';

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

function reply($ok, $error = '', $code = 200) {
    http_response_code($code);
    echo json_encode($ok ? ['ok' => true] : ['ok' => false, 'error' => $error]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') reply(false, 'Use POST', 405);

// Bots fill in the hidden "website" field; pretend it worked and send nothing
if (!empty($_POST['website'])) reply(true);

// One line of text, without line breaks (they could add extra mail headers)
function field($name, $max) {
    $value = isset($_POST[$name]) ? trim((string) $_POST[$name]) : '';
    $value = preg_replace('/[\r\n\t]+/', ' ', $value);
    return mb_substr($value, 0, $max, 'UTF-8');
}

$data = [
    'First name'       => field('first_name', 100),
    'Last name'        => field('last_name', 100),
    'Work email'       => field('email', 200),
    'Job title'        => field('job_title', 100),
    'Company name'     => field('company', 150),
    'Phone number'     => field('phone', 40),
    'Country'          => field('country', 60),
    'Area of interest' => field('interest', 60),
    'Company type'     => field('company_type', 60),
];
$message = isset($_POST['message']) ? mb_substr(trim((string) $_POST['message']), 0, 5000, 'UTF-8') : '';

foreach ($data as $label => $value) {
    if ($value === '') reply(false, "Missing: $label", 400);
}
if (!filter_var($data['Work email'], FILTER_VALIDATE_EMAIL)) reply(false, 'Invalid email address', 400);
if (($_POST['consent'] ?? '') !== 'yes') reply(false, 'Consent is required', 400);

$body = "New enquiry from the contact form on the website\n\n";
foreach ($data as $label => $value) $body .= str_pad($label . ':', 18) . $value . "\n";
$body .= "\nMessage:\n" . ($message !== '' ? $message : '(none)') . "\n";
$body .= "\nConsent to be contacted: yes\nSent: " . gmdate('Y-m-d H:i') . " UTC\n";

$subject = 'Contact form: ' . $data['Company name'] . ' (' . $data['Area of interest'] . ')';
$host = preg_replace('/^www\./', '', preg_replace('/:\d+$/', '', $_SERVER['SERVER_NAME'] ?? 'localhost'));
$name = $data['First name'] . ' ' . $data['Last name'];
$headers = [
    'From: Cinemataztic website <no-reply@' . $host . '>',
    'Reply-To: ' . mb_encode_mimeheader($name, 'UTF-8') . ' <' . $data['Work email'] . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
];

$sent = mail($to, mb_encode_mimeheader($subject, 'UTF-8'), $body, implode("\r\n", $headers));
if (!$sent) reply(false, 'The mail could not be sent', 500);
reply(true);
