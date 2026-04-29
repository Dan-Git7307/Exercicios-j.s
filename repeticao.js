//while
//while (condition) {
    // codigo se repete enquanto a condicao for true
//}

// Contagem de 1 a 5

/*let contador = 1;

while (contador <= 5) {
    console.log("contagem:", contador);

    contador++
}

//Contagem regressiva de 10 ate 1

let tempo = 10;
console.log("Iniciando contagem regressiva...");

while (tempo > 0) {
    console.log(`${tempo}...`);

    tempo--
}
console.log("Feliz ano novo!!")

//Validacao de Senha 
const senhaCorreta = "123456";
let tentativa = "";
while (tentativa !== senhaCorreta) {
    tentativa = prompt("Digite a senha:");
    if (tentativa === senhaCorreta) {
        console.log("Senha Correta");
    } else {
        console.log("Senha incorreta");
    }
}
*/
//Somar numeros ate ultrapassar 100

/*let soma = 0;
let numero = 1;

console.log("Somando numeros ate passar de 100...");

while (soma < 100) {
    soma += numero

    console.log(`${numero} Soma parcial: ${soma}`);

    numero++
}

console.log(`\n Precisou de ${numero - 1} numeros para ultrapassar 100`);
console.log("Soma final:" + soma);
*/

/*const numero = Number(prompt ("Qual numero:"));
if (Number.isNaN(numero)) {
    console.log("Digite um numero valido!")
} else {
    let multiplicador = 1;
    console.log(`Tabuada do ${numero}\n`);

    while (multiplicador <= 10) {
        const resultado = numero * multiplicador
        console.log(`${numero} x ${multiplicador} = ${resultado}`);
        multiplicador++;
    }
}*/

/*let x = 10;
while (x < 5) {
    console.log("Isso nao vai aparecer")
}

let y = 10;
do {
    console.log("Isso vai aparecer uma vez")
} while (y < 5);
 */

//Menu interativo
/*let opcao;

do {
    console.log("\n========Menu========");
    console.log("1 - ver saldo");
    console.log("2 - fazer deposito");
    console.log("3 - fazer saque");
    console.log("0 - Sair")
    console.log("====================\n");

    opcao = prompt("Escolha uma opcao:");

    if (opcao === "1") {
        console.log("se saldo e de 1000,00");
    } else if(opcao === "2") {
        console.log("Deposito realizado!");
    }else if (opcao === "3") {
         console.log("Saque realizado!");
    }else if(opcao === "0") {
       console.log("Ate logo!");
    }else {
        console.log("Opcao invalida");
    }
} while (opcao !== "0");
*/

//jogo: adivinha o numero
/*const numeroSecreto = Math.floor(Math.random() * 10) + 1;
// Math.random 0.0.0.9999999...
// * 10 0.0.9.99999...
// math.floor 0 - 9
// + 1 0 - = 1 - 10
let palpite;
let tentativas = 0;
console.log("Advinhe o numero entre 1 e 10");

do {
    palpite = Number(prompt("Seu palpite:"));
    tentativas++

    if (Number.isNaN(palpite)) {
        console.log("digite um numero valido!")
    } else if(palpite < numeroSecreto) {
        console.log("Muito baixo! Tente novamente")
    }else if(palpite > numeroSecreto) {
        console.log("Muito alto! Tente novamente")
    }else {
        console.log(`Acertou!!!! o numero era ${numeroSecreto}`);
        console.log(`Precisou de ${tentativas} tentativas!`)
    }
    } while (palpite !== numeroSecreto);
     */

    //
    /*console.log("Contando de 1 a 10:\n");
    for (let i = 1; i <= 10; i++) {
        console.log(`Numero: ${i}`)
        
    }
*/

//Tabuada
/*const numero = Number(prompt("tabuada de qual numero?"));
if (Number.isNaN(numero)) {
    console.log("Numero invalido!")
} else {
    console.log(`\n Tabuada do ${numero}\n`);

    for (let i = 1;i <= 10; i++) {
        const resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}*/

//Numeros pares (0 a 20)
/*console.log("numeros pares de 0 a 20\n");
for (let i = 0; i2 <= 20; i2+= 2){
    console.log(i2)
}

for (let i = 0; 1 <= 20; i++){
    if (i % 2 === 0){
        console.log(i)
    }
}
*/

    /*console.log("Iniciando contagem regrassiva.....");
    for (let i = 10; i >= i--){
        console.log(`${i}...`)
    }*/

        /*const altura = 5;
        for (let linha = 1; linha <= altura; linha++) {
            let asteriscos = "";

            for (let i = 1; i <= linha; i++) {
               asteriscos += "* "
            }
            console.log(asteriscos);
        }*/

            //Array (Lista)
           /* const frutas = ["Maca", "Banana", "Laranja", "uva"];

            console.log(frutas[0]);
            console.log(frutas[1]);
            console.log(frutas[2]);
            console.log(frutas[3]);

            console.log(frutas.length);

            // for of
            for (const fruta of frutas) {
             console.log(`- ${fruta}`);
            }*/

             //Soma de todos os numeros do array
             /*const numeros = [10, 25, 8, 42, 15, 7];

            let soma = 0;
            for (const num of numeros){
                soma += num;
            }
            console.log(soma);
            */

            //Objetos
            /*const pessoa = {
                nome: "Lucas",
                idade: 35,
                cidade: "Santo Andre",
                profissao: "professor",
            }
 
               console.log(pessoa.nome)
               console.log(pessoa["idade"])

               // for in
               for (const chave in objeto) {
               
               }*/

               /*const aluno = {
                nome: "Maria Silva",
                matricula: "20223401",
                curso: "Desenvolvedor Web",
                nota: 9.5
               };

               console.log("Dados do Aluno:\n");
               for (const chave in aluno) {
                const valor = aluno[chave]
                console.log(`${chave}: ${valor}`)
               }*/

                //Estoque de produtos
                /*const estoque = {
                    "Notbook":15,
                    "Mouse": 50,
                    "Teclado": 30,
                    "Monitor": 8,
                    "Webcam": 22
                }
                
                console.log("Estoque:\n");
                for (const produto in estoque) {
                    const quantidade = estoque[produto];

                    if (quantidade < 10) {
                        console.log(`${produto}: ${quantidade} unidades (estoque baixo!)`)
                    } else {
                        console.log(`${produto}: ${quantidade} unidades`)
                    }

                }*/

                    //carrinho de compra

                    //Array
                    /*const carrinho = [
                        {produto: "Camiseta", preco: 49.90, quantidade: 2},
                        {produto: "Calca Jeans", preco: 120.90, quantidade: 1},
                        {produto: "Tenis", preco: 500.90, quantidade: 1},
                    ];

                    let total = 0;

                    console.log("Carrinhob de Compras: \n");

                    for (const item of carrinho) {
                        const subtotal = item.preco * item.quantidade;

                        total += subtotal

                        console.log(`${item.produto} (${item.produto} (${item.quantidade}x) R$ ${subtotal.toFixed(2)}`)
                        }

                        console.log("\n" + "=".repeat(40));
                        console.log(`Total: R$ ${total.toFixed(2)}`);
                        */

                        //break
                        /*const numeros = [5, 12, 8, 3, 19, 7, 25];

                        const procurado = 19;

                        console.log("Procurando o numero", procurado);

                        for (const num of numeros) {
                            console.log("Verificando:", num);

                            if (num === procurado) {
                                console.log("Encontrado!!")
                                break;
                            }
                        }
                        console.log("loop terminou!");
                         */

                         //senha com limite de 3 tentativas

                         /*const senhaCorreta = "abc123";

                         const maxTentativas = 3;

                         for (let tentativa = 1; tentativa <= maxTentativas; trenativa++) {
                            const senha = prompt(`Tentativa ${tentativa}/${maxTentativas} - Digite sua senha:`);

                            if (senha === senhaCorreta) {
                                console.log("Acesso liberado!");
                                break;
                            } else {
                                console.log("Senha incorreta!");

                                if (tentativa === maxTentativas) {
                                    console.log("Conta bloqueada!");
                                }
                            }
                         }
                        */

                         //continue

                         /*for (let i = 1; i <= 10; i++) {
                            if (i % 2 === 0) {
                               continue;
                            }
                            console.log(i);

                         }*/

                            /*const alunos = [
                                {nome: "Ana", nota: 8.5},
                                {nome: "Bruno", nota: 5.0},
                                {nome: "Carlos", nota: 9.0},
                                {nome: "Diana", nota: 4.5},
                                {nome: "Eduardo", nota: 7.5},
                            ];
                            console.log("Alunos Aprovados:\n");
                            for (const aluno of alunos) {
                                if (aluno.nota< 7) {
                                   continue;
                                }
                                console.log(`${aluno.nome} - Nota: ${aluno.nota}`);
                            }*/

                               /* const frase = prompt("Digite uma frase:");

                                const vogais = "aeiouAEIOU";

                                let contador = 0;

                                let vogaisEncontradas = [];

                                for (const letra of frase) {
                                    if (vogais.includes(letra)) {
                                       contador++
                                       vogaisEncontradas.push(letra)
                                    }
                                }
                                console.log(`\n Frase: "${frase}"`);
                                console.log(`vogais encontradas: ${contador}`);
                                console.log(`Vogais encontradas: ${vogaisEncontradas}`)
                                */