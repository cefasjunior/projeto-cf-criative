// Passo 1 - dar um jeito de pegarr o elemento HTML dos botõs
const botoesCarrossel = document.querySelectorAll('.botao');

const imagens = document.querySelectorAll('.imagem');

// Passo 2 dar um jeito de identificar o clique do usuário do botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        desativarBotaoSelecionado();

        // Passo 4 - Marcar o botão clicado como se estivesse selecionado
        selecionarBotaoCarrossel(botao);

        // Passo 5 - Esconder a imagem ativa de fundo
        esconderImagemAtiva();

        // Passo 6 - Fazer aparecer a imagem de fundo correspondente ao botão clicado
        mostrarImagemDeFundo(indice);
    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}