<?php
$data_json = file_get_contents("php://input");
$data = json_decode($data_json,true);


$from = 'Test DE';
$to = 'Konstantin <kpodenejny@gmail.com>';
$subject = 'You have new message';
$message = "
<html>
<head>
<title>Email</title>
</head>
<body>
<h1>From: ".$data['name']."</h1>
<h2>Email: ".$data['email']."</h2>
<h2>Message:</h2>
<h1>".$data['msg']."</h1>


</body>
</html>
";
$headers = 'From: ' . $from;
$headers  = "Content-type: text/html; charset=\"utf-8\" \r\n";
 
if (!mail($to, $subject, $message, $headers))
{
    echo "Error.";
}
else
{
    echo "Message has been sent";
}