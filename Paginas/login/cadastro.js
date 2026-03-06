// Aguarda o carregamento completo do DOM antes de executar o código:
document.addEventListener('DOMContentLoaded', function () {  
  // Controle do campo CPF/CNPJ:
  const pessoaFisica = document.getElementById('pessoafisica');  // Seleciona o input radio de pessoa física
  const pessoaJuridica = document.getElementById('pessoajuridica');  // Seleciona o input radio de pessoa jurídica
  const campoDocumento = document.getElementById('campoDocumento');  // Seleciona o container do campo CPF/CNPJ que será exibido dinamicamente
  const labelDocumento = document.getElementById('labelDocumento');  // Seleciona o label do campo CPF/CNPJ para alterar o texto dinamicamente
  // Adiciona evento para detectar quando pessoa física é selecionada:
  pessoaFisica.addEventListener('change', function () {
    if (this.checked) {  // Verifica se o radio pessoa física está selecionado
      campoDocumento.style.display = 'block';  // Exibe o campo CPF/CNPJ
      labelDocumento.textContent = '* CPF:';  // Altera o texto do label para CPF
      document.getElementById('documento').placeholder = 'Ex: 123.456.789-00';  // Ajusta o placeholder para formato de CPF
    }
  });
  // Adiciona evento para detectar quando pessoa jurídica é selecionada:
  pessoaJuridica.addEventListener('change', function () {  
    if (this.checked) {  // Verifica se o radio pessoa jurídica está selecionado
      campoDocumento.style.display = 'block';  // Exibe o campo CPF/CNPJ
      labelDocumento.textContent = '* CNPJ:';  // Altera o texto do label para CNPJ
      document.getElementById('documento').placeholder = 'Ex: 12.345.678/0001-00';  // Ajusta o placeholder para formato de CNPJ
    }
  });
  // Cadastro de usuário:
  const formCadastro = document.getElementById('formCadastro');  // Seleciona o formulário de cadastro
  formCadastro.addEventListener('submit', function (e) {  // Adiciona evento para interceptar o envio do formulário
    e.preventDefault();  // Previne o envio padrão para processar manualmente
    const usuario = {  // Cria objeto com os dados do usuário extraídos do formulário
      email: document.getElementById('email').value.toLowerCase().trim(), // Armazena email em minúsculas, removendo espaços extras
      nome: document.getElementById('nome').value.trim(),  // Armazena nome, removendo espaços extras
      telefone: document.getElementById('telefone').value.trim(),  // Armazena telefone, removendo espaços extras
      endereco: document.getElementById('endereco').value.trim(),  // Armazena endereço, removendo espaços extras
      tipoPessoa: document.querySelector('input[name="tipoPessoa"]:checked').value,  // Captura valor do radio selecionado para tipo de pessoa
      documento: document.getElementById('documento').value.trim(),  // Armazena CPF ou CNPJ, removendo espaços extras
      senha: document.getElementById('senha').value  // Armazena senha sem modificação
    };
    // Validação básica de email:
    if (!usuario.email.includes('@') || !usuario.email.includes('.')) {  // Verifica se email possui "@" e "." para validade mínima
      alert('Por favor, insira um email válido!');  // Exibe alerta caso email seja inválido
      return;  // Interrompe a execução do submit
    }
    // Verifica se todos os campos obrigatórios foram preenchidos
    if (!usuario.nome || !usuario.telefone || !usuario.endereco || !usuario.documento || !usuario.senha) {  // Se algum campo estiver vazio
      alert('Por favor, preencha todos os campos obrigatórios!');  // Exibe alerta informando campos obrigatórios faltando
      return; // Interrompe a execução do submit
    }
    // Salva o usuário:
    if (salvarUsuario(usuario)) { // Chama função que salva usuário e verifica se foi salvo com sucesso
      alert('Cadastro realizado com sucesso!\nVocê será redirecionado para a página de login.'); // Confirmação de cadastro com mensagem
      window.location.href = 'login.html'; // Redireciona para página de login
    }
  });
});
// Função para salvar usuário no localStorage:
function salvarUsuario(usuario) {
  // Recupera lista de usuários armazenados ou inicia array vazio:
  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  // Verifica se o email já está cadastrado:
  const usuarioExistente = usuarios.find(u => u.email === usuario.email);  // Busca usuário existente com mesmo email
  if (usuarioExistente) {  // Se encontrar usuário com email igual
    alert('Este email já está cadastrado!\nPor favor, use outro email ou faça login.');  // Exibe alerta de email duplicado
    return false;  // Retorna falso indicando falha ao salvar
  }
  usuarios.push(usuario); // Adiciona novo usuário ao array
  localStorage.setItem('usuarios', JSON.stringify(usuarios)); // Salva array atualizado no localStorage em formato JSON.
  return true; // Retorna verdadeiro indicando sucesso.
}
