/*Faça um programa q calcule e mostre o volume de uma esfera sendo fornecido o valor de seu raio. A fórmula p calcular o volume é: (4/3) * pi * R3. Atribua pi o valor = 3.14159.

Dica: Ao utilizar a fórmula, procure usar: (4/3.0) ou (4.0/3), por conta de algumas linguagens*/

let raio = 0;

let volume = (4/3.0) * 3.14159 * raio * raio;

console.log(`VOLUME = ${volume.toFixed(3)}`); //3 casas decimais.