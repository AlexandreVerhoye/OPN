<?php 
require 'PDO.php';
    //http://stackoverflow.com/questions/15485354/angular-http-post-to-php-and-undefined
    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $idLieu = $request->idLieu;
        $idAuteur = $request->idAuteur;
        $contenu = $request->contenu;

		try {
      $stmt = $pdo->prepare('INSERT INTO commentaire ( idLieu, idAuteur, texte) VALUES (:idLieu, :idAuteur, :texte)');
	  $stmt->bindValue(':idLieu', $idLieu, PDO::PARAM_INT);
	  $stmt->bindValue(':idAuteur', $idAuteur, PDO::PARAM_INT);
	  $stmt->bindValue(':texte', $contenu);
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