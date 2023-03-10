/*Você deverá ler 3 palavras que definem o tipo de animal possível segundo o esquema. Em seguida 
conclua qual dos animais seguintes foi escolhido, através das três palavras fornecidas.
A entrada contém 3 palavras, uma em cada linha, necessárias para identificar o animal segundo a figura. Imprima o nome do animal correspondente à entrada fornecida.*/

let prompt = require('prompt-sync')();

let vertOuInvert = prompt('Digite se Vertebrado ou Invertebrado: ')
let especie = prompt('Diga a especie do animal entre: (ave, inseto, mamífero, anelídeo): ')
let classificacao = prompt('Diga a classificação entre: (carnivoro, herbívoro ou onivoro): ')

if (vertOuInvert == "vertebrado" && especie == "ave" && classificacao == "carnivoro"){
        console.log('O animal é: ÁGUIA');
    } 
if (vertOuInvert == "invertebrado" && especie == "inseto" && classificacao == "herbivoro"){
        console.log('O animal é: LAGARTA');
    }
if (vertOuInvert == "vertebrado" && especie == "mamifero" && classificacao == "onivoro"){
        console.log('O animal é: HOMEM');
    }
//...Assim por diante!!!

