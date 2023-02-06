"use strict";

// Funciones para animar las imagenes de la página
function cambiarBurrata(){
    var img = document.getElementById('burrata').src = 'img/Cocina/Burrata 1.jpeg';
    img = setTimeout(cambiar => {document.getElementById('burrata').src = 'img/Cocina/Burrata 2.jpeg';}, 300);
}

function cambiarEnsalada(){
    var img = document.getElementById('ensalada').src = 'img/Cocina/Ensalada RC 1.jpeg';
    img = setTimeout(cambiar => {document.getElementById('ensalada').src = 'img/Cocina/Ensalada RC 2.jpeg';}, 300);
    img = setTimeout(cambiar => {document.getElementById('ensalada').src = 'img/Cocina/Ensalada RC 3.jpeg';}, 600);
    img = setTimeout(cambiar => {document.getElementById('ensalada').src = 'img/Cocina/Ensalada RC 4.jpeg';}, 900);
    img = setTimeout(cambiar => {document.getElementById('ensalada').src = 'img/Cocina/Ensalada RC 5.jpeg';}, 1200);
}

function cambiarPate(){
    var img= document.getElementById('pat').src = 'img/Cocina/Pate 1.jpeg';
    img = setTimeout(cambiar => { document.getElementById('pat').src = 'img/Cocina/Pate 2.jpeg'}, 300);
}

function cambiarSeviche(){
    var img = document.getElementById('seviches').src = 'img/Cocina/Seviche 1.jpeg';
    img = setTimeout(cambiar => {document.getElementById('seviches').src =  'img/Cocina/Seviche 2.jpeg'}, 300);
    img = setTimeout(cambiar => {document.getElementById('seviches').src =  'img/Cocina/Seviche 3.jpeg'}, 600);
}

function cambiarTartar(){
    var img = document.getElementById('salmon').src = 'img/Cocina/Tartar de Salmon 1.jpeg';
    img = setTimeout(cambiar => {document.getElementById('salmon').src = 'img/Cocina/Tartar de Salmon 2.jpeg';}, 300);
}

function cambiarPavlova(){
    var img = document.getElementById('pavlov').src = 'img/Cocina/Pavlova 1.jpeg';
    img = setTimeout(cambiar => {document.getElementById('pavlov').src = 'img/Cocina/Pavlova 2.jpeg';}, 300);
    img = setTimeout(cambiar => {document.getElementById('pavlov').src = 'img/Cocina/Pavlova 3.jpeg';}, 600);
    img = setTimeout(cambiar => {document.getElementById('pavlov').src = 'img/Cocina/Pavlova 4.jpeg';}, 900);
    img = setTimeout(cambiar => {document.getElementById('pavlov').src = 'img/Cocina/Pavlova 5.jpeg';}, 1200);
}

setInterval(cambiarBurrata, 600);
setInterval(cambiarEnsalada, 1500);
setInterval(cambiarPate, 600);
setInterval(cambiarSeviche, 900);
setInterval(cambiarTartar, 600);
setInterval(cambiarPavlova, 1500);

var contador = 0;

//Funcion para el menu
function desplegarMenu(){
    var menu = document.getElementById('menu').style;
    var lista = document.getElementById('listaMenu').style;
    var lista2 = document.getElementById('listaMenu2').style;
    if(contador % 2 == 0){
        lista.visibility = 'visible';
        lista.opacity = 1;
        lista.background = 'linear-gradient(#1a759f, #168aad)';
        lista2.visibility = 'visible';
        lista2.opacity = 1;
        lista2.background = 'linear-gradient(#1a759f, #168aad)';
    }
    else{
        lista.visibility = 'hidden';
        lista.opacity = 0;
    }
    contador ++;
}
