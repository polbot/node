let prompt = require('prompt-sync')();
let threshold = prompt('Digite um threshold : ');
let valor = prompt('Digite um valor : ');

if (valor > threshold) {
    console.log("Abrir IM ")
} else {
    console.log("OK")    
}