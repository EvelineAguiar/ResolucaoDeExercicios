//soma dos valores da matriz principal e segundária.

const matriz = [[1,2,3], 
                [4,5,6], 
                [10,20,30]];
soma = 0;
for (let i = 0; i < matriz.length; i++){
    for (let j = 0; j < matriz.length; j++){
       if ( i == j ){ //soma dos valores da matriz principal:
        soma += matriz[i][j];
       }
}} console.log(`A soma da matriz primcipal é: ${soma}`);

soma = 0;
for (let i = 0; i < matriz.length; i++){
    for (let j = 0; j < matriz[i].length; j++){
       if ( i + j == matriz.length -1){ //soma dos valores da matriz segundária:
        soma += matriz[i][j];
       }
}} console.log(`A soma da matriz segundária é: ${soma}`);