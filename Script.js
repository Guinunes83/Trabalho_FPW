
document.getElementById('form-contato').addEventListener('submit', function (event) {
    event.preventDefault();
    const nome = event.target.nome.value;
    const email = event.target.email.value;
    const mensagem = event.target.mensagem.value;

    console.log('Mensagem enviada:', { nome, email, mensagem });
    alert('Obrigado pela sua mensagem, ' + nome + '!');
    event.target.reset();
});

function expandir(section) {
    section.classList.toggle('expandido');
}
