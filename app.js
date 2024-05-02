let listadenumerosorteados = [];
let numerosecreto =  numeroSortear();
let tentativas = 0;
function exibirTextoTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirmensageminicial() {
    exibirTextoTela("h1","jogo de sorteio");
    exibirTextoTela("p","chute um numero de 1 a 10");
    responsiveVoice.speak(texto,"Brazilian Portugueses Female",{rate:1.2});
    
}
exibirmensageminicial();



function verificarChute(){
    let chute = document.querySelector("input").value;
    tentativas++; 
    
    
    if(chute > numerosecreto){
        exibirTextoTela("p","digite um numero menor ");
        limparcampo();
    }
    else if(chute < numerosecreto){
        exibirTextoTela("p","digite um numero maior");
        limparcampo();
    }
    else if(chute == numerosecreto && tentativas == 1){
        exibirTextoTela("p","parabéns você acertou o numero secreto com " + tentativas +" tentativa");
        document.getElementById("reiniciar").removeAttribute("disabled");
        

    }
    else {
        exibirTextoTela("p","parabéns você acertou o numero secreto com " + tentativas +" tentativas");
        document.getElementById("reiniciar").removeAttribute("disabled");
        

    }
    
}

function numeroSortear(){
     let numeroescolhido = parseInt(Math.random() * 10 + 1);
        if(listadenumerosorteados.includes(numeroescolhido)){
            return numeroSortear();

        }
        else {
            listadenumerosorteados.push(numeroescolhido);
            return numeroescolhido;
        }
}
function limparcampo(){
    let chute = document.querySelector("input");
    chute.value = " ";
}
function reiniciarJogo(){
    numerosecreto =  numeroSortear();
    tentativas = 0;
    limparcampo();
    exibirmensageminicial()
    document.getElementById("reiniciar").setAttribute("disabled",true);
    
    
}