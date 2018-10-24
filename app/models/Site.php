<?php

class Site

{

  public $siteId;
  public $clientId;
  public $siteName;
  public $siteDescription;  //'YYYY-MM-DD'
  public $primaryContact;   //'YYYY-MM-DD', needs to be calculated
  public $capacity;
  public $addrLine1;
  public $addrLine2;
  public $addrCity;
  public $addrState;
  public $addrZip;
  public $addrCountry;


  public function __construct($row) {
    $this->siteId = isset($row['siteId'])   ? intval($row['siteId']) : null;

    $this->clientId = intval($row['clientId']);
    $this->siteName = $row['siteName'];
    $this->siteDescription = ($row['siteDescription']);
    $this->primaryContact= ($row['primaryContact']);
    $this->capacity = intval($row['capacity']);
    $this->addrLine1 = $row['addrLine1'];
    $this->addrLine2 = ($row['addrLine2']);
    $this->addrCity = ($row['addrCity']);
    $this->addrState = ($row['addrState']);
    $this->addrZip = intval($row['addrZip']);
    $this->addrCountry = ($row['addrCountry']);
    

  }
  public static function getAllSites(){
  $db = new PDO(DB_SERVER, DB_USER, DB_PW);

$sql = 'SELECT * FROM Site';



  $statement = $db->prepare($sql);

  // 3. Run the query
  $success = $statement->execute([


  ]);
  // 4. Handle the results
  $arr = [];
  while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {

    // 4.a. For each row, make a new work php object
    $siteItem =  new Site($row);
  array_push($arr, $siteItem);
  }

  // 4.b. return the array of work objects
  return $arr;

}

public function create() {
  $db = new PDO(DB_SERVER, DB_USER, DB_PW);

$sql = 'INSERT INTO SITE (siteId, clientId, siteName, siteDescription, primaryContact, capacity, addrLine1, addrLine2, addrCity, addrState, addrZip, addrCountry)
        VALUES (?,?,?,?,?,?,?,?,?,?,?,?)';



  $statement = $db->prepare($sql);

  // 3. Run the query
  $success = $statement->execute([
    $this->clientId,
    $this->siteName,
    $this->siteDescription,
    $this->primaryContact,
    $this->capacity,
    $this->addrLine1,
    $this->addrLine2,
    $this->addrCity,
    $this->addrState,
    $this->addrZip,
    $this->addrCountry
  ]);
      $this->id = $db->lastInsertId();
}

  public static function getWorkByTaskId(int $taskId) {

    // 1. Connect to the database
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);

    // 2. Prepare the query
    $sql = 'SELECT * FROM Work WHERE task_id = ?';

    $statement = $db->prepare($sql);

    // 3. Run the query
    $success = $statement->execute(
        [$taskId]
    );

    // 4. Handle the results
    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {

      // 4.a. For each row, make a new work php object
      $workItem =  new Work($row);
      array_push($arr, $workItem);
    }

    // 4.b. return the array of work objects
    return $arr;
  }
}
