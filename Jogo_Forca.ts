import * as readline from "readline";

const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout,
});

function input(pergunta: string): Promise<string> {
     return new Promise((resolve => {
          rl.question(pergunta, (resposta) => {
               resolve(resposta);
          })
     }))
}

async function forca(listaPalavras: string[], tentativas: number): Promise<void> {
     console.log("Seja bem vindo(a) ao forcucas!!! Aqui, o seu objetivo é acertar a palavra correta em 5 tentativas 😁");

     const palavraSorteada = listaPalavras[Math.floor(Math.random() * listaPalavras.length)].toLowerCase();
     let letrasReveladas: string[] = Array(palavraSorteada.length).fill("_");

     for (let i = 0; i < tentativas; i++) {
          console.log("\nPalavra escrita: " + letrasReveladas.join(" "));
          const letra = (await input(`Tentativa ${i + 1} de ${tentativas}: Digite uma letra: `)).toLowerCase();

          if(letra.length !== 1) {
               console.log("Digite apenas uma letra!");

               i--;

               continue;
          }

          let acerto = false;

          for (let j = 0; j < palavraSorteada.length; j++) {
               if (palavraSorteada[j] === letra) {
                    letrasReveladas[j] = letra;

                    acerto = true;
               }
          }

          if (acerto) {
               console.log("Letra correta! 😉");

               if (letrasReveladas.join("") === palavraSorteada) {
                    console.log("Parabéns!!! Você descobriu a palavra 🤩");

                    rl.close();

                    console.log(`\nPalavra: ${palavraSorteada}`);
               }
          }
          else {
               console.log("Letra incorreta. 😪");
          }
     }

     console.log(`Fim de jogo. A palavra correta era: ${palavraSorteada}`);

     console.log("Infelizmente você perdeu. 😭");

     rl.close();
}

const listaPalavras = ["Creeper", "Zumbi", "Aldeao", "Ghast", "Rangente", "Esqueleto", "Piglin", "Farejador", "Lavagante", "Enderman", "Cavalo", "Allay", "Axolote", "Bacalhau", "Baiacu", "Burro", "Camelo", "Coelho", "Galinha", "Gato", "Girino", "Sapo", "Jaguatirica", "Lula", "Mula", "Morcego", "Ovelha", "Papagaio", "Porco", "Salmão", "Tartaruga", "Tatu", "Vaca", "Abelha", "Afogado", "Aranha", "Cabra", "Golfinho", "Lhama", "Lobo", "Panda", "Raposa", "Blaze", "Bruxa", "Defensor", "Devastador", "Endermite", "Errante", "Pantanoso", "Guardiao", "Hoglin", "Invocador", "Phantom", "Saqueador", "Shulker", "Slime", "Traca", "Vex", "Vingador", "Vortice", "Zoglin", "Wither"];

const tentativas = 10;

console.log(forca(listaPalavras, tentativas));