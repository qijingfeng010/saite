<?php
  include "public.php";

  $username=$_POST['username'];
  $password=$_POST['password'];

  $sql="select * from message where username='$username' and password='$password'";

  $res=$conn->query($sql);
  $rows=$res->fetch_assoc();

  if($rows){
  	echo "<script>alert('登录成功');location.href='../saite.html'</script>";

  }else{
  	echo "<script>alert('登录失败');location.href='../html/login.html'</script>";

  }

?>
