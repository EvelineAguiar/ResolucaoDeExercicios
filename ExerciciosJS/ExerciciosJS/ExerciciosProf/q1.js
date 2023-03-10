/*Faça um conjunto de 25 valores e os coloque em 2 vetores: pares ou ímpares. 
O tamanho do vetor é de 5 posições. Se algum vetor estiver cheio, escrevê-lo. 
Terminada a leitura escrever o conteúdo dos dois vetores. Cada vetor pode ser preenchido tantas vezes quantas for necessário.*/

const valores = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
let pares = [];
let impares = [];
let vetor1 = [];
let vetor2 = [];

for (let i = 0; i < valores.length; i++){

    if (valores[i] %2 == 0){
        pares.push(valores[i]);
    }else{
        impares.push(valores[i]);
    }
} vetor1 = pares.slice(-5); vetor2 = impares.slice(-5);

console.log(pares);
console.log(impares);
console.log(vetor1);
console.log(vetor2);