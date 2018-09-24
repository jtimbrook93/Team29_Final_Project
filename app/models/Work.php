<?php

class Worker
{
  public $id;
  public $start_date;
  public $end_date;

  public function __construct($row){
    $this->id = $row['id'];

    $this->start_date = $row['start_date'];
    $this->end_date = $row['end_date'];

  }

  public static function getWorkByTask(int $taskId){
    // 1. connect to database
    // 2. run a query
    // 3. read the results
    // 4. 
  }

}
