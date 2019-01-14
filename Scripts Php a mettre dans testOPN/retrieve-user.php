<?php
require 'PDO.php';
   $data = array();
    //http://stackoverflow.com/questions/15485354/angular-http-post-to-php-and-undefined
    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $email = $request->email;
        $password = $request->password;
		
		try {
      $stmt = $pdo->prepare('SELECT * FROM membre WHERE eMail = :email AND password = :password');
	  $stmt->bindValue(':email', $email, PDO::PARAM_INT);
	  $stmt->bindValue(':password', $password, PDO::PARAM_INT);
	  $stmt->execute();

      while($row  = $stmt->fetch(PDO::FETCH_OBJ))
      {
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
        echo "Not called properly with parameters!";
    }
?>