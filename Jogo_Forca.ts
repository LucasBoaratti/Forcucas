import * as readline from "readline"; //O módulo readline lê inputs do usuário no terminal

const rl = readline.createInterface({ //Criando uma interface para ler e escrever no terminal
     input: process.stdin, //Entrada
     output: process.stdout, //Saída 
});

function input(pergunta: string): Promise<string> { //Criando uma função que exibe uma pergunta no terminal e aguarda a resposta do usuário
     return new Promise((resolve => { 
          rl.question(pergunta, (resposta) => {
               resolve(resposta);
          })
     }))
}

async function forca(listaPalavras: string[], tentativas: number): Promise<void> { //Função assíncrona que inicia o jogo e recebe a lista de criaturas e as tentativas como parâmetro
     console.log("Seja bem vindo(a) ao forcatti!!! Aqui, o seu objetivo é acertar a palavra correta em 5 tentativas 😁");

     console.log("Dica: Criatura/Mob do Minecraft.");

     const palavraSorteada = listaPalavras[Math.floor(Math.random() * listaPalavras.length)].toLowerCase(); //Aqui, é sorteado uma criatura da lista e coloca todas as letras em minúsculas
     let letrasReveladas: string[] = Array(palavraSorteada.length).fill("_"); //Aqui, é criado um Array que preenche as palavras ocultas com um "underline" 

     for (let i = 0; i < tentativas; i++) { //Loop que executa o jogo até o máximo de tentativas (10)
          console.log("\nPalavra escrita: " + letrasReveladas.join(" ")); //Exibindo a palavra parcialmente escrita, pulando um espaço entre as letras

          const letra = (await input(`Tentativa ${i + 1} de ${tentativas}: Digite uma letra: `)).toLowerCase(); //Aqui, o usuário irá inserir a palavra e ela ficará minúscula, graças ao toLowerCase :)

          if(letra.length !== 1) { //Verificando se o usuario digitou mais de uma letra
               console.log("Digite apenas uma letra!");

               i--; //Retirando a tentativa, caso o input seja inválido

               continue;
          }

          let acerto = false;

          for (let j = 0; j < palavraSorteada.length; j++) { //Loop que percorre as letras da palavra sorteada 
               if (palavraSorteada[j] === letra) { //Verificando se a palavra sorteada possui a letra digitada pelo usuário
                    letrasReveladas[j] = letra; //Aqui, a letra digitada pelo usuário é inserida na palavra sorteada

                    acerto = true;
               }
          }

          if (acerto) { //Caso o usuário acerte a letra
               console.log("Letra correta! 😉"); 

               if (letrasReveladas.join("") === palavraSorteada) { //Caso todas as letras da palavra sorteadas sejam preenchidas, o jogador/usuário vence o jogo 🥳🥳🥳
                    console.log("Parabéns!!! Você descobriu a palavra 🤩");

                    rl.close(); //Fechando o input de dados

                    console.log(`\nPalavra: ${palavraSorteada}`); //Revelando a palavra que foi sorteada da lista
               }
          }
          else { //Caso o usuário digite uma letra que não tenha na palavra sorteada...
               console.log("Letra incorreta. 😪");
          }
     }

     console.log(`Fim de jogo. A palavra correta era: ${palavraSorteada}`); //Se o usuário zerar suas tentativas, o jogo se encerra e a palavra sorteada é revelada

     console.log("Infelizmente você perdeu. 😭");

     rl.close(); //Fechando o input de dados
}

const listaPalavras = ["Creeper", "Zumbi", "Aldeao", "Ghast", "Rangente", "Esqueleto", "Piglin", "Farejador", "Lavagante", "Enderman", "Cavalo", "Allay", "Axolote", "Bacalhau", "Baiacu", "Burro", "Camelo", "Coelho", "Galinha", "Gato", "Girino", "Sapo", "Jaguatirica", "Lula", "Mula", "Morcego", "Ovelha", "Papagaio", "Porco", "Salmao", "Tartaruga", "Tatu", "Vaca", "Abelha", "Afogado", "Aranha", "Cabra", "Golfinho", "Lhama", "Lobo", "Panda", "Raposa", "Blaze", "Bruxa", "Defensor", "Devastador", "Endermite", "Errante", "Pantanoso", "Guardiao", "Hoglin", "Invocador", "Phantom", "Saqueador", "Shulker", "Slime", "Traca", "Vex", "Vingador", "Vortice", "Zoglin", "Wither"]; //Lista com todas as criaturas do Minecraft que possuem apenas uma palavra. (foi desconsiderado criaturas que tinham mais de uma palavra, tipo Dragão do Ender, Vendedor ambulante, aranha das cavernas etc.) 

const tentativas = 10; //Número de tentativas

console.log(forca(listaPalavras, tentativas)); //Chamando a função para iniciar o jogo