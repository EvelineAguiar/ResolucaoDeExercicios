/*Faça um programa q leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas. informar o total a receber no final do mês, com duas casas decimais.*/

 let prompt = require('prompt-sync')();
 let vendedor = prompt('Digite o nome do vendedor: ')
 let salario = prompt('Digite o salário: ') 

 salario = parseFloat(salario) //Duas casas decimais.

 //Sabendo que este vendedor ganha 15% de comissão:
 let comissao = salario * 0.15
 comissao = Math.round(comissao) //Metodo de arredondamento.
 
 //Total a receber no final do mê:
 let total = salario + comissao
 
 console.log(`Vendedor: ${vendedor}. Comissão: R$ ${comissao.toFixed(2)}`);//2 casas decimais.
 console.log(`Total a receber: R$ ${total.toFixed(2)}`);