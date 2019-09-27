/*Crie um  programa contador de passos, que acumule os valores de passos informados pelo usuário até que a 
meta seja atingida.
A meta a ser atingida é de 500 passos.
Aqui você pode usar while ou do/while para resolver, mas tente resolver com o que você não utilizou 
no exercicio 3*/

var r = require("readline-sync")

let passos = 0 
const meta = 500
do {
    passos+= parseInt( r.question("Digite quantos passos já deu hoje:"))   
}
while (passos<meta)
console.log("Parabéns, você atingiu 500 passos!");
