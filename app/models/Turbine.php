<?php

class Turbine
{
  public $turbineId;
  public $turbineName;
  public $siteId;
  public $siteName;
  public $turbineDescription;
  public $capacity;
  public $rampUpTime;
  public $maintenanceInterval;

    public function __construct($data) {

     // creating a new object instance using 'id' as integer

      $this->turbineId = intval($data['turbineId']);
      $this->turbineName = ($data['turbineName']);
      $this->siteId = intval($data['siteId']);
      $this->siteName = ($data['siteName']);
      $this->turbineDescription = ($data['turbineDescription']);
      $this->capacity = ($data['capacity']);
      $this->rampUpTime = ($data['rampUpTime']);
      $this->maintaintenceInterval = ($data['maintenanceInterval']);


    }
    public function getTurbines() {

      // 1. Connect to the database
      $db = new PDO(DB_SERVER, DB_USER, DB_PW);

      // 2. Prepare the query
      $sql = 'SELECT Turbine.turbineId, Turbine.turbineName, Site.siteId, Site.siteName,
       Turbine.turbineDescription, Turbine.capacity, Turbine.rampUpTime, Turbine.maintenanceInterval
      from Site, Turbine, Turbine_deploy
      where Turbine_deploy.siteId = Site.siteId and
      Turbine_deploy.turbineID = Turbine.turbineId;';

      $statement = $db->prepare($sql);

      // 3. Run the query
      $success = $statement->execute();

      // 4. Handle the results
      $arr = [];
      while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {

        // 4.a. For each row, make a new work php object
        $turbineItem =  new Turbine($row);
        array_push($arr, $turbineItem);

      }

      // 4.b. return the array of work objects
      return $arr;
    }

    }
