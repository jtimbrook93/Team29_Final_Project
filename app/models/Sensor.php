<?php

class Sensor
{
  public $sensorId;
  public $sensorName;
  public $sensorDescription;
  public $manufacturer;
  public $totalLifeExpectancyHours;
  public $sensorDeployedId;
  public $turbineDeployedId;
  public $serialNumber;
  public $deployedDate;

  public function __construct($data) {
   // creating a new object instance using 'id' as integer

    $this->sensorId = intval($data['sensorId']);
    $this->sensorName = ($data['sensorName']);
    $this->sensorDescription = ($data['sensorDescription']);
    $this->manufacturer = ($data['manufacturer']);
    $this->totalLifeExpectancyHours = intval($data['totalLifeExpectancyHours']);
    $this->$sensorDeployedId = intval($data['sensorDeployedId']);
    $this->$turbineDeployedId = intval($data['turbineDeployedId']);
    $this->$serialNumber = intval($data['serialNumber']);
    $this->$deployedDate = ($data['deployedDate']);

  }
  public function getAllSensors() {

    // 1. Connect to the database
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);

    // 2. Prepare the query
    $sql = 'SELECT * FROM Sensor, Sensor_deploy
          where Sensor.sensorId = Sensor_deploy.sensorId';
    $statement = $db->prepare($sql);

    // 3. Run the query
    $success = $statement->execute();

    // 4. Handle the results
    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {

      // 4.a. For each row, make a new work php object
      $sensorItem =  new Sensor($row);
      array_push($arr, $sensorItem);

    }

    // 4.b. return the array of work objects
    return $arr;
  }
  public function create(){
  $db = new PDO(DB_SERVER, DB_USER, DB_PW);

$sql = 'INSERT INTO Sensor (sensorId, sensorName, sensorDescription, maintenance, totalLifeExpectancyHours)
      VALUES (?,?,?,?,?)';

$statement = $db->prepare($sql);

// 3. Run the query
$success = $statement->execute([
  $this->sensorId,
  $this->sensorName,
  $this->sensorDescription,
  $this->maintenance,
  $this->totalLifeExpectancyHours
]);
  $this->id = $db->lastInsertId();
}
  }
