// Seleciona o botão com o ID "voltar-topo" e o armazena na constante 'btnTopo'.
const btnTopo = document.getElementById("voltar-topo");

/* CODIGO REFERENTE AO BOTÃO DE VOLTAR PARA CIMA */
// Define uma função para ser executada sempre que o usuário rolar a página.
window.onscroll = function () {
    // Verifica se o usuário rolou mais de 300px para baixo (em duas possibilidades: body ou documentElement).
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) { // Se sim, o botão para voltar ao topo aparece.

        btnTopo.style.display = "block";
    }
    else { // Se não, o botão permanece escondido.
        btnTopo.style.display = "none";
    }
};

// Adiciona um "escutador de eventos" ao botão, que será ativado quando o usuário clicar nele.
btnTopo.addEventListener("click", () => {
    // Ao clicar, a página rola suavemente até o topo.
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Função para o botão "Enviar":
function enviar() {
    // Crio um HTMLElement chamado form:
    const form = document.getElementById("form");
    // Indo para página de suporte após o login:
    form.addEventListener('submit', function (event) { // Usando o eventListener
        event.preventDefault(); // Previne o comportamento padrão do submit (recarregar/enviar formulário).
        // Exibe uma mensagem ao usuário confirmando o envio.
        alert("Mensagem enviada com SUCESSO!");
    });
}

// Função para mudar para a página de login:
function mudar() {
    // Redireciona o navegador para o caminho da página de login:
    window.location.href = "/Paginas/login/login.html";
}
