<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer\src\PHPMailer.php';
require 'phpmailer\src\PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->IsHTML(true);

//From who
$mail->setFrom('test@gmail.com', 'test from');

//To who
$mail->addAddress('kpodenejny@gmail.com', 'test to');

//Subject
$mail->Subject('My portfolio site');

$body = '<h1>Вам письмо!</h1>';


if (trim(!empty($_POST['name']))) {
    $body .= '<p>От: ' . $_POST['name'] . '</p>';
}

if (trim(!empty($_POST['name']))) {
    $body .= '<p>E-mail: ' . $_POST['email'] . '</p>';
}

if (trim(!empty($_POST['name']))) {
    $body .= '<p>Сообщение: ' . $_POST['message'] . '</p>';
}

$mail->Body = $body;

//Sending

if ($mail->send()) {
    $message = "Message has been sent";
} else {
    $message = "An error has occured";
}

$response = ["message" => $message];

header('Content-Type: application/json');
echo json_encode($response);

?>