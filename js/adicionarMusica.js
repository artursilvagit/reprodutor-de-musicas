// Variáveis e elementos DOM
const botaoAdicionarMusica = document.querySelector("#container-titulo-playlist button")
const telaAdicionarMusica = document.getElementById("container-adicionar-musicas")
const botaoFecharTela = document.querySelector("form i")
const inputArquivoAudio = document.getElementById("arquivo-audio")
const inputArquivoImagem = document.getElementById("arquivo-imagem")
const inputNomeMusica = document.getElementById("nome-musica")
const inputNomeArtista = document.getElementById("nome-artista")
const inputCorFundo = document.getElementById("cor-fundo")
const botaoEnviar = document.querySelector("form input[type='button']")

// Definindo funções
function abrirFecharTelaAdicionarMusica() {
    if (telaAdicionarMusica.style.display == "none") {
        telaAdicionarMusica.style.display = "flex"
        return
    }
    telaAdicionarMusica.style.display = "none"
}

function criarNovaMusica() {
    const novaMusica = {}

    novaMusica.nome = inputNomeMusica.value
    novaMusica.linkAudio = URL.createObjectURL(inputArquivoAudio.files[0])
    novaMusica.banda = inputNomeArtista.value
    novaMusica.linkImagem = URL.createObjectURL(inputArquivoImagem.files[0])
    novaMusica.corFundo = inputCorFundo.value
    novaMusica.like = false

    listaMusicas.push(novaMusica)
    alert("musica adicionada!")
    abrirFecharTelaAdicionarMusica()
    musicaAtual = listaMusicas.length - 1
    alterarInformacoes()
}

// Adicionando eventos
botaoAdicionarMusica.addEventListener("click", abrirFecharTelaAdicionarMusica)
botaoFecharTela.addEventListener("click", abrirFecharTelaAdicionarMusica)
botaoEnviar.addEventListener("click", criarNovaMusica)