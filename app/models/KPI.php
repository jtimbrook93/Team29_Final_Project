<?php

class KPI
{
  public $sensorDeployedId;
  public $dataCollectedDate;
  public $output;
  public $heartRate;
  public $compressorEfficiency;
  public $availability;
  public $reliability;
  public $firedHours;
  public $trips;
  public $starts;

    public function __construct($data) {

     // creating a new object instance using 'id' as integer

      $this->sensorDeployedId = intval($data['sensorDeployedId']);
      $this->dataCollectedDate = ($data['dataCollectedDate']);
      $this->output = intval($data['output']);
      $this->heartRate = ($data['heartRate']);
      $this->compressorEfficiency = ($data['compressorEfficiency']);
      $this->availability = ($data['availability']);
      $this->reliability = ($data['reliability']);
      $this->firedHours = ($data['firedHours']);
      $this->trips = ($data['trips']);
      $this->starts = ($data['starts']);



    }
    public function getKPIs() {

      // 1. Connect to the database
      $db = new PDO(DB_SERVER, DB_USER, DB_PW);

      // 2. Prepare the query
      $sql = 'SELECT turbineId, turbineName, siteId, siteName
              FROM Site, Turbine';

      $statement = $db->prepare($sql);

      // 3. Run the query
      $success = $statement->execute();

      // 4. Handle the results
      $arr = [];
      while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {

        // 4.a. For each row, make a new work php object
        $kpiItem =  new KPI($row);
        array_push($arr, $kpiItem);

      }

      // 4.b. return the array of work objects
      return $arr;
    }

    }
