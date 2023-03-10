/*Faça um algoritmo q leia um vetor S[20] e uma variável A. 
A seguir, mostre o produto da variável A pelo vetor.*/

const S = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let produto = [];

let A = 10;

for (let i = 0; i < S.length; i++){
        produto.push(A * S[i])
} 
console.log(produto)