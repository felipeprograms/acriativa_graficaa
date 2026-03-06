// Função responsável por alternar entre o modo claro e escuro da página.
function alternarModo() {
    // Captura o elemento <body> do documento.
    const body = document.body;
    // Captura o ícone da lâmpada com o ID "lampadaEscura".
    const icone = document.getElementById("lampadaEscura");
    // Alterna a classe "modo-escuro" no body (ativa ou desativa).
    const modoAtivo = body.classList.toggle("modo-escuro");
    // Atualiza o ícone de acordo com o modo atual.
    if (modoAtivo) { // Se modo escuro estiver ativo, troca o ícone para preenchido (fa-solid).
        icone.classList.remove("fa-regular");
        icone.classList.add("fa-solid");
    }
    else { // Se não, usa o ícone com contorno (fa-regular).
        icone.classList.remove("fa-solid");
        icone.classList.add("fa-regular");
    }
    // Salva a preferência do usuário no localStorage ("escuro" ou "claro").
    localStorage.setItem("modo", modoAtivo ? "escuro" : "claro");
}

// Ao carregar a página, aplica automaticamente o modo salvo anteriormente.
window.onload = function () {
    // Recupera o valor salvo (se houver) no localStorage.
    const modoSalvo = localStorage.getItem("modo");
    // Captura o ícone novamente.
    const icone = document.getElementById("lampadaEscura");
    // Se o modo salvo for "escuro", aplica o modo escuro e ajusta o ícone.
    if (modoSalvo === "escuro") {
        document.body.classList.add("modo-escuro");
        // Deixa o ícone como fa-regular (contorno) no modo escuro.
        icone.classList.remove("fa-solid");
        icone.classList.add("fa-regular");
    }
    else {
        // Caso contrário, garante que o modo claro esteja ativo e ajusta o ícone.
        document.body.classList.remove("modo-escuro");
        // Deixa o ícone como fa-solid (preenchido) no modo claro.
        icone.classList.remove("fa-regular");
        icone.classList.add("fa-solid");
    }
};
