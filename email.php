<?php
$emails = "signups.txt";
$email_handle = fopen($emails, 'a');
$emailData = $_POST["email"] . "\n";
fwrite($email_handle, $emailData);
fclose($email_handle);
?>