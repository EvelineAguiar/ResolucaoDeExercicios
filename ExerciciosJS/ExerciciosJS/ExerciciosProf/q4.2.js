/*Faça um algoritmo que leia um vetor K[10]. Troque todos os elementos de ordem ímpar do vetor com os elementos de ordem par imediatamente posteriores.*/

let K = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
pares = []; impares = [];

for (let i = 0; i < K.length; i++){

    if ( K[i]%2 == 0 ){
        pares.push(K[i]);
    }else{
        impares.push(K[i]);
    }
} console.log(pares.concat(impares))