let linhasUsadas = [];

let colunasUsadas = [];

let jogador = "andré";

let tiros = 0;

let navios = 3;

let acertou = true;

console.log(jogador);

console.log("A quantidade de tiros foi:", tiros);

let dificuldade = "medio";

let tamanhoTabuleiro;

let navio;

let vidas;

if (dificuldade == "facil") {
    tamanhoTabuleiro = 3;
    navio = 2;
    vida = 6;
};

if (dificuldade == "medio") {
    tamanhoTabuleiro = 8;
    navio = 8;
    vidas = 15;
};

if (dificuldade == "dificil") {
    tamanhoTabuleiro = 10;
    navio = 10;
    vidas = 20;
};

let tabuleiro1 = [];

for (let i = 0; i < tamanhoTabuleiro; i++) {

    tabuleiro1.push([]);

    for (let j = 0; j < tamanhoTabuleiro; j++) {

        tabuleiro1[i].push("agua");

    }

}

let linharandom = Math.floor(Math.random() * tamanhoTabuleiro);

let colunarandom = Math.floor(Math.random() * tamanhoTabuleiro);

for (let i = 0; i < navio; i++){
    let linharandom = Math.floor(Math.random() * tamanhoTabuleiro);

    let colunarandom = Math.floor(Math.random() * tamanhoTabuleiro);

    while (colunasUsadas.includes(colunarandom) || linhasUsadas.includes(linharandom)) {
    colunarandom = Math.floor(Math.random() * tamanhoTabuleiro);
    linharandom = Math.floor(Math.random() * tamanhoTabuleiro);   
    }
    colunasUsadas.push(colunarandom);

    linhasUsadas.push(linharandom);

    tabuleiro1[linharandom][colunarandom] = "navio";
}

console.log(tabuleiro1);

let titulo = document.querySelector("h1");

titulo.textContent = "Batalha Naval 🚢"

let tabuleiroHTML = document.querySelector("#tabuleiro");

let contadorHTML = document.querySelector("#contador");

for (let linha = 0; linha < tabuleiro1.length; linha++) {
    for (let coluna = 0; coluna < tabuleiro1[linha].length; coluna++) {

        let botao = document.createElement("button");

        botao.textContent = "?"

        botao.addEventListener("click", function () {

            botao.textContent = tabuleiro1[linha][coluna];
            tiros += 1

            contadorHTML.textContent = tiros;

            console.log("A quantidade de tiros foi:", tiros);

            console.log(`Você clicou em ${tabuleiro1[linha][coluna]}`);
        });

        tabuleiroHTML.appendChild(botao);

    }
};

