/*Leia 3 valores variáveis A, B e C, q são três notas de um aluno.
Calcule a média do aluno. A nota A tem peso 2, a nota B tem peso 3 e a nota C tem peso 5.
Considere que cada nota pode ir de 0 até 10.0, com uma casa decimal.*/

let prompt = require('prompt-sync')();
let notaA = prompt('Digite uma nota: ')
let notaB = prompt('Digite outra nota: ')
let notaC = prompt('Digite outra nota: ')

const media = (notaA*2 + notaB*3 + notaC*5) / 10; //Divide pela soma de todos os pesos.

console.log(`MEDIA = ${media}`)