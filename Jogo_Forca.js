"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline"); //O módulo readline lê inputs do usuário no terminal
var rl = readline.createInterface({
    input: process.stdin, //Entrada
    output: process.stdout, //Saída 
});
function input(pergunta) {
    return new Promise((function (resolve) {
        rl.question(pergunta, function (resposta) {
            resolve(resposta);
        });
    }));
}
function forca(listaPalavras, tentativas) {
    return __awaiter(this, void 0, void 0, function () {
        var palavraSorteada, letrasReveladas, i, letra, acerto, j;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("\nSeja bem vindo(a) ao forcucas!!! Aqui, o seu objetivo é acertar a palavra correta em 5 tentativas 😁");
                    console.log("Dica: Criatura/Mob do Minecraft.");
                    palavraSorteada = listaPalavras[Math.floor(Math.random() * listaPalavras.length)].toLowerCase();
                    letrasReveladas = Array(palavraSorteada.length).fill("_");
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < tentativas)) return [3 /*break*/, 4];
                    console.log("\nPalavra escrita: " + letrasReveladas.join(" ")); //Exibindo a palavra parcialmente escrita, pulando um espaço entre as letras
                    return [4 /*yield*/, input("Tentativa ".concat(i + 1, " de ").concat(tentativas, ": Digite uma letra: "))];
                case 2:
                    letra = (_a.sent()).toLowerCase();
                    if (letra.length !== 1) { //Verificando se o usuario digitou mais de uma letra
                        console.log("Digite apenas uma letra!");
                        i--; //Retirando a tentativa, caso o input seja inválido
                        return [3 /*break*/, 3];
                    }
                    acerto = false;
                    for (j = 0; j < palavraSorteada.length; j++) { //Loop que percorre as letras da palavra sorteada 
                        if (palavraSorteada[j] === letra) { //Verificando se a palavra sorteada possui a letra digitada pelo usuário
                            letrasReveladas[j] = letra; //Aqui, a letra digitada pelo usuário é inserida na palavra sorteada
                            acerto = true;
                        }
                    }
                    if (acerto) { //Caso o usuário acerte a letra
                        console.log("Letra correta! 😉");
                        if (letrasReveladas.join("") === palavraSorteada) { //Caso todas as letras da palavra sorteadas sejam preenchidas, o jogador/usuário vence o jogo 🥳🥳🥳
                            console.log("\nParabéns!!! Você descobriu a palavra 🤩");
                            console.log("Palavra: ".concat(palavraSorteada)); //Revelando a palavra que foi sorteada da lista
                            return [2 /*return*/]; //Encerrando o jogo, caso o usuário acerte a palavra sorteada
                        }
                    }
                    else { //Caso o usuário digite uma letra que não tenha na palavra sorteada...
                        console.log("Letra incorreta. 😪");
                    }
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4:
                    console.log("\nFim de jogo. A palavra correta era: ".concat(palavraSorteada)); //Se o usuário zerar suas tentativas, o jogo se encerra e a palavra sorteada é revelada
                    console.log("Infelizmente você perdeu. 😭");
                    return [2 /*return*/];
            }
        });
    });
}
function iniciar_jogo() {
    return __awaiter(this, void 0, void 0, function () {
        var listaPalavras, tentativas, continuar;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    listaPalavras = ["Creeper", "Zumbi", "Aldeao", "Ghast", "Rangente", "Esqueleto", "Piglin", "Farejador", "Lavagante", "Enderman", "Cavalo", "Allay", "Axolote", "Bacalhau", "Baiacu", "Burro", "Camelo", "Coelho", "Galinha", "Gato", "Girino", "Sapo", "Jaguatirica", "Lula", "Mula", "Morcego", "Ovelha", "Papagaio", "Porco", "Salmao", "Tartaruga", "Tatu", "Vaca", "Abelha", "Afogado", "Aranha", "Cabra", "Golfinho", "Lhama", "Lobo", "Panda", "Raposa", "Blaze", "Bruxa", "Defensor", "Devastador", "Endermite", "Errante", "Pantanoso", "Guardiao", "Hoglin", "Invocador", "Phantom", "Saqueador", "Shulker", "Slime", "Traca", "Vex", "Vingador", "Vortice", "Zoglin", "Wither"];
                    tentativas = 15;
                    _a.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 4];
                    return [4 /*yield*/, forca(listaPalavras, tentativas)];
                case 2:
                    _a.sent(); //Chamando a função do jogo da forca (forcatti)
                    return [4 /*yield*/, input("\nVocê deseja continuar jogando? (Digite sim ou não): ")];
                case 3:
                    continuar = (_a.sent()).toLowerCase();
                    if (continuar !== "sim" && continuar !== "s") { //Caso o usuário não queria continuar o jogo
                        console.log("Tudo bem. Muito obrigado por jogar 😁");
                        rl.close(); //Fechando o input de dados
                        return [3 /*break*/, 4]; //Parando o jogo
                    }
                    else {
                        console.log("Digite uma resposta válida.");
                    }
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
iniciar_jogo(); //Chamando a função que inicia o jogo
