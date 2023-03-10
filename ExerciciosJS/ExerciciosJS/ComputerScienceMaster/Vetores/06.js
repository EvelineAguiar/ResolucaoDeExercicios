/*Leia um vetor de 10 posições e atribua valor 0 para todos os elementos que possuírem valores negativos.*/

const vetor = [-20, 1, 15, 5, 6, 3, 7, 8, 5, -30];

let cont = 0;

for (let i = 0; i < vetor.length; i++) {
    if ( vetor[i] < 0 ) {
         vetor[i] = 0
         cont++;
    }
} console.log( vetor );