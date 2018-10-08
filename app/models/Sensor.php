<?php

class Sensor
{
  public $sensorId;
  public $sensorName;
  public $sensorDescription;
  public $maintenance;
  public $totalLifeExpectancyHours;

  public function __construct($data) {
   // creating a new object instance using 'id' as integer

    $this->sensorId = intval($data['id']);
    $this->sensorName = ($data['name']);
    $this->sensorDescription = ($data['description']);
    $this->maintenance = ($data['description']);
    $this->totalLifeExpectancyHours = intval($data['description']);

  }
  public static function fetchAll() {

    // 1. Connect to the database
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);

    // 2. Prepare the query
    $sql = 'SELECT * FROM Sensor';
    $statement = $db->prepare($sql);

    // 3. Run the query
    $success = $statement->execute(

    );

    // 4. Handle the results
    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {

      // 4.a. For each row, make a new work php object
      $clientItem =  new Sensor($row);
      array_push($arr, $sensorItem);

    }

    // 4.b. return the array of work objects
    return $arr;
  }
  public function create(){
  $db = new PDO(DB_NAME, DB_USER, DB_PW);

sql = 'INSERT INTO Sensor (sensorId, sensorName, sensorDescription, maintenance, totalLifeExpectancyHours)
      VALUES (?,?,?,?,?)';
}
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
