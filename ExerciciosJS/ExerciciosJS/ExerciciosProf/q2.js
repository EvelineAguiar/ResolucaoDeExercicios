/*Faça um algoritmo q leia um vetor N[10]. Encontre o menor elemento do vetor N e a sua posição dentro do vetor, mostrando: “O menor elemento de N é”, “e sua posição dentro do vetor é:” */

const N = [15, 7, 20, 4, 30, 6, 16, 8, 25, 10];
let menor = N[0]; pos = 0;

for (let i = 0; i < N.length; i++){
  if (N[i] < menor){
    menor = N[i];
    pos = i;
  }
} console.log(`O menor elemento de N é: ${menor}, e sua posição dentro do vetor é:${pos}`)