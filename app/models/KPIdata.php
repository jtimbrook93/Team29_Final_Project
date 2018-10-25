<?php

class KPIdata
{
  public $siteId;
  public $turbineDeployedId;
  public $sensorDeployedId;
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
      $this->siteId = intval($data['siteId']);
      $this->turbineDeployedId = intval($data['turbineDeployedId']);
      $this->sensorDeployedId = intval($data['sensorDeployedId']);
      $this->output = intval($data['output']);
      $this->heartRate = floatval($data['heartRate']);
      $this->compressorEfficiency = floatval($data['compressorEfficiency']);
      $this->availability = floatval($data['availability']);
      $this->reliability = floatval($data['reliability']);
      $this->firedHours = floatval($data['firedHours']);
      $this->trips = intval($data['trips']);
      $this->starts = intval($data['starts']);



    }
    public function getKPIsdata() {

      // 1. Connect to the database
      $db = new PDO(DB_SERVER, DB_USER, DB_PW);

      // 2. Prepare the query
      // connect turbine_deploy table and pull in siteID information to connect the tables
    //this will show the sites for each kpi for a turbine
      $sql = 'SELECT Turbine_deploy.siteId, Sensor_deploy.turbineDeployedId, Time_Series_for_KPI.sensorDeployedId, output, heartRate, compressorEfficiency, availability, reliability, firedHours, trips, starts
              FROM Time_Series_for_KPI
              INNER JOIN Sensor_deploy
              ON Time_Series_for_KPI.sensorDeployedId = Sensor_deploy.sensorDeployedId
              INNER JOIN Turbine_deploy
              ON Sensor_deploy.turbineDeployedId = Turbine_deploy.turbineDeployedId
              Group By Turbine_deploy.siteId'; //this needs to be fixed eventually

      $statement = $db->prepare($sql);

      // 3. Run the query
      $success = $statement->execute();

      // 4. Handle the results
      $arr = [];
      while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {

        // 4.a. For each row, make a new work php object
        $kpidataItem =  new KPIdata($row);
        array_push($arr, $kpidataItem);

      }

      // 4.b. return the array of work objects
      return $arr;
    }

    }
