'use strict';

var certificados = ['Desarrollo Personal.png', 'Foco.png', 'Git y Github.png', 'Habitos.png', 'HTML5 y CSS3 1-4.png', 'HTML5 y CSS3 2-4.png', 
'HTML5 y CSS3 3-4.png', 'HTML5 y CSS3 4-4.png', 'LinkedIn.png', 'Logica de Programacion 1.png', 'Logica de Programacion 2.png', 
'Logica de Programacion 3.png', 'Principiante en Programación.png', 'Tecnicas para el autodesarrollo.png', 'Html SoloLearn.png',
 'JavaScript Sololearn.png', 'Python SoloLearn.png', 'Udemy Python.png']

var contenedor = document.getElementById('contenedorCertificados')

for (let indice in certificados){
    contenedor.innerHTML += `<a href= ${certificados[indice]+".png"} target="_blank"><img src= ${certificados[indice]+".png"} alt=${certificados[indice]} title=${certificados[indice]}></a>` 
}