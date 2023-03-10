/*Leia dois vetores de 10 posições e calcule um terceiro vetor contendo: 
nas posições pares os valores do primeiro e nas posições impares os valores do segundo.*/

const vetor1 = [1,2,3,4,5,6,7,8,9,10]; //Pegar os pares. 
const vetor2 = [11,12,13,14,15,16,17,18,19,20]; //Pegar os impares.
let vetor3 = []; 

for ( let i = 0; i < vetor1.length; i++ ) {

    if (i %2== 0) {
        vetor3.push( vetor1[i] )

    } else { vetor3.push( vetor2[i] ) }
        
 } console.log( vetor3 ); //Deve ser mostrado primeiro a POSIÇÃO nº par do V1, depois a POSIÇÃO do nº impar do V2 de forma intercalada.