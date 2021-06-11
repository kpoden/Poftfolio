
<?php
$to      = 'kpodenejny@gmail.com';
$subject = 'Work';
$message = $_POST['message'];
$headers = 'From: '$_POST['name']' . "\r\n" .'
           'Email: '$_POST['email']' . "\r\n" .'

mail($to, $subject, $message, $headers);
header("Location: http://poden.ru");
?>
