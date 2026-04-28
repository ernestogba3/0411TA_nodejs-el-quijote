function contarCaracteresSinEspacios(text){
    return text.replace(/\s+/g,"").length;
}

function topPalabras(texto){
const palabras = texto.toLowerCase().replace(/[.,;:!?¿¡()"']/g, '').split(/\s+/); // quitar puntuación

  // 2. Contar frecuencia
const conteo = {};

for (const palabra of palabras) {
  if (!palabra) continue; // evitar vacíos
  conteo[palabra] = (conteo[palabra] || 0) + 1;
}

// 3. Convertir a array y ordenar
const top10 = Object.entries(conteo).sort((a, b) => b[1] - a[1]).slice(0, 10);

// 4. Mostrar resultados
console.log('Top 10 palabras más repetidas:');
top10.forEach(([palabra, cantidad], index) => {
  console.log(`${index + 1}. ${palabra}: ${cantidad}`);
})
}

module.exports ={
    contarCaracteresSinEspacios,topPalabras
}