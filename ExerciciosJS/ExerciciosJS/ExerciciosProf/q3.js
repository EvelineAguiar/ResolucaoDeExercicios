/*Faça um algoritmo q leia 2 vetores de 5 posições. Faça a multiplicação dos elementos de mesmo índice, colocando o resultado em um terceiro vetor. Mostre o vetor resultante.*/

const A = [1, 2, 3, 4, 5]; B = [6, 7, 8, 9, 10];
let C = [];

for (i = 0; i < 5; i++){

    C[i] = A[i] * B[i]
} 
console.log(C)
