/*Escrever um algoritmo q lê 2 vetores X(10) e Y(10) . Crie, a seguir, um vetor Z que seja:
a) a diferença entre X e Y; b) a soma entre X e Y; c) o produto entre X e Y; 
Escreva o vetor Z a cada cálculo.*/

let X = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let Y = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Za=[]; Zb=[]; Zc=[];

for (let i=0; i<10; i++){

    Za[i] = X[i] - Y[i]
        
    Zb[i] = X[i] + Y[i]
       
    Zc[i] = X[i] * Y[i]
}
console.log(Za)
console.log(Zb)
console.log(Zc)