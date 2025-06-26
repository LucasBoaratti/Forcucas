while (true) {
     function forca(listaPalavras: string[], tentativas: number): string {
          console.log("Seja bem vindo(a) ao forcucas!!! Aqui, o seu objetivo é acertar a palavra correta em 5 tentativas 😁");

          const palavraSorteada = listaPalavras[Math.floor(Math.random() * listaPalavras.length)].toLowerCase();

          for (let i = 0; i < tentativas; i++) {
               const letra = prompt(`Tentativa ${i} de ${tentativas}: Digite uma letra: `)?.toLowerCase();

               if(!letra || letra.length !== 1) {
                    console.log("Digite apenas uma letra!");

                    continue;
               }

               let acerto = false;
          }
     }

     const listaPalavras = ["Creeper", "Zumbi", "Aldeão", "Ghast", "Rangente", "Esqueleto", "Piglin", "Farejador", "Lavagante", "Enderman", "Cavalo", "Allay", "Axolote", "Bacalhau", "Baiacu", "Burro", "Camelo", "Coelho", "Galinha", "Gato", "Girino", "Sapo", "Jaguatirica", "Lula", "Mula", "Morcego", "Ovelha", "Papagaio", "Porco", "Salmão", "Tartaruga", "Tatu", "Vaca", "Abelha", "Afogado", "Aranha", "Cabra", "Golfinho", "Lhama", "Lobo", "Panda", "Raposa", "Blaze", "Bruxa", "Defensor", "Devastador", "Endermite", "Errante", "Pantanoso", "Guardião", "Hoglin", "Invocador", "Phantom", "Saqueador", "Shulker", "Slime", "Traça", "Vex", "Vingador", "Vórtice", "Zoglin", "Wither"];

     const tentativas = 5;

     console.log(forca(listaPalavras, tentativas));
}