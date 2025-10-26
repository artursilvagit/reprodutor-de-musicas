// Variáveis e elementos DOM
const botaoAdicionarMusica = document.querySelector("#container-titulo-playlist button")
const telaAdicionarMusica = document.getElementById("container-adicionar-musicas")
const botaoFecharTela = document.querySelector("form i")

// Definindo funções
function abrirFecharTelaAdicionarMusica() {
    if (telaAdicionarMusica.style.display == "none") {
        telaAdicionarMusica.style.display = "flex"
        return
    }
    telaAdicionarMusica.style.display = "none"
}

// Adicionando eventos
botaoAdicionarMusica.addEventListener("click", abrirFecharTelaAdicionarMusica)
botaoFecharTela.addEventListener("click", abrirFecharTelaAdicionarMusica)