<?php
    include "config.php";

    $input = file_get_contents('php://input');
    $data = json_decode($input,true);
    $message = array();
    $nom = $data['nom'];
    $type_de_produit = $data['type_de_produit'];
    $prix = $data['prix'];
    $model =$data['model'];
    $marque = $data['marque'];


 $q = mysqli_query($con, "INSERT INTO `articles` (`nom`,`type_de_produit`,`prix`,`model`,`marque`) VALUES ('$nom','$type_de_produit','$prix','$model','$marque')");

if($q){
    http_response_code(201);
    $message['status'] = "Success";
}else{
    http_response_code(422);
    $message['status']= "Error";
}
echo json_encode($message);
echo mysqli_error($con);
?>