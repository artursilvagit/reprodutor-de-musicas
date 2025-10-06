//Lista de objetos que contém as músicas
//Cada objeto tem as informações de cada música
const listaMusicas = [
    {
        nome: "Bleed The Freak",
        linkAudio: "https://www.dropbox.com/scl/fi/txzoddh0rxjlkbtn5eoeq/bleed-the-freak.mp3?rlkey=ohqykw64x2egnksrlbfdn2o0f&st=1luzngyw&raw=1",
        banda: "Alice In Chains",
        LinkImagem: "imagens/bleed-the-freak.jpg",
        corFundo: "rgb(168, 12, 12)",
        like: false
    },
    {
        nome: "Fade To Black",
        linkAudio: "https://www.dropbox.com/scl/fi/21phada6evr9tdr08c5em/fade-to-black.mp3?rlkey=p6ex7ih3hp7kx6lcmg6tue1es&st=gzsz2pfx&raw=1",
        banda: "Metallica",
        LinkImagem: "imagens/fade-to-black.jpg", 
        corFundo: "rgb(80, 113, 221)",
        like: false
    },
    {
        nome: "ATWA",
        linkAudio: "https://www.dropbox.com/scl/fi/e8aglp9ghfxuwzy5mlmwv/atwa.mp3?rlkey=e8q3yhw992kgm7rzjw5mte79r&st=8pxzk202&raw=1",
        banda: "System Of A Down",
        LinkImagem: "imagens/atwa.jpg",
        corFundo: "rgba(114, 77, 47, 1)",
        like: false
    },
    {
        nome: "Spiders",
        linkAudio: "https://www.dropbox.com/scl/fi/z591oiv1npmxrnbdztxcd/spiders.mp3?rlkey=4dj7ay65x704tp1wytkbykil5&st=7w6qb97d&raw=1",
        banda: "System Of A Down",
        LinkImagem: "imagens/spiders.jpg",
        corFundo: "rgba(97, 86, 37, 1)",
        like: false
    },
    {
        nome: "Somewhere I Belong",
        linkAudio: "https://www.dropbox.com/scl/fi/33lgvl80g6cjy3mdpxpbu/somewhere-i-belong.mp3?rlkey=f75mi44noi7hmi4c9tiy4zl0r&st=zgoirhs5&raw=1",
        banda: "Linkin Park",
        LinkImagem: "imagens/somewhere-i-belong.jpg" ,
        corFundo: "rgba(138, 124, 99, 1)",
        like: false
    }
]



//Declarando Variáveis e Eventos DOM
let musicaAtual = Math.floor(Math.random() * 5)
const root = document.documentElement
const imagem = document.querySelector("img")
const nomeMusica = document.querySelector("#container-nomes h1")
const nomeBanda = document.querySelector("#container-nomes p")
const song = document.getElementById("audio")
const botaoAnterior = document.querySelector(".bi-skip-start-fill")
const botaoPlay = document.querySelector(".bi-play-circle-fill")
const botaoProximo = document.querySelector(".bi-skip-end-fill")
const botaoLike = document.querySelector("#botaoLike")



//Definindo Funções

//Função que altera as informações da música
function alterarInformacoes() {
    imagem.src = listaMusicas[musicaAtual].LinkImagem
    nomeMusica.textContent = listaMusicas[musicaAtual].nome
    nomeBanda.textContent = listaMusicas[musicaAtual].banda
    root.style.setProperty("--cor-principal", `${listaMusicas[musicaAtual].corFundo}`)
    song.src = listaMusicas[musicaAtual].linkAudio
    if (listaMusicas[musicaAtual].like) {
        botaoLike.className = "bi bi-heart-fill sem-destaque"
        botaoLike.style.opacity = 1
    }
    else {
        botaoLike.className = "bi bi-heart sem-destaque"
        botaoLike.style.opacity = 0.6
    }
}

//Função para avançar a música
function avancarMusica() {
    musicaAtual += 1
    
    //Caso estiver na última música e o usuário clicar para avançar, a lista irá para a primeira música
    if (musicaAtual >= listaMusicas.length) {
        musicaAtual = 0
    }
    
    alterarInformacoes()
    
    if (botaoPlay.className === "bi bi-pause-circle-fill botao-grande") {
        song.play()
    }
}

//Função para voltar a música
function voltarMusica() {
    musicaAtual -= 1

    //Caso estiver na primeira música e o usuário clicar para voltar, a lista irá para a última música
    if (musicaAtual <= -1) {
        musicaAtual = listaMusicas.length - 1
    }

    alterarInformacoes()

    if (botaoPlay.className === "bi bi-pause-circle-fill botao-grande") {
        song.play()
    }
}

//Função para curtir a música
function curtirMusica() {
    //Se o botão não estiver preenchido, então o preenche
    if (!listaMusicas[musicaAtual].like) {
        listaMusicas[musicaAtual].like = true
        botaoLike.className = "bi bi-heart-fill sem-destaque"
        botaoLike.style.opacity = 1
        return
    }

    //Se o botão estiver marcado, desmarca
    listaMusicas[musicaAtual].like = false
    botaoLike.className = "bi bi-heart sem-destaque"
    botaoLike.style.opacity = 0.6
}

//Função para pausar e despausar música
function pausarDespausarMusica() {
    //Se o botão de play for clicado e estiver pausado, então ele é despausado e a música começa a tocar
    //Se o botão não estiver pausado, então ele pausa
    if (botaoPlay.className === "bi bi-play-circle-fill botao-grande"){
        botaoPlay.className = "bi bi-pause-circle-fill botao-grande"
        song.play()
        return
    }
    botaoPlay.className = "bi bi-play-circle-fill botao-grande"
    song.pause()
}



//Adicionando eventos

//Botão de like
botaoLike.addEventListener("click", curtirMusica)

//Botão para voltar música
botaoAnterior.addEventListener("click", voltarMusica)

//Botão Play/Pause
botaoPlay.addEventListener("click", pausarDespausarMusica)

//Botão avançar música
botaoProximo.addEventListener("click", avancarMusica)

//Avançar para próxima musica quando um audio termina
song.addEventListener("ended", avancarMusica)


//Chama a função para alterar as informações na primeira vez que o site é carregado.
alterarInformacoes()