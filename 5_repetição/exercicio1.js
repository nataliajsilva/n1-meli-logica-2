/*Crie um programa para printar todos os números pares de 1 a 100.
- Números pares são todos os números que dividos por 2 tem resto 0
- Qual operador que retorna o resto da divisão? Vamos usar ele!*/

var r = require("readline-sync")

let numeros = 0 
for (let i = 0; i<=100; i++){
    if (numeros%2==0)
    console.log(numeros) 
    numeros++ 
}
console.log("Saiu do for")