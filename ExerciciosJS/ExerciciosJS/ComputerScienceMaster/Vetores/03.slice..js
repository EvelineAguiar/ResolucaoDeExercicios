/*Leia um vetor de 16 posições e troque os 8 primeiros valores pelos 8 últimos e vice-e-versa. Escreva ao final o vetor obtido.*/

const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let vetor2 = [], vetor3 = [];

vetor2 = vetor.slice( 0, vetor.length/2 ); //De zero à metade do array.
console.log(vetor2);

vetor3 = vetor.slice( vetor.length/2 ); //Da metade do array à seu final.
console.log(vetor3);

console.log( vetor3.concat(vetor2) );