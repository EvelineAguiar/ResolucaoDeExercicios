/*Você deverá ler 3 palavras que definem o tipo de animal possível segundo o esquema. Em seguida 
conclua qual dos animais seguintes foi escolhido, através das três palavras fornecidas.
A entrada contém 3 palavras, uma em cada linha, necessárias para identificar o animal segundo a figura. Imprima o nome do animal correspondente à entrada fornecida.*/

let prompt = require('prompt-sync')();

let a = prompt('Digite se Vertebrado ou Invertebrado: ')
let b = prompt('Diga a especie do animal entre: (ave ou inseto ou mamífero ou anelídeo): ')
let c = prompt('Diga a classificação entre: (carnivoro ou herbívoro ou hematofago ou onivoro): ')

let animais = [
    {
        vertOuInvert: 'vertebrado',
        especie: 'ave',
        classificacao: 'carnivoro',
        animal: 'Águia',
    },
    {
        vertOuInvert: 'vertebrado',
        especie: 'ave',
        classificacao: 'onívoro',
        animal: 'Pomba',
    },
    {
        vertOuInvert: 'invertebrado',
        especie: 'inseto',
        classificacao: 'hematofago',
        animal: 'Pulga',
    },
    {
        vertOuInvert: 'invertebrado',
        especie: 'anelideo',
        classificacao: 'hematofago',
        animal: 'Sanguessuga',
    }
]
for (let i = 0; i < animais.length; i++) {
    
    if (a == animais[i].vertOuInvert && b == animais[i].especie && c == animais[i].classificacao){
        console.log(`O animal é : ${animais[i].animal}`);
        break;
    }
}