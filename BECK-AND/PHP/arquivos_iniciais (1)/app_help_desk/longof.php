<?php
session_start();
echo'</pre>';

 session_destroy();
 header('Location:index.php');
?>