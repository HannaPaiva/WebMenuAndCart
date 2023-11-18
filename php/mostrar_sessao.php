<?php

session_start();

$devolver = [
    "nome" => "",
    "tipo" => ""
];


if (isset($_SESSION['tipo']) && $_SESSION['tipo'] == "cliente") {
    $devolver["tipo"] = $_SESSION['tipo'];
    if (isset($_SESSION['nomeSessao'])) {
    $devolver["nome"] = $_SESSION['nomeSessao'];

    }
    else{
        $devolver["nome"] = "Maria Joaquina";
    }
    print_r(json_encode($devolver));





} elseif (isset($_SESSION['tipo']) && $_SESSION['tipo'] == "admin") {
    $devolver["tipo"] = $_SESSION['tipo'];
    if (isset($_SESSION['nomeSessao'])) {
        $devolver["nome"] = $_SESSION['nomeSessao'];
        }
        else{
            $devolver["nome"] = "Admin";
        }
    print_r(json_encode($devolver));
} else {

    $_SESSION['tipo'] = "cliente";
    $_SESSION['nomeSessao'] = "Maria Joaquina";
    $devolver["tipo"] = $_SESSION['tipo'];
    $devolver["nome"] =  $_SESSION['nomeSessao'];
    print_r(json_encode($devolver));
}
