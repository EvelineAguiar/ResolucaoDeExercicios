/*Escreva um programa q leia três valores com ponto flutuante de dupla precisão: A, B e C. 
Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.*/

let num1 = 0, num2 = 0, num3 = 0;

let A = parseFloat(num1), B = parseFloat(num2), C = parseFloat(num3);

areaTriangulo = A * C / 2;

areaCirculos = 3.14159 * Math.pow(C, 2); //"POW": eleva a potencia. Ex: Math.pow(base, expoente)

areaTrapezio = (A + B) * C / 2;

areaQuadrado = B * B;

areaRetangulo = A * B;

console.log(`TRIANGULO: ${areaTriangulo}`); 
console.log(`CIRCULO: ${areaCirculos.toFixed(3)}`); //Usa 3 casas decimais.
console.log(`TRAPEZIO: ${areaTrapezio}`);
console.log(`QUADRADO: ${areaQuadrado}`);
console.log(`RETANGULO: ${areaRetangulo}`);