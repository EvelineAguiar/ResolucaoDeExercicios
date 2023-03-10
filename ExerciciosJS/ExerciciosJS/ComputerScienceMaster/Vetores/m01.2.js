//Leia uma matriz 3x3 e escreva a localização (linha e a coluna) do maior valor.

const matriz = [[10, 20, 30], [40, 50, 60], [70, 80, 90]];

minimax = 0, maior = 0, arrayMaior = 0, arrayMenor = 0;

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
         if (matriz[i][j] > maior) {
                maior = matriz[i][j];
                arrayMaior = [i];
                posiçaoMaior = matriz[i];

                valor = matriz[i];
                valorMenor = matriz[i]
                Menor = valorMenor[i]
                menor = valor[i];
            }
}}
for (let k = 0; k < matriz.length; k++) {
    for (let l = 0; l < matriz[k].length; l++) {
         if (matriz[k][l] < menor) {
                menor = matriz[k][l];
                arrayMenor = [k];
                posiçaoMenor = matriz[k];
                
                valorMaior = matriz[k];
                Maior = valorMaior[k];
            }
}}
for (let M = 0; M < posiçaoMaior.length; M++) {
     if(posiçaoMaior[M] < Menor){
        Menor = posiçaoMaior[M];
   
}}
for (let D = 0; D < posiçaoMenor.length; D++) {
     if(posiçaoMenor[D] > Maior){
        Maior = posiçaoMenor[D];
   
}}
console.log(matriz[arrayMaior]),
console.log(matriz[arrayMenor]);
console.log(`Valor maior: ${maior}, Valor menor: ${menor}`); 
console.log("maxmini:", Maior, "minimax:", Menor);