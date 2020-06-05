<?php
$name=$_GET["name"];
$con=mysqli_connect('localhost','root');
mysqli_query($con,"use dbase");
$cnt=mysqli_num_rows(mysqli_query($con,"select Username from user_info where Username='$name'"));
if($cnt>=1)
echo "User name already taken";
else
echo "You can take this username";	
?>