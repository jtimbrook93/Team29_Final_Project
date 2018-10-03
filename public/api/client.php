<?php
require '../../app/common.php';

//fetch all the work for that task id
// go to the database and get stuff

$clients = Client::findAll();

// convert to json and print
$json = json_encode($clients, JSON_PRETTY_PRINT);

header ('Content-type: application/json');
echo json_encode($clients);
