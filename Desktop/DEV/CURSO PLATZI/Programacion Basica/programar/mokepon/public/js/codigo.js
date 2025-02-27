//Se obtiene el numero aleatorio
function aleatorio(max,min){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//Se establecen las posibles jugadas
function eleccion(jugada){
    if(jugada == 1) {
        return("🥌");
    } else if(jugada == 2) {
        return("🧻");
    } else if(jugada == 3) {
        return("✂");
    } else {
        return("Nulo");
    }
}

//COMBATE
function combate(pc, jugador){          
    if(pc == jugador){
        alert("EMPATE");
        empates++;
    } else if( (jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)) {
        alert("GANASTE");
        triunfos++;
    } else {
        alert("PERDISTE");
        perdidas++;
    }
}

//1 es piedra, 2 es papel, 3 es tijera
let jugador = 0;
let pc = 0;
let triunfos = 0;
let perdidas = 0;
let empates = 0

while (triunfos < 3 && perdidas < 3){

    pc = aleatorio(1,3);
    jugador = prompt("Elije: 1 para piedra, 2 para papel, 3 para tijera");
    alert( "Tu juegas " + eleccion(jugador) );
    alert( "El PC juega " + eleccion(pc) );

    combate(pc,jugador);

}

alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces. Empataste "+ empates + " veces.")

