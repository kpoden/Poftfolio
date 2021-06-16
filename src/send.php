<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    thanks
    thanks
    thanks for
    Windows PowerShell
    (C) Корпорация Майкрософт (Microsoft Corporation). Все права защищены.

    Попробуйте новую кроссплатформенную оболочку PowerShell (https://aka.ms/pscore6)

    PS C:\Users\User\Documents\GitHub\poden>
</body>

</html>


<?php
    $to      = 'kpodenejny@gmail.com';
    $subject = 'Work';
    $message = $_POST['message'];


    mail($to, $subject, $message);
    header("Location: http://poden.ru");
?>