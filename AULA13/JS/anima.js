function anima(){
    document.getElementById("anima").className += " anima"
}


var fotos = document.getElementsByClassName("some");
var fotoAtual = 1;
fotos[0].className="mostraFoto";

function mostraFoto(){
    if(fotoAtual == 0){
        fotos[2].className="escondeFoto";
        fotos[0].className="mostraFoto";
        fotoAtual++;
    }else if(fotoAtual==1){
        fotos[0].className="escondeFoto";
        fotos[1].className="mostraFoto";
        fotoAtual++;
    }else if(fotoAtual==2){
        fotos[1].className="escondeFoto";
        fotos[2].className="mostraFoto";
        fotoAtual=0;
    }
}