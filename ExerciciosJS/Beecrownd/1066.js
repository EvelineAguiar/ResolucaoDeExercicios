//Leia 5 valores Inteiros. Mostre quantos valores digitados foram pares, ímpares, positivos e negativos.

const valores = [1, 10, -5, 3, -2];
let par=[], impar=[], positivo=[], negativo=[];

for (i = 0; i < 5; i++){
    
    if(valores[i] %2== 0){ //Números pares.
        par.push(valores[i])
    }
    else{ impar.push(valores[i]) };

    if(valores[i] > 0){ //Números positivos.
        positivo.push(valores[i])
    }
    else{ negativo.push(valores[i]) };
}
console.log(`Nº pares: ${par} e impares: ${impar}`)
console.log(`Nº positivos: ${positivo} e negativos: ${negativo}`)