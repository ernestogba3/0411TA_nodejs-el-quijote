const { leer, contarPalabras, contarCaracteres } = require('./reader');
const { contarCaracteresSinEspacios, topPalabras } = require('./utils');

//  NIVEL 1: EL DESPERTAR DEL BECARIO
const texto = leer('./el_quijote.txt');
console.log(texto);

const caracteres = contarCaracteres(texto);
console.log("Total caracteres:",caracteres);

const caracteresEspacios = contarCaracteresSinEspacios(texto);
console.log("Total caracteres sin espacios:",caracteresEspacios);

//NIVEL 2 LOS MOLINOS DE PALABRAS
//3.contar palabras
const palabras = contarPalabras(texto);
console.log("Total palabras:",palabras);
//4.Mostrar las 10 palabras mas repetidas
const top = topPalabras(texto);

