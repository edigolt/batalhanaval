let jogador = localStorage.getItem("nomeJogador");
let dificuldade = localStorage.getItem("dificuldade");

let nomeHTML = document.querySelector("#nomeJogador");

nomeHTML.textContent = jogador;

let botaoReiniciar = document.querySelector("#reiniciar");
botaoReiniciar.addEventListener("click", function () {
    iniciarjogo();
});

let botaoVoltar = document.querySelector("#voltar");
botaoVoltar.addEventListener("click", function () {
    window.location.href = "index.html";
});

function iniciarjogo() {

    let posicoesUsadas = [];

    let tiros = 0;

    let pontuacao = 0;

    let tamanhoTabuleiro;

    let navio;

    let vidas;

    let naviosEncontrados = 0;

    if (dificuldade == "facil") {
        tamanhoTabuleiro = 3;
        navio = 3;
        vidas = 7;
    };

    if (dificuldade == "medio") {
        tamanhoTabuleiro = 8;
        navio = 8;
        vidas = 50;
    };

    if (dificuldade == "dificil") {
        tamanhoTabuleiro = 10;
        navio = 10;
        vidas = 80;
    };

    let tabuleiro1 = [];

    for (let i = 0; i < tamanhoTabuleiro; i++) {

        tabuleiro1.push([]);

        for (let j = 0; j < tamanhoTabuleiro; j++) {

            tabuleiro1[i].push("💧");

        }

    }

    for (let i = 0; i < navio; i++) {
        let linharandom = Math.floor(Math.random() * tamanhoTabuleiro);

        let colunarandom = Math.floor(Math.random() * tamanhoTabuleiro);

        while (posicoesUsadas.includes(linharandom + "-" + colunarandom)) {
            colunarandom = Math.floor(Math.random() * tamanhoTabuleiro);
            linharandom = Math.floor(Math.random() * tamanhoTabuleiro);
        }

        posicoesUsadas.push(linharandom + "-" + colunarandom);

        tabuleiro1[linharandom][colunarandom] = "🚢";
    }

    console.log(tabuleiro1);

    let tabuleiroHTML = document.querySelector("#tabuleiro");
    tabuleiroHTML.style.setProperty("--tamanho", tamanhoTabuleiro);

    let contadorHTML = document.querySelector("#contador");

    let pontuacaoHTML = document.querySelector("#pontuacao");
    pontuacaoHTML.textContent = pontuacao;

    let naviosHTML = document.querySelector("#navios");
    naviosHTML.textContent = navio;

    let vidasHTML = document.querySelector("#vidas");
    vidasHTML.textContent = vidas;

    let mensagemHTML = document.querySelector("#mensagem");
    mensagemHTML.textContent = "";

    botaoReiniciar.style.display = "none";

    tabuleiroHTML.innerHTML = "";

    let botoes = [];

    for (let linha = 0; linha < tabuleiro1.length; linha++) {
        for (let coluna = 0; coluna < tabuleiro1[linha].length; coluna++) {

            let botao = document.createElement("button");

            botao.textContent = "?"

            botoes.push(botao);

            botao.addEventListener("click", function () {


                if (botao.dataset.clicado == "sim") {
                    return;
                }

                botao.dataset.clicado = "sim";

                botao.textContent = tabuleiro1[linha][coluna];
                tiros += 1

                contadorHTML.textContent = tiros;

                if (tabuleiro1[linha][coluna] == "agua") {

                    vidas -= 1;
                    vidasHTML.textContent = vidas;

                    if (vidas == 0) {
                        mensagemHTML.textContent = "Você perdeu! Deseja tentar novamente?";
                        botaoReiniciar.style.display = "block";

                        for (let botao of botoes) {
                            botao.disabled = true;
                        }
                    }

                } else {

                    naviosEncontrados += 1;

                    pontuacao += 10;
                    pontuacaoHTML.textContent = pontuacao;

                    naviosHTML.textContent = navio - naviosEncontrados;
                    if (naviosEncontrados == navio) {

                        mensagemHTML.textContent = "Você venceu!";

                        botaoReiniciar.style.display = "block";

                        for (let botao of botoes) {
                            botao.disabled = true;
                        }

                        let resultado = {
                            nome: jogador,
                            pontuacao: pontuacao
                        };

                        let ranking = JSON.parse(localStorage.getItem("ranking")) || [];

                        ranking.push(resultado);

                        ranking.sort(function (a, b) {
                            return b.pontuacao - a.pontuacao;
                        });

                        localStorage.setItem("ranking", JSON.stringify(ranking));

                        setTimeout(function () {
                            window.location.href = "ranking.html";
                        }, 1500);
                    }

                }

                console.log(`Você clicou em ${tabuleiro1[linha][coluna]}`);
            });

            tabuleiroHTML.appendChild(botao);

        }
    };
};

iniciarjogo();
