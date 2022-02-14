let senha = prompt('Digite uma senha');

        
/**/

function verificaSenha(senha){
    
    //verifica a quantidade de caracteres
    quantSenha = Array.from(senha).length;

    if(quantSenha < 6){
       alert(6 - quantSenha);
       alert(`Sua senha tem ${quantSenha} caracteres! O mínimo necessário é 6 caracteres, e sua senha precisa de mais ${6 - quantSenha} caracteres para ser segura!`);
       senha = prompt('Digite uma nova senha com 6 caracteres');
       verificaSenha(senha);
    }

    /* --------------------------------------*/
    let senhaArray = Array.from(senha);

    // verificando se a senha tem algum número
     let digito = false;

     for(let i = 0; i < senhaArray.length; i++){
      
         for(let j = 0; j <= 9; j++){
             if(senhaArray[i] == j){
                 digito = true;
             }
         }

    }

    if(digito == false){
        alert('É necessário que sua senha tenha no mínimo um digito');
        senha = prompt('Digite uma nova senha com 6 caracteres');
        verificaSenha(senha);
    }
    //vendo se há ao menos 1 letra em maiúscula
    let maiuscula = false;
   
    for(let i = 0; i < senhaArray.length; i++){
      
        if(senhaArray[i] === senhaArray[i].toUpperCase()){
            maiuscula = true;
        }

    }

    if(maiuscula == false){
        alert('É necessário que sua senha tenha no mínimo uma letra maiúscula');
        senha = prompt('Digite uma nova senha com 6 caracteres');
        verificaSenha(senha);
    }

    //vendo se há ao meos 1 letra em minuscula
    let minuscula = false;

    for(let i = 0; i < senhaArray.length; i++){
      
      if(senhaArray[i] === senhaArray[i].toLowerCase()){
          minuscula = true;
      }

    }

    if(minuscula == false){
      alert('É necessário que sua senha tenha no mínimo uma letra minúscula');
      senha = prompt('Digite uma nova senha com 6 caracteres');
      verificaSenha(senha);
    }

    //vendo se há 1 caractere especial
    let especial = false;
    for(let i = 0; i < senhaArray.length; i++){
        if(
            senhaArray[i] == '!' ||
            senhaArray[i] == '@' ||
            senhaArray[i] == '#' ||
            senhaArray[i] == '$' ||
            senhaArray[i] == '%' ||
            senhaArray[i] == '^' ||
            senhaArray[i] == '&' ||
            senhaArray[i] == '*' ||
            senhaArray[i] == '(' ||
            senhaArray[i] == ')' ||
            senhaArray[i] == '-' ||
            senhaArray[i] == '+' 
            ){
            especial = true;
        }
    }
    if(especial == false){
      alert('É necessário que sua senha tenha no mínimo um desses caracteres especiais: !@#$%^&*()-+');
      senha = prompt('Digite uma nova senha com 6 caracteres');
      verificaSenha(senha);
    }

    alert(`Sua senha forte é ${senha}`);

} // fim da função verificaSenha()

verificaSenha(senha);

