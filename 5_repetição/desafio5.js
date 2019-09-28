/*5) Crie um programa que receba 10 números digitados no cmd. Ordene esse números em ordem crescente usando 
o Bubble Sort, utilizando loops e printe na tela.
Exemplo:
Recebendo: [5, 350, 15, 36, 5000, 30, 90, 1, 88, 450]
Ordenando: [1, 5, 15, 30, 36, 88, 90, 350, 450, 5000]*/

var r = require("readline-sync")

let numero = 0

var Bubble = function(vet){
var troca
do {
    troca = false
    for (let i=0; i<10; i++){
        numero=parseInt(r.question( "Digite dez numeros: "))
        console.log (`${numero}`)
}

}   
}



