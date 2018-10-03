<?php
require '../../app/common.php';

//fetch all the work for that task id
// go to the database and get stuff

$team = Team::findAll();

// convert to json and print
$json = json_encode($teams, JSON_PRETTY_PRINT);

header ('Content-type: application/json');
echo json_encode($teams);
