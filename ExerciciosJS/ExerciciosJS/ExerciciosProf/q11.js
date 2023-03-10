/*Faça um algoritmo q leia 10 valores p um vetor de 10 posições. 
Mostre depois somente os positivos.*/

const V = [15, 7, -20, 4, 30, 6, -16, 8, 25, 10];
let V2 = [];

for (let i = 0; i < V.length; i++){
        if (V[i] > 0){
            V2.push(V[i]);
        }    
} console.log(V2);