
<html>
    <body>
        <?php header( 'Location: /index.html' ) ;  ?>

            resourc mysql_connect ([ string $server = ini_get("mysql.default_host") [, string $username = ini_get("mysql.default_user")
            [, string $password = ini_get("mysql.default_password") [, bool $new_link = false [, int $client_flags = 0 ]]]]] )

            $link = mysql_connect('localhost', 'mysql_user', 'mysql_password');
                if (!$link){
                    die('Could not connect: ' . mysql_error());
                }           
            echo 'Connected successfully';
            mysql_close($link);
        
        // RECEBENDO OS DADOS PREENCHIDOS DO FORMULÁRIO !
        $nome	= $_POST ["nome"];	
        $email	= $_POST ["email"];
        ?>
   </body>
</html>
 
