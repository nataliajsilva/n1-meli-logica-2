/*4-Utilizando uma estrutura de repetição diferente da que utilizou ontem, crie um  programa contador de passos que acumule os valores de passos informados pelo usuário até que a meta seja atingida.
A meta a ser atingida é de 500 passos.*/

var r = require("readline-sync")

let passos = 0 ;
const meta = 500;
for(;passos<meta;){
    passos+= parseInt( r.question("Digite quantos passos já deu hoje:"));
}
console.log("Parabéns, você atingiu 500 passos!");



    