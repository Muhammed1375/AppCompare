<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST,GET,DELETE,PUT,PATCH,OPTIONS');
header('Access-Control-Allow-Headers:token,Content-Type');

header('Access-Control-Allow-Max-Age:1728000');
header('Content-length:0');
header('Content-Type:text/plain');

$con = mysqli_connect("localhost","root","","appcompare") or die("vous n'avez pas accees a la bd muhamed");


?>