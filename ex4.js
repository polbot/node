let prompt = require('prompt-sync')();
let valor = [];

valor.push(prompt('Digite um valor para Array posição 1:'));
valor.push(prompt('Digite um valor para Array posição 2:'));
valor.push(prompt('Digite um valor para Array posição 3:'));


if (!(valor[0] != valor[1] && valor[0] != valor[2] && valor[1] != valor[2])){
 console.log("Existem valor repetidos") 
}