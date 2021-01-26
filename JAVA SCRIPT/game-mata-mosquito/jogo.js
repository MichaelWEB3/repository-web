function posicaoRandomica() {

    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
    }

    var altura = 0
    var largura = 0

    function ajusta() {
        altura = window.innerHeight;
        largura = window.innerWidth;

    }

    ajusta();

    //console.log(altura, largura)

    var posicaoY = Math.floor(Math.random() * largura) - 90
    var posicaoX = Math.floor(Math.random() * altura) - 90

    console.log(posicaoX, posicaoY)

    posicaoY = posicaoY < 0 ? 0 : posicaoY
    posicaoX = posicaoX < 0 ? 0 : posicaoX

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/imagens/mosca.png'
    mosquito.className = `mosquito${tamanhaAleatorio()}`
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    document.body.appendChild(mosquito)

    tamanhaAleatorio();
    var contador = 0
    var x = setInterval(function() {



    }, 1000);

}


var contador = 0
var x = setInterval(function() {


    posicaoRandomica()
}, 1000);

function tamanhaAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    return classe

}