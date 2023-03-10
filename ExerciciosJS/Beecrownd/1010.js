/*Ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, 
o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. 
Após, calcule e mostre o valor a ser pago.*/

 let prompt = require('prompt-sync')();
 let codigo1 = prompt('Digite o código da peça1: ')
 let quant1 = prompt('Digite a quantidade de peças: ')
 let valorUnd1 = prompt('Digite o valor da peça1: ')

 let codigo2 = prompt('Digite o código da peça2: ')
 let quant2 = prompt('Digite a quantidade de peças: ')
 let valorUnd2 = prompt('Digite o valor da peça2: ')

 let total1 = 0, total2 = 0, totalPago = 0;

 total1 = quant1 * valorUnd1;
 total2 = quant2 * valorUnd2;

 aPagar = total1 + total2;

console.log(`Total a pagar: R$ ${aPagar}`)
