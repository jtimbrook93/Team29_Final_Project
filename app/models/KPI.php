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
      $this->output = ($data['avg(output)']);
      $this->heartRate = ($data['avg(heartRate)']);
      $this->compressorEfficiency = ($data['avg(compressorEfficiency)']);
      $this->availability = ($data['avg(availability)']);
      $this->reliability = ($data['avg(reliability)']);
      $this->firedHours = ($data['avg(firedHours)']);
      $this->trips = ($data['avg(trips)']);
      $this->starts = ($data['avg(starts)']);



    }
    public function getKPIs() {

      // 1. Connect to the database
      $db = new PDO(DB_SERVER, DB_USER, DB_PW);

      // 2. Prepare the query
      $sql = 'SELECT Sensor_deploy.turbineDeployedId, avg(output), avg(heartRate), avg(compressorEfficiency),
              avg(availability), avg(reliability), avg(firedHours), avg(trips), avg(starts)
              from Time_Series_for_KPI, Sensor_deploy
              where Time_Series_for_KPI.sensorDeployedId = Sensor_deploy.sensorDeployedId and Sensor_deploy.turbineDeployedId = 1
              union
              SELECT Sensor_deploy.turbineDeployedId, avg(output), avg(heartRate), avg(compressorEfficiency),
              avg(availability), avg(reliability), avg(firedHours), avg(trips), avg(starts)
              from Time_Series_for_KPI, Sensor_deploy
              where Time_Series_for_KPI.sensorDeployedId = Sensor_deploy.sensorDeployedId and Sensor_deploy.turbineDeployedId = 2;
              ';

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
