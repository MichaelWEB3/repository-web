<?php 
session_start();







$titulo = str_replace('#','-', $_POST['titulo']);
$categoria =str_replace('#','-',  $_POST['categoria']);
$descricao = str_replace('#','-', $_POST['descricao']);

$arquivo = fopen(require "../../../app_help_desk/arquivo.txt",'a');//abrir um arquivo txt


$texto = $_SESSION['id'].'#'.$titulo.'#'.$categoria. '#'.$descricao . PHP_EOL;

fwrite($arquivo,$texto);//escrever no arquivo

fclose($arquivo);//fechar arquivo

////////////////////ler 
header('Location:home.php');



?>