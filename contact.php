<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // You can customize the email subject and recipient here
    $to = "xdd1@tutanota.com";
    $subject = "New Form Submission";
    $headers = "From: $email";
    
    // Send the email
    $mailResult = mail($to, $subject, $message, $headers);
    
    if ($mailResult) {
        echo "Thank you for your submission!";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>
