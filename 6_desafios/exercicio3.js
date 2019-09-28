/*3-Utilizando uma estrutura de repetição diferente da que utilizou ontem, crie um programa que pergunta ao 
usuário seu nome. Depois que o usuário digitar o nome, o programa deverá responder "Olá [nome]".
Enquanto usuário digitar qualquer palavra, print o que ele está digitando mas avise que para sair ele pode 
dizer "Tchau".
O programa vai dizer "Tchau [nome]" e finalizar o programa.*/

var r = require("readline-sync")

let nome = r.question("Digite seu nome:")
console.log(`Olá ${nome}`)
let text = " " 
let i = "tchau"
do {
    text = r.question("Digite qualquer palavra ")
    console.log(`${text} Digite tchau para sair`)
} while (text!=i)
console.log(`Tchau ${nome}`)
