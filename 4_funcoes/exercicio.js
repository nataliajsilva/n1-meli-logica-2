//resposta aqui

/*O usuário deverá digitar:
    - qual operação quer fazer (somar, subtrair, multiplicar e dividir)
    - qual é o valor 1
    - qual é o valor 2
    
Crie um funções para calcular cada uma das operações.*/
var r = require("readline-sync")
function soma (valor1,valor2){
    var resultado = valor1+valor2
    return resultado
}
function subtrair (valor1,valor2){
    var resultado = valor1-valor2
    return resultado
}
function multiplicar (valor1,valor2){
    var resultado = valor1*valor2
    return resultado
}
function dividir (valor1,valor2){
    var resultado = valor1/valor2
    return resultado
}
   
/*De acordo com a operação escolhida, utilize o switch para escolher a operação e printar o resultado.*/
var operacaoEscolhida = r.question("Escolha uma das operações para calcular: soma, subtrair, multiplicar e dividir")
var valor1 = parseInt(r.question("Digite o valor 1"))
var valor2 = parseInt(r.question("Digite o valor 2"))

switch(operacaoEscolhida){
    case "soma": 
    let resultadosoma = soma(valor1,valor2)
    console.log(`O resultado da soma é ${resultadosoma}`)
    break;

    case "subtrair":
    let resultadoSubtrair = subtrair(valor1,valor2)
    console.log(`O resultado da subtração é ${resultadoSubtrair}`)
    break;

    case "multiplicar":
    let resultadoMultiplicar = multiplicar(valor1,valor2)
    console.log(`O resultado da multiplicação é ${resultadoMultiplicar}`)
    break;

    case "dividir":
    let resultadoDividir = dividir(valor1,valor2)
    console.log(`O resultado da divisão é ${resultadoDividir}`)
    break;

/*Caso o usuário não escolha nenhuma, deve mostrar "Operação inválida".*/
    default:
    console.log("Operação inválida")
}
   

