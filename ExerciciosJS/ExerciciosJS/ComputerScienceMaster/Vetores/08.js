/*Leia um vetor de 10 posições e acumule os valores do primeiro elemento no segundo, deste no terceiro e assim por diante. Ao final, escreva o vetor obtido.*/

const vetor = [20, -2, 15, 5, 6, 7, 8, 9, -3, 30];

for ( let i = 1; i < vetor.length; i++ ){
        vetor[i] += vetor[i-1] 
    
} console.log( vetor )