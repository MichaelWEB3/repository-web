<?php 
require("validador.php");


$chamados = array();

$arquivo = fopen(include_once"../../../app_help_desk/arquivo.txt",'r');//abrir um arquivo txt pra ler



//recuperar linhas
while(!feof($arquivo) ){//percorrer ate o fim do arqueivo feof

$registro =  fgets($arquivo);

$chamados[]= $registro;


}

fclose($arquivo);


?>



<html>
  <head>
    <meta charset="utf-8" />
    <title>App Help Desk</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <style>
      .card-consultar-chamado {
        padding: 30px 0 0 0;
        width: 100%;
        margin: 0 auto;
      }
    </style>
  </head>

  <body>

    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <img src="logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
        App Help Desk
      </a>

      <ul class="navbar-nav">
       <li class="nav-item">
         <a href="longof.php" class="nav link">sair</a>
       </li>
      
      </ul>
    </nav>

    <div class="container">    
      <div class="row">

        <div class="card-consultar-chamado">
          <div class="card">
            <div class="card-header">
              Consulta de chamado
            </div>
            

            <?php foreach($chamados as $elementos){ ?>

          

         <?php  
          $chamando_dados= explode('#',$elementos);
          
          if($_SESSION['perfil_id'] == 2){
                   if($_SESSION['id'] != $chamando_dados[0] ){
                     continue;
                   }
          }


           if(count($chamando_dados) < 3){
             continue;
           }


         ?>

            <div class="card-body">
              
              <div class="card mb-3 bg-light">
                <div class="card-body">
                  <h5 class="card-title">Título do chamado:  <?= $chamando_dados[1].'<br/>'; ?></h5>
                  <h6 class="card-subtitle mb-2 text-muted">Categoria <?= $chamando_dados[2].'<br/>'; ?> </h6>
                  <p class="card-text">Descrição do chamado: <?= $chamando_dados[3].'<br/>'; ?></p>

                </div>
              </div>


              <?php } ?>
              

              <div class="row mt-5">
                <div class="col-6">
                 <a href="home.php"> <button class="btn btn-lg btn-warning btn-block" >Voltar</button>
               </a> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>