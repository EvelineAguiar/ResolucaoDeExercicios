/*Faça um algoritmo q leia e mostre um vetor de 20 números. 
conte quantos valores pares existem no vetor.*/

const A = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const pares = [];

for (let i = 0; i < A.length; i++){
    if (A[i] % 2 === 0) {
        pares.push(A[i]);
    }
}
console.log(`Existem ${pares.length} numeros pares`)
console.log(pares)