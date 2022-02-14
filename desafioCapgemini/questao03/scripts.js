let word = prompt('Digite uma palavra');

let wordArray = Array.from(word);
let contFinal = 0;

if(wordArray.length == 2){
   contFinal = 1;
   alert(contFinal);
   alert(`Quantidade de substrings: ${contFinal}`);
}else if(wordArray.length = 3) {

   if(
      (wordArray[0] == 'a' ||
       wordArray[0] == 'e' ||
       wordArray[0] == 'i' ||
       wordArray[0] == 'o' ||
       wordArray[0] == 'u') 
       &&
      (wordArray[1] != 'a' ||
       wordArray[1] != 'e' ||
       wordArray[1] != 'i' ||
       wordArray[1] != 'o' ||
       wordArray[1] != 'u')
       && 
       wordArray[0] == wordArray[2]
    ){
        contFinal = 2;
        alert(contFinal);
        alert(`Quantidade de substrings: ${contFinal}`);
    }
   
}else if(wordArray.length > 3){

    let substring;

    for(let i = 0; i < wordArray.length; i++){
        // incompleto :/
        
        substring = wordArray[1].concat(wordArray[2]);
        
        
    }


}else{
        contFinal = 0;
        alert(contFinal);
        alert(`Quantidade de substrings: ${contFinal}`);
}

