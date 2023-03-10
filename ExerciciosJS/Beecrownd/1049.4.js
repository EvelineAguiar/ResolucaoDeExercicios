/*Você deverá ler 3 palavras que definem o tipo de animal possível segundo o esquema. Em seguida 
conclua qual dos animais seguintes foi escolhido, através das três palavras fornecidas.
A entrada contém 3 palavras, uma em cada linha, necessárias para identificar o animal segundo a figura. Imprima o nome do animal correspondente à entrada fornecida.*/

let option1 = ['vertebrado','ave','carnivoro','aguia']
let option2 = ['vertebrado','ave','onivora','pomba']

let lista = [option1, option2]

let input_lista = ['vertebrado','ave','onivora'] //R-pomba.Se mudar p carnivoro, imprimirá águia

    for(let i = 0; i < lista.length; i++){
        
    let cont = 0
    for(let j = 0; j < 3; j++){

    if( lista[i][j] == input_lista[j] ){
        cont++
    }}
    if ( cont == 3 ){
    console.log(lista[i][3])
    }}