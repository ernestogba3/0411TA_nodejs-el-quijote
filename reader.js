const fs = require('fs');



//  NIVEL 1: EL DESPERTAR DEL BECARIO
function leer(ruta) {
    try {
        return fs.readFileSync(ruta, "utf-8");

    } catch (error) {
        console.log("Error de lectura", error);
        return "";

    }
}
function contarCaracteres(text) {
    const char = text.length;
    return char;
}


//NIVEL 2: LOS MOLINOS DE PALABRAS
function contarPalabras(texto) {
    const words = texto.split(/\s+/).filter(w => w.length > 0);
    return words.length;
}

module.exports = {
    leer, contarPalabras, contarCaracteres
};


