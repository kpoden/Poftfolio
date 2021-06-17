<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>thanks</h1>


</html>


<?php
    $to      = 'kpodenejny@gmail.com';
    $subject = 'Work';
    $message = $_POST['message'];
    $headers = 

    $message = htmlspecialchars($message);
    $name = htmlspecialchars($name);


    mail($to, $subject, $message);
    header("Location: http://poden.ru");



    ini_set('error_reporting', E_ALL);
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);


?>