//#region DECLARACION DE VARIABLES CONSTANTES

const seccionAtaque = document.getElementById('seleccionar-ataque');
const botonMascotaJugador = document.getElementById('boton-mascota');
const seccionReiniciar = document.getElementById('reiniciar');

const seccionMascota = document.getElementById('seleccionar-mascota');
const spanMascotaJugador = document.getElementById('mascota-jugador');

const spanMascotaEnemigo = document.getElementById('mascota-enemigo');   

const spanVidasJugador = document.getElementById('vidas-jugador');
const spanVidasEnemigo = document.getElementById('vidas-enemigo');  

const seccionMensajes = document.getElementById('resultado');
const ataquesDelJugador = document.getElementById('ataques-del-jugador');
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo');
const contenedorTarjetas = document.getElementById('contenedor-tarjetas');
const contenedorAtaques = document.getElementById('contenedor-ataques');

const seccionVerMapa = document.getElementById('ver-mapa');
const mapa = document.getElementById('mapa');

const HIPODOGE_ATAQUES = [
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' }
]
const CAPIPEPO_ATAQUES = [
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' }
]
const RATIGUEYA_ATAQUES = [
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' }
]
const TUCAPALMA_ATAQUES = [
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🔥', id: 'boton-fuego' }
]
const PYDOS_ATAQUES = [
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' }
]
const LANGOSTELVIS_ATAQUES = [
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' }
]

//#endregion

//#region CLASE MOKEPON

class Mokepon {
    constructor(nombre, foto, vida, fotoMapa, id = null) {
        this.id = id;
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = [];
        this.ancho = 40;
        this.alto = 40;
        this.x = aleatorio(0, mapa.width - this.ancho);
        this.y = aleatorio(0, mapa.height - this.alto);
        this.mapaFoto = new Image();
        this.mapaFoto.src = fotoMapa;
        this.velocidadX = 0;
        this.velocidadY = 0;
    }

    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        );
    }
}

//#endregion

//#region DECLARACION DE VARIABLES LET

let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5, './assets/hipodoge.png');
let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5, './assets/capipepo.png');
let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5, './assets/ratigueya.png');
let tucapalma = new Mokepon('Tucapalma', './assets/mokepons_mokepon_tucapalma_attack.png', 5, './assets/tucapalma.png');
let pydos = new Mokepon('Pydos', './assets/mokepons_mokepon_pydos_attack.png', 5, './assets/pydos.png');
let langostelvis = new Mokepon('Langostelvis', './assets/mokepons_mokepon_langostelvis_attack.png', 5, './assets/langostelvis.png');

let jugadorId = null;
let enemigoId = null;
let mokepones = [];
let mokeponesEnemigos = [];
let opcionDeMokepones;
let inputHipodoge;
let inputCapipepo;
let inputRatigueya;
let inputTucapalma;
let inputPydos;
let inputLangostelvis;
let mascotaJugador;
let mascotaJugadorObjeto;
let ataquesMokepon;
let ataquesMokeponEnemigo = [];
let ataqueJugador = [];
let ataqueEnemigo = [];
let indexAtaqueJugador = [];
let indexAtaqueEnemigo = [];
let botonFuego;
let botonAgua;
let botonTierra;
let botones = [];
let resultadoJugador = "";
let resultadoEnemigo = "";
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let vidasJugador = 3;
let vidasEnemigo = 3;
let lienzo = mapa.getContext("2d");
let intervalo;
let mapabackground = new Image();
mapabackground.src = './assets/mokemap.png';
let alturaQueBuscamos;
let anchoDelMapa = window.innerWidth - 20;
let servidorURL = '';
const anchoMaximoDelMapa = 350;

if(anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa - 20;
}

alturaQueBuscamos = anchoDelMapa * 600 / 800;

mapa.width = anchoDelMapa;
mapa.height = alturaQueBuscamos;

//#endregion

//#region ATAQUES DE LAS MASCOTAS

//#region MASCOTA JUGADOR

hipodoge.ataques.push(...HIPODOGE_ATAQUES)
capipepo.ataques.push(...CAPIPEPO_ATAQUES)
ratigueya.ataques.push(...RATIGUEYA_ATAQUES)
tucapalma.ataques.push(...TUCAPALMA_ATAQUES)
pydos.ataques.push(...PYDOS_ATAQUES)
langostelvis.ataques.push(...TUCAPALMA_ATAQUES)

//#endregion

//#region MASCOTA ENEMIGO
// hipodogeEnemigo.ataques.push(...HIPODOGE_ATAQUES)
// capipepoEnemigo.ataques.push(...CAPIPEPO_ATAQUES)
// ratigueyaEnemigo.ataques.push(...RATIGUEYA_ATAQUES)
// tucapalmaEnemigo.ataques.push(...TUCAPALMA_ATAQUES)
// pydosEnemigo.ataques.push(...PYDOS_ATAQUES)
// langostelvisEnemigo.ataques.push(...LANGOSTELVIS_ATAQUES)

//#endregion

mokepones.push(hipodoge, capipepo, ratigueya, tucapalma, pydos, langostelvis);

//#endregion

//#region FUNCIONES


// Primero obtenemos la IP desde el backend
function obtenerIpLocal(){  
    fetch('/api/ip')
    .then(res => res.json())
    .then(data => {
    console.log('IP obtenida del servidor:', data.ip);
    servidorURL = `http://${data.ip}:8080`;
  // iniciarJuego();
    })
}

function iniciarJuego(){    
    seccionAtaque.style.display = 'none';
    seccionReiniciar.style.display = 'none';
    seccionVerMapa.style.display = 'none';

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `;

        contenedorTarjetas.innerHTML += opcionDeMokepones;  

        inputHipodoge = document.getElementById('Hipodoge');
        inputCapipepo = document.getElementById('Capipepo');
        inputRatigueya = document.getElementById('Ratigueya');        
        inputTucapalma = document.getElementById('Tucapalma');
        inputPydos = document.getElementById('Pydos');
        inputLangostelvis = document.getElementById('Langostelvis');
    });
    
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);  
    seccionReiniciar.addEventListener('click', reiniciarJuego);

    unirseAlJuego();
}

function unirseAlJuego() {  
    obtenerIpLocal()  
    fetch(`${servidorURL}/unirse`)
        .then(function (res){
            console.log(res)
            if (res.ok){
                res.text()
                    .then(function (respuesta) {
                        console.log(respuesta);
                        jugadorId = respuesta;
                    }) 
            }
        })
}

function seleccionarMascotaJugador(){    
    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = inputHipodoge.id;
        mascotaJugador = inputHipodoge.id;
    }else if(inputCapipepo.checked){        
        spanMascotaJugador.innerHTML = inputCapipepo.id;
        mascotaJugador = inputCapipepo.id;
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id;
        mascotaJugador = inputRatigueya.id;
    }else if(inputTucapalma.checked){
        spanMascotaJugador.innerHTML = inputTucapalma.id;
        mascotaJugador = inputTucapalma.id;
    }else if(inputPydos.checked){
        spanMascotaJugador.innerHTML = inputPydos.id;
        mascotaJugador = inputPydos.id;
    }else if(inputLangostelvis.checked){
        spanMascotaJugador.innerHTML = inputLangostelvis.id;
        mascotaJugador = inputLangostelvis.id;
    }else {
        alert('Selecciona una mascota');
        return;
    }    
    
    seccionMascota.style.display = 'none';
    seleccionarMokepon(mascotaJugador);

    extraerAtaques(mascotaJugador);
    seccionVerMapa.style.display = 'flex';
    iniciarMapa();
}

function seleccionarMokepon(mascotaJugador) {
    obtenerIpLocal()
    fetch(`${servidorURL}/mokepon/${jugadorId}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mokepon: mascotaJugador
        })
    })
}

function seleccionarMascotaEnemigo(enemigo){
    // let mascotaAleatorio = aleatorio(0,mokepones.length - 1);

    //obtiene el nombre de la mascota del enemigo de forma aleatoria
    spanMascotaEnemigo.innerHTML = enemigo.nombre;
    ataquesMokeponEnemigo = enemigo.ataques;
    secuenciaAtaque();
}

function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques);
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>        
        `

        contenedorAtaques.innerHTML += ataquesMokepon;
    })
    botonFuego = document.getElementById('boton-fuego');
    botonAgua = document.getElementById('boton-agua');
    botonTierra = document.getElementById('boton-tierra');

    botones = document.querySelectorAll('.BAtaque');
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e)=> {
            if(e.target.textContent === '🔥'){
                ataqueJugador.push('FUEGO');
                console.log(ataqueJugador);
                boton.style.background = '#112f58';
                boton.disabled = true;
            } else if (e.target.textContent === '💧'){
                ataqueJugador.push('AGUA');
                console.log(ataqueJugador);
                boton.style.background = '#112f58';
                boton.disabled = true;
            } else {
                ataqueJugador.push('TIERRA');
                console.log(ataqueJugador);
                boton.style.background = '#112f58';
                boton.disabled = true;
            }
            if (ataqueJugador.length === 5) {
                enviarAtaques();                
            }
        })
    })
}

function enviarAtaques() {
    obtenerIpLocal()
    fetch(`${servidorURL}/mokepon/${jugadorId}/ataques`, {
        method: "post",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            ataques: ataqueJugador
        })
    })

    intervalo = setInterval(obtenerAtaques, 50)
}

function obtenerAtaques(){
    obtenerIpLocal()
    fetch(`${servidorURL}/mokepon/${enemigoId}/ataques`)
        .then(function (res) {
            if (res.ok) {
                res.json()
                    .then(function ({ ataques }) {
                        if (ataques.length === 5) {
                            ataqueEnemigo = ataques
                            combate()
                        }
                    })
            }
        })
    
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0, mokepones.length - 1)

    if(ataqueAleatorio == 0 || ataqueAleatorio == 1){
        ataqueEnemigo.push('FUEGO');
    } else if (ataqueAleatorio == 2 || ataqueAleatorio == 3){
        ataqueEnemigo.push('AGUA');
    } else {        
        ataqueEnemigo.push('TIERRA');
    } 
    console.log(ataqueEnemigo);
    iniciarPelea();
}

function iniciarPelea(){
    if (ataqueJugador.length === 5) {
        combate();
    }
}

function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador];
    indexAtaqueEnemigo = ataqueEnemigo[enemigo];
}

function combate(){
    clearInterval(intervalo)

    for (let i = 0; i < ataqueJugador.length; i++) {
        if (ataqueJugador[i] === ataqueEnemigo[i]) {
            indexAmbosOponentes(i, i);
            crearMensaje("EMPATE 🤝");
        } else if ((ataqueJugador[i] === 'FUEGO' && ataqueEnemigo[i] === 'TIERRA') || (ataqueJugador[i] === 'AGUA' && ataqueEnemigo[i] === 'FUEGO') || (ataqueJugador[i] === 'TIERRA' && ataqueEnemigo[i] === 'AGUA')) {
            indexAmbosOponentes(i, i);
            crearMensaje("GANASTE 🏆");
            victoriasJugador++;
            spanVidasJugador.innerHTML = victoriasJugador;
        } else {
            indexAmbosOponentes(i, i);
            crearMensaje("PERDISTE 😣");
            victoriasEnemigo++;
            spanVidasEnemigo.innerHTML = victoriasEnemigo;
        }
        
    }

    revisarVidas();
}

function revisarVidas(){
    if(victoriasJugador === victoriasEnemigo){
        crearMensajeFinal('ESTO FUE UN EMPATE 🤝');
    } else if(victoriasJugador > victoriasEnemigo){
        crearMensajeFinal('FELICITACIONES! GANASTE 🏆');
    } else {
        crearMensajeFinal("OH NO, PERDISTE 😣");
    }
}

function crearMensaje(resultado) {
    let nuevoAtaqueDelJugador = document.createElement('p');
    let nuevoAtaqueDelEnemigo = document.createElement('p');

    if (resultado == "EMPATE 🤝") {
        resultadoJugador = " 🟡";
        resultadoEnemigo = " 🟡";
    } else if (resultado == "GANASTE 🏆"){
        resultadoJugador = " ✅";
        resultadoEnemigo = " ❌";
    } else {
        resultadoJugador = " ❌";
        resultadoEnemigo = " ✅";        
    }

    seccionMensajes.innerHTML = resultado;
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador + resultadoJugador;
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo + resultadoEnemigo;

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
    seccionMensajes.innerHTML = resultadoFinal;
    seccionReiniciar.style.display = 'block';
}

function reiniciarJuego(){
    location.reload();
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function pintarCanvas() {  

    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX;
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY;
    lienzo.clearRect(0, 0, mapa.width, mapa.height);
    lienzo.drawImage(
        mapabackground,
        0,
        0,
        mapa.width,
        mapa.height
    );
    mascotaJugadorObjeto.pintarMokepon();

    enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y);

    mokeponesEnemigos.forEach(function (mokepon) {
        mokepon.pintarMokepon();
        revisarColision(mokepon)
    })
}

function enviarPosicion(x, y) {
    obtenerIpLocal()
    fetch(`${servidorURL}/mokepon/${jugadorId}/posicion`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })    
    .then(function (res) {
        if (res.ok) {
            res.json()
                .then(function ({ enemigos }) {
                    console.log(enemigos);
                    mokeponesEnemigos = enemigos.map(function (enemigo) {                        
                        let mokeponEnemigo = null;
                        const mokeponNombre = enemigo.mokepon.nombre || ""
                        if (mokeponNombre === "Hipodoge") {
                            mokeponEnemigo = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5, './assets/hipodoge.png', enemigo.id);
                        }else if(mokeponNombre === "Capipepo"){
                            mokeponEnemigo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5, './assets/capipepo.png', enemigo.id);
                        }else if(mokeponNombre === "Ratigueya"){
                            mokeponEnemigo = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5, './assets/ratigueya.png', enemigo.id);
                        }else if(mokeponNombre === "Tucapalma"){
                            mokeponEnemigo = new Mokepon('Tucapalma', './assets/mokepons_mokepon_tucapalma_attack.png', 5, './assets/tucapalma.png', enemigo.id);
                        }else if(mokeponNombre === "Pydos"){
                            mokeponEnemigo = new Mokepon('Pydos', './assets/mokepons_mokepon_pydos_attack.png', 5, './assets/pydos.png', enemigo.id);
                        }else if(mokeponNombre === "Langostelvis"){
                            mokeponEnemigo = new Mokepon('Langostelvis', './assets/mokepons_mokepon_langostelvis_attack.png', 5, './assets/langostelvis.png', enemigo.id);
                        }

                        mokeponEnemigo.x = enemigo.x;
                        mokeponEnemigo.y = enemigo.y;
                        
                        return mokeponEnemigo
                    })
                })
        }
    })
}

function moverDerecha() {
    mascotaJugadorObjeto.velocidadX = 5;
}

function moverIzquierda() {
    mascotaJugadorObjeto.velocidadX = -5;
}

function moverArriba() {
    mascotaJugadorObjeto.velocidadY = -5;
}

function moverAbajo() {
    mascotaJugadorObjeto.velocidadY = 5;
    // capipepo.y = capipepo.y + 5;
    // pintarPersonaje();
}

function detenerMovimiento(){
    mascotaJugadorObjeto.velocidadX = 0;
    mascotaJugadorObjeto.velocidadY = 0;
}

function sePresionoUnaTecla(event){
    switch (event.key) {
        case 'ArrowUp':
            moverArriba();
            break;
        case 'ArrowDown':
            moverAbajo();
            break;        
        case 'ArrowLeft':
            moverIzquierda();
            break;
        case 'ArrowRight':
            moverDerecha();
            break;
        default:
            break
    }
}

function iniciarMapa() { 
    mapa.width = 320;   
    mapa.height = 240;
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador);
    intervalo = setInterval(pintarCanvas, 50);
    window.addEventListener('keydown', sePresionoUnaTecla);
    window.addEventListener('keyup', detenerMovimiento);
}

function obtenerObjetoMascota(){
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones[i];
        }
    }
}

function revisarColision(enemigo) {
    if (enemigo.x === undefined || enemigo.y === undefined) {
        return;
    }

    const arribaEnemigo = enemigo.y;
    const abajoEnemigo = enemigo.y + enemigo.alto;
    const derechaEnemigo = enemigo.x + enemigo.ancho;
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = 
        mascotaJugadorObjeto.y + 25;
    const abajoMascota = 
        mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto -25;
    const derechaMascota = 
        mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho -25;
    const izquierdaMascota = 
        mascotaJugadorObjeto.x + 25;

    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return
    } 

    detenerMovimiento();
    clearInterval(intervalo);

    enemigoId = enemigo.id;
    seccionAtaque.style.display = 'flex';
    seccionVerMapa.style.display = 'none';
    seleccionarMascotaEnemigo(enemigo);
}


//#endregion

window.addEventListener('load', iniciarJuego);