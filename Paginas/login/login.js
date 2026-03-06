document.addEventListener('DOMContentLoaded', function () {
  // Seleciona o formulário de login pelo seu ID para adicionar o evento de submissão
  const formLogin = document.getElementById('form');
  // Adiciona um listener que será disparado quando o formulário for submetido
  formLogin.addEventListener('submit', function (e) {
    e.preventDefault(); // Previne o comportamento padrão de recarregar a página ao submeter o formulário
    // Obtém o valor do campo usuário, converte para minúsculas e remove espaços em branco nas extremidades
    const usuario = document.getElementById('usuario').value.toLowerCase().trim();
    // Obtém o valor do campo senha sem alteração
    const senha = document.getElementById('senha').value;
    // Verifica se algum dos campos está vazio, string vazia é avaliada como false
    if (!usuario || !senha) {
      // Exibe alerta ao usuário solicitando que preencha todos os campos obrigatórios
      alert('Por favor, preencha todos os campos!');
      // Interrompe a execução da função para evitar processamento adicional
      return;
    }
    // Recupera a lista de usuários cadastrados do localStorage; se não existir, usa array vazio
    const usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios')) || [];
    // Busca dentro do array de usuários um usuário cujo email (convertido para minúsculas) e senha correspondam aos fornecidos no formulário
    const usuarioValido = usuariosCadastrados.find(u =>
      u.email.toLowerCase() === usuario && u.senha === senha
    );
    // Se um usuário válido for encontrado:
    if (usuarioValido) {
      // Armazena em sessionStorage os dados do usuário logado como um objeto JSON
      sessionStorage.setItem('usuarioLogado', JSON.stringify({
        // Guarda o nome do usuário para uso posterior na sessão
        nome: usuarioValido.nome,
        // Guarda o email do usuário para uso posterior na sessão
        email: usuarioValido.email
      }));
      // Após login bem sucedido, redireciona o usuário para a página de suporte
      window.location.href = '/Paginas/suporte/suporte.html';
    }
    // Caso nenhum usuário válido seja encontrado (email ou senha incorretos)
    else {
      // Exibe alerta informando erro nas credenciais fornecidas
      alert('Usuário ou senha incorretos!\nPor favor, verifique suas credenciais.');
    }
  });
  // Chama função para checar se existe usuário logado na sessão e possivelmente redirecionar
  verificarLoginExistente();
});

// Função para verificar se já existe um usuário logado na sessão
function verificarLoginExistente() {
  // Recupera os dados do usuário logado, se existirem, do sessionStorage
  const usuarioLogado = sessionStorage.getItem('usuarioLogado');
  // Se houver dados de usuário logado armazenados
  if (usuarioLogado) {
    // Pergunta ao usuário via caixa de confirmação se deseja ser redirecionado diretamente para a área de suporte
    if (confirm('Você já está logado. Deseja ir direto para a área de suporte?')) {
      // Caso confirme, redireciona para a página de suporte
      window.location.href = '/Paginas/suporte/suporte.html';
    }
  }
}
