<?php
$name=$_POST['Name'];
$username=$_POST['Username'];
$dob=$_POST['DOB'];
$city=$_POST['City'];
$pass=$_POST['Password'];
$con=mysqli_connect('localhost','root');
mysqli_query($con,'create database if not exists dbase');
mysqli_query($con,'use dbase');
mysqli_query($con,"create table if not exists user_info 
(Name varchar(30),Username varchar(30),DOB date,City varchar(30),Password varchar(30),Primary Key(Username))");
$q="insert into user_info (Name,Username,DOB,City,Password) values ('$name','$username','$dob','$city','$pass')";
mysqli_query($con,$q);
$arr=mysqli_query($con,"select Name from user_info");
?>
<html>
<head></head>
<body>
<h3>Users are:<h3>
<ul>
<?php 
while($row=mysqli_fetch_array($arr))
	echo "<li>".$row['Name']."</li>";
?>
</ul>
</body>
</html>
<?php mysqli_close($con); ?>