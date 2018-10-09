<?php
require '../../app/common.php';


if ($_SERVER['REQUEST_METHOD'] == 'POST' ) {
  require 'dataPost.php';
  exit;
}

//fetch all the work for that task id
// go to the database and get stuff
$siteArr = Site::getAllSites();

$json = json_encode($siteArr, JSON_PRETTY_PRINT);
// convert to json and print
header ('Content-type: application/json;charset=utf-8');
echo json_encode($siteArr);
