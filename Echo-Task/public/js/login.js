function login() {
    
    const gmailInput = document.getElementById('gmail');
    const senhaInput = document.getElementById('password');

    
    const gmail = gmailInput.value.trim();
    const senha = senhaInput.value;

    
    if (!gmail || !senha) {
        alert("Preencha todos os campos");
        return;
    }

   
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    
    const usuarioEncontrado = usuarios.find(user =>
        user.gmail.toLowerCase() === gmail.toLowerCase() &&
        user.senha === senha
    );

    if (usuarioEncontrado) {
        window.location.href = 'pagina_inicial.html';
    } else {
        alert("Usuário não encontrado ou senha incorreta");
    }
}


document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault()
    login();
});
