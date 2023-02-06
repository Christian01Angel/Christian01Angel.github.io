'use strict'

var contador = 0;

//Funcion para el menu
function desplegarMenu(){
    var menu = document.getElementById('menu').style;
    var lista = document.getElementById('listaMenu').style;
    var lista2 = document.getElementById('listaMenu2').style;
    var body = document.getElementById('body').style;
    if(contador % 2 == 0){
        lista.visibility = 'visible';
        lista.opacity = 1;
        lista.background = 'linear-gradient(#1a759f, #168aad)';
        lista2.visibility = 'visible';
        lista2.opacity = 1;
        lista2.background = 'linear-gradient(#1a759f, #168aad)';
        menu.height = '100%';
        menu.width = '15%'
        body.margin = '0 250px';
    }
    else{
        lista.visibility = 'hidden';
        lista.opacity = 0;
        body.margin = '0 150px'
        menu.height = '45px';
        menu.width = '10%'
    }
    contador ++;
}

//Funcion para mostrar mas info
function mostrar(){
    var mostrar = document.getElementById('extra');
    var parrafo = document.getElementById('mas').style;
    if(mostrar.innerHTML == 'Un poco más acerca de mi'){
        mostrar.textContent = 'Mostrar menos'
        parrafo.visibility = 'visible';
    }
    else if(mostrar.innerHTML == 'Mostrar menos'){
        mostrar.textContent = 'Un poco más acerca de mi'
        parrafo.visibility = 'hidden';
    }
}