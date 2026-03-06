// Obtém o elemento do botão "Voltar ao Topo" pelo ID:
const btnTopo = document.getElementById("voltar-topo");
// Adiciona um event listener para o scroll da janela:
window.onscroll = function () {
    // Verifica se a posição de scroll vertical é maior que 300 pixels:
    // (tanto para document.body quanto document.documentElement para compatibilidade)
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnTopo.style.display = "block"; // Mostra o botão se scroll > 300px.
    } else {
        btnTopo.style.display = "none";  // Esconde o botão se scroll <= 300px.
    }
};
// Adiciona um event listener de clique ao botão "Voltar ao Topo":
btnTopo.addEventListener("click", () => {
    // Rola suavemente até o topo da página quando o botão é clicado:
    window.scrollTo({ 
        top: 0, // Posição final (topo da página)
        behavior: "smooth" // Animação suave
    });
});
// Função para redirecionar para a página de login
function mudar() {
    // Redireciona o navegador para a página de login:
    window.location.href = "/Paginas/login/login.html";
}