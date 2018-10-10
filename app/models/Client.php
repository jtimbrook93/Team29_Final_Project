<?php

class Client

{
  public $clientId;
  public $clientName;
  public $clientDescription;
  public $gicsSector;
  public $gicsSubIndustry;
  public $headquarters;



  public function __construct($data) {
   // creating a new object instance using 'id' as integer

    $this->clientId = intval($data['clientId']);
    $this->clientName = ($data['clientName']);
    $this->clientDescription = ($data['clientDescription']);
    $this->gicsSector = intval($data['gicsSector']);
    $this->gicsSubIndustry = ($data['gicsSubIndustry']);
    $this->headquarters = ($data['headquarters']);
  }
  public static function fetchAll() {

    // 1. Connect to the database
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);

    // 2. Prepare the query
    $sql = 'SELECT * FROM Client';
    $statement = $db->prepare($sql);

    // 3. Run the query
    $success = $statement->execute(

    );

    // 4. Handle the results
    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {

      // 4.a. For each row, make a new work php object
      $clientItem =  new Client($row);
      array_push($arr, $clientItem);

    }

    // 4.b. return the array of work objects
    return $arr;
  }
  public function create(){
  $db = new PDO(DB_SERVER, DB_USER, DB_PW);

  $sql = 'INSERT INTO Client (clientId, clientName, clientDescription, gicsSector, gicsSubIndustry, headquarters)
      VALUES (?,?,?,?,?,?)';
$statement = $db->prepare($sql);

// 3. Run the query
$success = $statement->execute([
  $this->clientId,
  $this->clientName,
  $this->clientDescription,
  $this->gicsSector,
  $this->gicsSubIndustry,
  $this->headquarters
]);
  $this->id = $db->lastInsertId();
}
  }
