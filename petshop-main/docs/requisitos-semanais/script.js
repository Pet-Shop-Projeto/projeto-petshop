const form = document.getElementById("form-recuperacao");
const email = document.getElementById("email");
const mensagemErro = document.getElementById("mensagem-erro");
const telaRecuperacao = document.getElementById("tela-recuperacao");
const telaSucesso = document.getElementById("tela-sucesso");
const voltarLogin = document.getElementById("voltar-login");
const voltarSucesso = document.getElementById("voltar-sucesso");

function mostrarErro(mensagem) {
    mensagemErro.textContent = mensagem;
    email.classList.add("input-error");
}

function limparErro() {
    mensagemErro.textContent = "";
    email.classList.remove("input-error");
}

function voltarParaLogin(event) {
    event.preventDefault();
    window.location.href = "login.html";
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    limparErro();

    const valorEmail = email.value.trim();

    if (!valorEmail) {
        mostrarErro("Informe seu e-mail para continuar.");
        email.focus();
        return;
    }

    if (!email.validity.valid) {
        mostrarErro("Digite um e-mail válido.");
        email.focus();
        return;
    }

    telaRecuperacao.classList.add("hidden");
    telaSucesso.classList.remove("hidden");
});

voltarLogin.addEventListener("click", voltarParaLogin);

voltarSucesso.addEventListener("click", voltarParaLogin);

email.addEventListener("input", limparErro);
