// script.js
document.getElementById('contato-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    if(nome && email && assunto && mensagem) {
        alert('Mensagem enviada com sucesso!\nNome: ' + nome + '\nEmail: ' + email + '\nAssunto: ' + assunto + '\nMensagem: ' + mensagem);
        document.getElementById('contato-form').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
