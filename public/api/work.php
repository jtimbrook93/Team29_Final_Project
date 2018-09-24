<?php

require '../../app/common.php';

$taskId = $_GET['taskId'] ?? 0;

if ($taskId < 1) {
  throw new Exception('Invalid Task ID');
}

// 1. Go to the database and get all work associated with the $taskId
$workArr = Work::getAllWorkByTask($taskId);

// 2. Convert to JSON
$json = json_encode($workArr);

// 3. Print
echo $json;

echo 'Task id is:' . $taskId;
