<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$text = $_POST['user_text'];
$email = $_POST['user_email'];
$social = $_POST['user_social'];
$select = $_POST['user_selection'];

// $mail->SMTPDebug = 3;                             // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'lexa.animewnik@gmail.com'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'wexqtubpuptrvrkb'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('Admin');  // от кого будет уходить письмо?
$mail->addAddress('lexa.animewnik@gmail.com');  // Кому будет уходить письмо 
$mail->isHTML(true);                          

$mail->Subject = 'Заявка с сайта Kotenko nutri';
$mail->Body    = '' .$name . ' оставил заявку,<br> Его выбор услуги: '.$select' <br> его сообщение:'.$text .'<br>Социальная сеть пользователя:'.$social' <br>Почта этого пользователя: ' .$email;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: index.html');
}
?>