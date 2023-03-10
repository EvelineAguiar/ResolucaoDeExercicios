//Leia um vetor de 10 posições. Contar e escrever quantos valores pares ele possui.

const vetor = [20, -1, 15, 5, 6, 3, 7, 8, -5, 30];

let cont = 0;

for ( let i = 0; i < vetor.length; i++ ) {
    if ( vetor[i]%2== 0 ) {
         cont++;
    }
} console.log(`O vetor possui: ${cont} valores pares`);