//Leia uma matriz 3x3 e escreva a localização (linha e a coluna) do maior valor.

const matriz = [[10,20,30], [40,50,60], [70,80,90]];

maior = 0, menor = 0, arrayMaior = 0, arrayMenor = 0;

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {

        if (matriz[i][j] > maior) {
            maior = matriz[i][j]
            arrayMaior = [i]
            
        }else if ( arrayMenor = [i] ) {
}}}
console.log(matriz[arrayMaior]), console.log(matriz[arrayMenor]);
console.log(`Maior: ${maior}`);
// console.log(`Menor: ${menor}`); 