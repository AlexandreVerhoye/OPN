<?php 
require 'PDO.php';
    //http://stackoverflow.com/questions/15485354/angular-http-post-to-php-and-undefined
    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $email = $request->email;
        $password = $request->password;
		$prenom = $request->prenom;
		$nom = $request->nom;

		try {
      $stmt = $pdo->prepare('INSERT INTO Membre ( nom, prenom, eMail, password) VALUES (:nom, :prenom, :email, :password)');
	  $stmt->bindValue(':nom', $nom);
	  $stmt->bindValue(':prenom', $prenom);
	  $stmt->bindValue(':email', $email);
	  $stmt->bindValue(':password', $password);
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