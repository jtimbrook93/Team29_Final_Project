<?php
require '../../app/common.php';


if ($_SERVER['REQUEST_METHOD'] == 'POST' ) {
  require 'workPost.php';
  exit;
}

//get task ID check to see if task iD is set, if it is use it, if not use 0 instead
$taskId = intval($_GET['taskId'] ?? 0);

if ($taskId < 1){
  throw new Exception('Invalid Task ID');
}
//fetch all the work for that task id
// go to the database and get stuff
$workArr = Work::getWorkByTaskId($taskId);

$json = json_encode($workArr, JSON_PRETTY_PRINT);
// convert to json and print
header ('Content-type: application/json');
echo json_encode($work);
