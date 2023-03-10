/* Leia um vetor de 20 posições e em seguida um valor X qualquer. 
Seu programa devera fazer uma busca do valor de X no vetor lido e informar a posição em que foi encontrado ou se não foi encontrado.*/

const vetor = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let x = 0;

for (let i = 0; i < vetor.length; i++) {

    if ( x == vetor[i] ) { 
        console.log(`O valor ${x} foi encontrado na posição ${i}`)
        break;
    }
    else if ( i == vetor.length - 1 ) {//P não ficar repetindo "não foi encontrado" varias vezes
        console.log(`O valor ${x} não foi encontrado`) 
    }
}