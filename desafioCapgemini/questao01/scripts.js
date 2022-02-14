let n = Number(prompt("Digite um número"));
let asteriscos = "";
let espacos = new Array(n + 1);

function escada(n){


    for(let i = 0; i < n; i++){

        if(i != (n-1)){
            asteriscos = asteriscos + '*';
            espacos.pop();
            console.log(espacos.join(' ') + asteriscos);

        }else{
            asteriscos = asteriscos + '*';
            console.log(asteriscos);
        }

       
    }
    console.log('\n');
}

escada(n);