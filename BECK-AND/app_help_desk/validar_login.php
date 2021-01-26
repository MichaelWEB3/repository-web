<?php 
require_once("validador.php");


print_r($_SESSION);

?>


<?php 





$perfils =array(
    1 => 'Administrativo', 2 => 'Usuarios'
);

$usuario_app = array(
    array('id'=> 1,'email' => 'm3ribeiroo@gmail.com', 'senha' => '123456','perfil_id'=>1 ),
    array('id'=> 2,'email' => 'joao@gmail.com', 'senha' => '123456' ,'perfil_id'=>1),
    array('id'=> 3,'email' => 'karol@gmail.com', 'senha' => '123456','perfil_id'=>2),
    array('id'=> 4,'email' => 'marlos@gmail.com', 'senha' => '123456','perfil_id'=>2 )
    
    
);






$usuaroAutenticado = false;
$usuario_id=null;
$usario_perfil_id = null;

foreach($usuario_app as $user){

   

   if( $user['email'] == $_POST['email'] && $user['senha'] == $_POST['senha'] ){
           $usuaroAutenticado = true;
  
   
            $usuario_id=$user['id'];
            $usario_perfil_id = $user['perfil_id'];
        }
  
}

if($usuaroAutenticado){
    echo 'Usuario autenticado';
    $_SESSION['autenticado'] = 'sim';
    $_SESSION['id'] =  $usuario_id;
   $_SESSION['perfil_id'] =  $usario_perfil_id ;
    header('Location:home.php');
 }else{
    $_SESSION['autenticado'] ='nao';
    header('Location:index.php?login=erro');
}

?>



