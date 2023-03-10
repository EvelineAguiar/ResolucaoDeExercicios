/*faça um algoritmo q leia um vetor inteiro de 10 posições e crie um segundo vetor, 
substituindo os valores nulos por 1. Mostre os 2 vetores.*/

const vetor = [0, 1, 2, 3, 4, 5, 0, 6, 7, 8, 9, 10];
let vetor2 = [];

for (var i = 0; i < vetor.length; i++){

        if (vetor[i] == 0){
        vetor2.push(vetor[i]+1);
        }else{
        vetor2.push(vetor[i]);
    }
}
console.log(vetor)
console.log(vetor2)