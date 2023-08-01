<?php
if($_POST["Message"]) {
mail("xdd1@tutanota.com", "Here is the sample subject line",
$_POST["Insert Your Message"]. "From: jane@janedoe.com");
}
?>