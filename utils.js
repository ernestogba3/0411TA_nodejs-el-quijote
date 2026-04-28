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

function limpiarMinuscula(texto){
  const minuscula = texto.toLowerCase();
  console.log("----------------------------------------");
  return minuscula;
}

function limpiarPuntuacion(texto){
  const limpieza = texto.replace(/[-.,;:!?¿¡()"']/g, '');
  return limpieza;
}

function contadorPalabras(texto){
  const textoLimpio = texto
  .toLowerCase()
  .replace(/[.,;:!?¿¡()"']/g, '');

const palabras = textoLimpio.split(/\s+/);

// 🔹 Contadores
let contadorQuijote = 0;
let contadorSancho = 0;

let totalLetras = 0;
let totalPalabras = 0;

for (const palabra of palabras) {
  if (!palabra) continue;

  // contar palabras específicas
  if (palabra === 'quijote') contadorQuijote++;
  if (palabra === 'sancho') contadorSancho++;
}
console.log('quijote:', contadorQuijote,"veces aparece");
console.log('sancho:', contadorSancho,"veces aparece");
}

module.exports ={
    contarCaracteresSinEspacios,
    topPalabras,limpiarMinuscula,
    limpiarPuntuacion,contadorPalabras
}