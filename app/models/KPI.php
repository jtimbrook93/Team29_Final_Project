<?php

class KPI
{
  public $turbineDeployedId;
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

      $this->turbineDeployedId = intval($data['turbineDeployedId']);
      $this->output = intval($data['output']);
      $this->heartRate = floatval($data['heartRate']);
      $this->compressorEfficiency = floatval($data['compressorEfficiency']);
      $this->availability = floatval($data['availability']);
      $this->reliability = floatval($data['reliability']);
      $this->firedHours = floatval($data['firedHours']);
      $this->trips = intval($data['trips']);
      $this->starts = intval($data['starts']);



    }
    public function getKPIs() {

      // 1. Connect to the database
      $db = new PDO(DB_SERVER, DB_USER, DB_PW);

      // 2. Prepare the query
      $sql = 'SELECT turbineDeployedId, AVG(output), avg(heartRate), avg(compressorEfficiency),
              avg(availability), avg(reliability), avg(firedHours), avg(trips), avg(starts)
              FROM Time_Series_for_KPI
              INNER JOIN Sensor_deploy
              ON Time_Series_for_KPI.sensorDeployedId = Sensor_deploy.sensorDeployedId
              WHERE Sensor_deploy.turbineDeployedId = ?;';

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
