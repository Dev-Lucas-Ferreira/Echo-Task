// Função que será chamada quando o formulário for enviado
function cadastrar() {
    // Pega os valores dos inputs e remove espaços em branco extras
    const nome = document.getElementById('name').value.trim();
    const gmail = document.getElementById('gmail').value.trim();
    const confirmarGmail = document.getElementById('gmal_confirm').value.trim();
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('password_confirm').value;
    const idade = document.getElementById('years').value.trim();

    // Verifica se todos os campos foram preenchidos
    if (!nome || !gmail || !confirmarGmail || !senha || !confirmarSenha || !idade) {
        alert("Todos os campos devem ser preenchidos");
        return;
    }

    // Verifica se os e-mails coincidem
    if (gmail !== confirmarGmail) {
        alert("Os e-mails não coincidem");
        return;
    }

    // Verifica se as senhas coincidem
    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem");
        return;
    }

    // Verifica se a idade é suficiente (ajustado para >= 15, como o alerta indica)
    if (idade < 15) {
        alert("Menores de 15 não podem criar conta nesse site");
        return;
    }

    // Recupera os usuários já cadastrados ou cria um array vazio
    let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    // Verifica se o e-mail já está cadastrado (comparação case-insensitive)
    if (usuarios.some(user => user.gmail.toLowerCase() === gmail.toLowerCase())) {
        alert("E-mail já cadastrado");
        return;
    }

    // Cria um novo objeto de usuário
    const novoUsuario = {
        nome,
        gmail,
        senha,
        idade
    };

    // Adiciona o novo usuário ao array
    usuarios.push(novoUsuario);

    // Salva o array atualizado no localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // Exibe mensagem de sucesso e redireciona para a página de login
    alert("Cadastro feito com sucesso");
    window.location.href = "login.html";
}

// Adiciona o evento de envio ao formulário
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede que o formulário seja enviado normalmente
    cadastrar(); // Chama a função de cadastro
});
