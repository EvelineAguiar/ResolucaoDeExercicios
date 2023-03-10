/*Faça um algoritmo q leia dois vetores: F[20] e G[20]. 
Calcule e mostre, a seguir, o produto dos valores de F por G.*/

const F = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const G = [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];

let produto = 0;

for (let i = 0; i < F.length; i++){
    for (let j = 0; j < G.length; j++){
        produto = produto + F[i] * G[j];
    }
}
console.log(produto)