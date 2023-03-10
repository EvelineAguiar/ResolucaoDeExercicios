/*Faça um algoritmo q leia 2 vetores de 10 posições e faça a multiplicação dos elementos de mesmo índice,
colocando o resultado em um terceiro vetor. Mostre o vetor resultante.*/

const A = [1,2,3,4,5,6,7,8,9,10];
const B = [11,12,13,14,15,16,17,18,19,20];
const C = [];

for (let i = 0; i < A.length; i++){
    for (let j = 0; j < B.length; j++){
        C.push(A[i] * B[j]);
    }
}
console.log(C)