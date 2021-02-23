/**
 * Controle de lâmpada com JS
 * @autor Michel Lazzarin
 */

function on(){
    document.getElementById("lamp").src = "images/ON.jpg";
}

function off(){
    document.getElementById("lamp").src = "images/OFF.jpg";
}

function blink(){
    var intervalo = 0
    var contador = 0
    while(contador < 10){
        intervalo += 300
        setTimeout("document.getElementById('lamp').src='images/ON.jpg'",intervalo)
        intervalo += 300
        setTimeout("document.getElementById('lamp').src='images/OFF.jpg'",intervalo)
        contador++
    }
}