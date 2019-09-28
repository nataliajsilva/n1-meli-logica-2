/*6 - Crie um programa que receba o array = [5, 37, 18, 59, 12, -5] e faça as seguintes operações:
    - Printe o maior;
    - Printe o menor.*/

    let array = [5,37,18,59,12,-5];
    let maior = 0;
    let menor = 0;
    
    for (let i=0; i<array.length; i++){
        if(array[i]>maior){
            maior = array[i];
        }
        if ( array[i]<menor){
            menor = array[i];
        }
    }

    console.log("Maior :" + maior + ". Menor:" + menor);
        