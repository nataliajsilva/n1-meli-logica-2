/*Crie um programa que pergunta ao usuário seu nome. Depois que o usuário digitar o nome, o programa deverá 
responder "Olá [nome]".
Enquanto usuário digitar qualquer palavra, print o que ele está digitando mas avise que para sair ele pode
 dizer "Tchau".
O programa vai dizer "Tchau [nome]" e finalizar o programa.
- Aqui você pode usar while ou do/while para resolver*/

var r = require("readline-sync")

let nome = r.question("Digite seu nome:")
console.log(`Olá ${nome}`)
let i="tchau"
let text = " " 
while (text!=i){
    text = r.question("Digite qualquer palavra ")
    console.log(`${text} Digite tchau para sair`)
}
console.log(`Tchau ${nome}`)
