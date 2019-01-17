<?php 
require 'PDO.php';
    //http://stackoverflow.com/questions/15485354/angular-http-post-to-php-and-undefined
    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $idCreateur = $request->idCreateur;
        $nomLieu = $request->nomLieu;
		$adresse = $request->adresse;
		$latitude = $request->latitude;
		$longitude = $request->longitude;
		$installation = $request->installation;
		$sanitaire = $request->sanitaire;
		$tranquillite = $request->tranquillite;
		$datetime = date("Y-m-d H:i:s");

		try {
      $stmt = $pdo->prepare('INSERT INTO lieupicnic ( idCreateur, nomLieu, adresse, latitude, longitude, installation, sanitaire, tranquillite, dateCreation) VALUES (:idCreateur, :nomLieu, :adresse, :latitude, :longitude, :installation, :sanitaire, :tranquillite, :dateCreation)');
	  $stmt->bindValue(':idCreateur', $idCreateur, PDO::PARAM_INT);
	  $stmt->bindValue(':nomLieu', $nomLieu);
	  $stmt->bindValue(':adresse', $adresse);
	  $stmt->bindValue(':latitude', $latitude);
	  $stmt->bindValue(':longitude', $longitude);
	  $stmt->bindValue(':installation', $installation);
	  $stmt->bindValue(':sanitaire', $sanitaire);
	  $stmt->bindValue(':tranquillite', $tranquillite);
	  $stmt->bindValue(':dateCreation', $datetime);
	  $stmt->execute();
   }
	catch(PDOException $e)
	{	
      echo $e->getMessage();
	}
    }
    else {
        echo "Not called properly with parameters!";
    }
?>