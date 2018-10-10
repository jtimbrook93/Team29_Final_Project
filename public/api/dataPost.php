<?php

$client = new Client($_POST);

$client->create();

echo json_encode($client);

$sensor = new Sensor($_POST);

$sensor->create();

echo json_encode($sensor);

$site = new Site($_POST);

$site->create();

echo json_encode($site);
