let formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    let nome = document.querySelector("#nome").value;
    let dificuldade = document.querySelector("#dificuldade").value;
    let idade = document.querySelector("#idade").value;

    if (nome == "") {
        alert("Digite seu nome!");
        return;
    }

    if (dificuldade == "") {
        alert("Escolha uma dificuldade!");
        return;
    }

    if (idade == "") {
        alert("Digite sua idade!");
        return;
    }

    localStorage.setItem("nomeJogador", nome);
    localStorage.setItem("dificuldade", dificuldade);
    localStorage.setItem("idadeJogador", idade);

    window.location.href = "jogo.html";
});