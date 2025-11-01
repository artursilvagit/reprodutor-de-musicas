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
const tiposPermitidosImagem = ["image/png", "image/jpeg", "image/webp", "image/svg+xml"]
const tiposPermitidosAudio = ["audio/mpeg", "audio/aac", "audio/wav"]


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

function alterarTextoLabel(input, label, array) {
    if (!(array.includes(input.files[0].type))) {
        alert("Tipo de arquivo não permitido.")
        input.value = ""
        return
    }
    if (input.files[0].name.length >= 20) {
        document.getElementById(label).textContent = `${input.files[0].name.slice(0, 18)}...`
        return
    }
    document.getElementById(label).textContent = input.files[0].name
}

// Adicionando eventos
botaoAdicionarMusica.addEventListener("click", abrirFecharTelaAdicionarMusica)
botaoFecharTela.addEventListener("click", abrirFecharTelaAdicionarMusica)
botaoEnviar.addEventListener("click", criarNovaMusica)
inputArquivoAudio.addEventListener("change", () => {
    alterarTextoLabel(inputArquivoAudio, "label2-arquivo-audio", tiposPermitidosAudio)
})
inputArquivoImagem.addEventListener("change", () => {
    alterarTextoLabel(inputArquivoImagem, "label2-arquivo-imagem", tiposPermitidosImagem)
})
