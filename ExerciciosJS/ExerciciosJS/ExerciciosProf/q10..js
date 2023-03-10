/*Faça um algoritmo q leia um vetor de 20 posições e mostre-o. Em seguida, troque o primeiro elemento com o
último, o segundo com o penúltimo, o terceiro com o antepenúltimo, e assim sucessivamente. 
Mostre o novo vetor depois da troca.*/

const S = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

console.log(S.reverse()) 

/*ou*/

for (let i = 0; i < 10; i++){
    for (let j = 20; j > 9; j--){

        if(S[i] < S[j]){
            temp = S[i];
            S[i] = S[j];
            S[j] = temp;
        }
    }} console.log(S)