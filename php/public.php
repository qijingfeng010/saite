<?php
   header("content-type:text/html;charset=utf8");
   $localhost="localhost";
   $username="root";
   $password='';
   $userName="saite";

   $conn=new mysqli($localhost,$username,$password,$userName);

   if($conn->connect_error){
         die("连接失败".connect_error);
   }
   $conn->query("set names utf8");

?>