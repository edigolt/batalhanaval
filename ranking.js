let rankingHTML = document.querySelector("#ranking");

let ranking = JSON.parse(localStorage.getItem("ranking")) || [];

ranking.sort(function(a, b) {
    return b.pontuacao - a.pontuacao;
});

for (let jogador of ranking) {

    let item = document.createElement("li");

    item.textContent = jogador.nome + " - " + jogador.pontuacao + " pontos";

    rankingHTML.appendChild(item);
}

let jogarNovamente = document.querySelector("#jogarNovamente");

jogarNovamente.addEventListener("click", function() {
    window.location.href = "index.html";
});