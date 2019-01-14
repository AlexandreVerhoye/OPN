<?php
require '../PDO.php';
   $data = array();


    //http://stackoverflow.com/questions/15485354/angular-http-post-to-php-and-undefined
    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $idLieu = $request->idLieu;
		
		try {
      $stmt = $pdo->prepare('
        SELECT nom, prenom, texte 
        FROM commentaire 
        INNER JOIN membre ON membre.idMembre = commentaire.idAuteur WHERE idLieu = :idLieu');
	    $stmt->bindValue(':idLieu', $idLieu, PDO::PARAM_INT);
	    $stmt->execute();
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
    }
    else {
        echo "Not called properly with username parameter!";
    }
?>