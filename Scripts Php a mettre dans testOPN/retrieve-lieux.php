<?php
require 'PDO.php';
   $data    = array();
   // Attempt to query database table and retrieve data
   try {
      $stmt = $pdo->query('SELECT idLieu, nomLieu, latitude, longitude FROM lieupicnic');
      while($row  = $stmt->fetch(PDO::FETCH_OBJ))
      {
         // Assign each row of data to associative array
         $data[] = $row;
      }

      // Return data as JSON
      echo json_encode($data);
   }
   catch(PDOException $e)
   {
      echo $e->getMessage();
   }
?>