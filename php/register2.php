<?php
 include "public.php";
  
 $username=$_POST["username"];
 $referrer=$_POST["referrer"];
 $compellation=$_POST["compellation"];
 $password=$_POST["password"];

 // 编写sql，查看数据库有没有用户信息
 $sql="select * from message where username='$username'";
 

 //执行$sql
 $res=$conn->query($sql);
 $n = mysqli_num_rows($res);
 
 if($n){
 	echo "<script>alert('用户名已存在'); location.href='../html/register2.html'</script>";
 }else{
 	$sql1="insert into message(username,password,referrer,compellation) values('$username','$password','$referrer','$compellation')";
 	$res1=$conn->query($sql1);
 	//$sql="INSERT INTO userscore(username,score,mark) VALUES('$username','$score','$mark')";
      
     //$res=$conn->query($sql);
 	 // $rows = mysqli_num_rows($res);
 	if($res1){
 		echo "<script>alert('注册成功'); location.href='../saite.html'</script>";
 	}else{
 		echo "<script>alert('注册失败'); location.href='../html/register2.html'</script>";
 	}
 	
 }



?>