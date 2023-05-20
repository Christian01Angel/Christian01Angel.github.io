'use strict';

var certificados = ['Html SoloLearn', 'JavaScript Sololearn', 'Python SoloLearn', 'Udemy Python', 'Argentina Programa Inicial',
 'Desarrollo Personal', 'Foco', 'Git y Github', 'Habitos', 'HTML5 y CSS3 1-4', 'HTML5 y CSS3 2-4', 'HTML5 y CSS3 3-4',
 'HTML5 y CSS3 4-4', 'LinkedIn', 'Logica de Programacion 1', 'Logica de Programacion 2', 'Logica de Programacion 3', 
 'Principiante en Programación', 'Tecnicas para el autodesarrollo']

var contenedor = document.getElementById('contenedorCertificados')

for (let indice in certificados){
    let imagen = 'img/certificados/' + certificados[indice] + '.png'
    console.log(imagen)
    contenedor.innerHTML += `<a href="${imagen}" target="_blank"><img src="${imagen}" alt=${certificados[indice]} title=${certificados[indice]}></a>` 
}