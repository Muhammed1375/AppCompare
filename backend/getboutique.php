<?php

include "config.php";

$data = array();
$id = $_Get['id_article'];

$q = mysqli_query($con, "SELECT * FROM `articles` WHERE `id_article` = $id LIMIT 1");

while($row = mysqli_fetch_object($q)){
    $data[] = $row;
}
echo json_encode($data);
echo mysqli_error($con);




/*getSingleStudent*/

?>