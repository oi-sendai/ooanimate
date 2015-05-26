<?php
//mail('binarygeometry@gmail.com', 'Subject Line Here', 'Body of Message Here');
//return 'blah';
 //if ($_POST["submit"]) {
    // $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    // $human = intval($_POST['human']);
$headers = "From: hello@unstructured-networking.com\r\n";
$headers .=  "Reply-To: hello@unstructured-networking.com\r\n";
$headers .= "X-Mailer: PHP/" .PHP_VERSION;


    $from = 'Demo Contact Form'; 
    $to = 'binarygeometry@gmail.com'; 
    $subject = 'Message from Contact Demo ';
     
    $body = "From: $email\n Message:\n $message";

    if (!$_POST['email']) {
      $errEmail = 'Please enter a valid email address';
    }
    if (!$_POST['message']) {
       $errMessage = 'Please enter your message';
    }

    if ($human !== 9) {
        $errHuman = 'Your anti-spam is incorrect';
    }

    // If there are no errors, send the email
   if ( !$errEmail && !$errMessage && !$errHuman) {
        if (mail ($to, $subject, $body, $from)) {
            $result='<div class="alert alert-success">Thank You! I will be in touch</div>';
            return $result;
        } else {
            $result='<div class="alert alert-danger">Sorry there was an error sending your message. Please try again later</div>';
            return $result;
        }
    }
//}
