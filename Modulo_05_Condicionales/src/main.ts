import "./style.css";

let currentScore: number = 0;
let msg:string = "";

const puntuacion = document.getElementById("puntuacion");

//------------------------------- 
// Variables para la parte extra
//-------------------------------

let extraCard: number = 0;
let extraScore: number = 0;
let puntuacionVirtual: number = 0;


//-----------
// FUNCIONES
//-----------

//-------------------------------------------------------------------------------------------------------
// Esta función devuelve un número entero entre 1 y 10, ambos incluidos.
// Si el número generado es mayor de 7, se incrementa en 2, para simular sota(10), caballo(11) y rey(12).
// Y guarda el valor generado en la variable numCard.
//-------------------------------------------------------------------------------------------------------
const getCardNumber = (): number => {
    let numCard: number;
    numCard = Math.floor((Math.random() * 10) + 1); 
    if (numCard > 7) {
      numCard += 2 
    }
    return numCard;
  }

//----------------------------------------------------------------------------------------------------
// Esta función actualiza el valor de la variable currentScore, según el valor de la variable numCard.
//----------------------------------------------------------------------------------------------------
const updateCurrentScore = (numCard: number) => {
    switch (numCard) {
        case 1:
            currentScore += 1;
            break;
        case 2:
            currentScore += 2;
            break;
        case 3:
            currentScore += 3;
            break;
        case 4:
            currentScore += 4;
            break;
        case 5:
            currentScore += 5;
            break;
        case 6:
            currentScore += 6;
            break;
        case 7:
            currentScore += 7;
            break;
        default:
            currentScore += 0.5;
    }
}

//---------------------------------------------------
// Esta función pinta en el DOM la puntuación actual.
//---------------------------------------------------
const showScore = (currentScore: number) => {
    if (puntuacion !== null && puntuacion !== undefined &&
        puntuacion instanceof HTMLElement) {
        puntuacion.innerHTML = `Puntuación actual: ${currentScore}`;
    }
}

//---------------------------------------------------------------------------------------------
// Esta función guarda un texto en la variable msg, según sea el valor de la puntuación actual.
//---------------------------------------------------------------------------------------------
const message = (score: number) => {
  
    if (score < 4) {
        msg = "Has sido muy conservador"
    }
    else if (score >= 4 && score <= 5) {
        msg = "Te ha entrado el canguelo eh?"
    }
    else if (score > 5 && score <= 7) {
        msg = "Casi casi..."
    }
    else if (score === 7.5) {
        msg = "¡Lo has clavado! ¡Enhorabuena! "
    }
    else {
        msg = "GAME OVER 💥"
    }
  
}
//----------------------------------------------------------------------------------
// Esta función retorna un string (url), según sea el valor de la variable numCard.
//----------------------------------------------------------------------------------
const getSrcNewCard = (carta : number) : string => {
    switch (carta) {
        case 1:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
        case 2:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
        case 3:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
        case 4:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
        case 5:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
        case 6:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
        case 7:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
        case 10:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
        case 11:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
        case 12:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
        default:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
    }
}

//-----------------------------------------------------------------
// Esta función muestra/oculta botones según la puntuación actual. 
//-----------------------------------------------------------------
const checkCurrentScore = (currentScore:number) => {
    
    if (currentScore > 0 && currentScore < 7.5) {
        
        if (btnGetCard!== null && btnGetCard!== undefined && btnGetCard instanceof HTMLButtonElement && 
            btnNewGame !== null && btnNewGame !== undefined && btnNewGame instanceof HTMLElement &&
            btnStopCard!== null && btnStopCard!== undefined && btnStopCard instanceof HTMLButtonElement &&
            btnCheckWhat !== null && btnCheckWhat !== undefined && btnCheckWhat instanceof HTMLElement) {
                btnGetCard.style.display = "block";
                btnNewGame.style.display = "none";
                btnStopCard.style.display = "block";
                btnCheckWhat.style.display = "none";
        }
    }
    
    if (currentScore >= 7.5) {
        message(currentScore);
        //msg = "GAME OVER";
        pintarMensaje(msg);

        if (btnGetCard!== null && btnGetCard!== undefined && btnGetCard instanceof HTMLButtonElement && 
            btnNewGame !== null && btnNewGame !== undefined && btnNewGame instanceof HTMLElement &&
            btnStopCard!== null && btnStopCard!== undefined && btnStopCard instanceof HTMLButtonElement &&
            btnCheckWhat !== null && btnCheckWhat !== undefined && btnCheckWhat instanceof HTMLElement) {
                btnGetCard.style.display = "none";
                btnNewGame.style.display = "block";
                btnStopCard.style.display = "none";
                btnCheckWhat.style.display = "none";
        }
    }
}

//-------------------------------------------
// Esta función muestra el mensaje en el DOM
//-------------------------------------------
const pintarMensaje = (msg: string) => {
    const msgElm = document.getElementById("mensaje-resultado");
    if (msgElm !== null && msgElm !== undefined && msgElm instanceof HTMLElement){
        msgElm.innerHTML = msg
    }
}

//------------------------------------------------
// Esta función pinta la carta que sale en el DOM
//------------------------------------------------
const pintarCarta = (srcCard: string) => {
    const img = document.createElement("img");
    img.src = srcCard;
    const cartas = document.getElementById("cartas-jugadas");
    if(cartas !== null && cartas !== undefined && cartas instanceof HTMLElement){
        cartas.appendChild(img);
    }
}

//---------------------------------------------------------------------------------------------------
// Esta función restea el valor de las variables globales, y pinta el resultado y el mensaje y borra
// las cartas que han salido. También oculta/muestra los botones. ¡¡¡DEMASIADAS RESPONSABILIDADES!!!
//---------------------------------------------------------------------------------------------------
const resetAll = () => {
    currentScore = 0;
    msg = "";

    extraCard = 0;
    extraScore = 0;
    puntuacionVirtual = 0;

    showScore(currentScore);
    pintarMensaje(msg);
    const cartasJugadas = document.getElementById("cartas-jugadas");
    if (cartasJugadas !== null && cartasJugadas !== undefined && cartasJugadas instanceof HTMLElement){
        while (cartasJugadas.firstChild) {
            cartasJugadas.removeChild(cartasJugadas.firstChild);
          }
    }
    if (btnGetCard!== null && btnGetCard!== undefined && btnGetCard instanceof HTMLButtonElement && 
        btnNewGame !== null && btnNewGame !== undefined && btnNewGame instanceof HTMLElement &&
        btnStopCard!== null && btnStopCard!== undefined && btnStopCard instanceof HTMLButtonElement &&
        btnCheckWhat !== null && btnCheckWhat !== undefined && btnCheckWhat instanceof HTMLElement) {
            btnGetCard.style.display = "block";
            btnNewGame.style.display = "none";
            btnStopCard.style.display = "none";
            btnCheckWhat.style.display = "none";
    }
}

//---------------------------------------------------------------------------------------------------------------
// Esta función controla la mayoría de la lógica. Genera el número, la url, pinta la carta, actualiza puntuación
//---------------------------------------------------------------------------------------------------------------
const newCard = () => {
    let numNewCard: number = 0;
    let newCardSrc: string = "";
    
    numNewCard = getCardNumber(); // Se genera un numero: 1, 2, 3, 4, 5, 6, 7, 10, 11, 12
    newCardSrc = getSrcNewCard(numNewCard); // Se genera la url de la imagen
    
    pintarCarta(newCardSrc); 
    updateCurrentScore(numNewCard); 
    showScore(currentScore);
    checkCurrentScore(currentScore);
}

//--------------------------------------------------------------------------------------
// Esta función muestra el mensaje cuando el jugador se planta. Y controla los botones.
//--------------------------------------------------------------------------------------
const noMoreCard = ()=> {
    message(currentScore);
    pintarMensaje(msg);
    if (btnGetCard!== null && btnGetCard!== undefined && btnGetCard instanceof HTMLButtonElement && 
        btnNewGame !== null && btnNewGame !== undefined && btnNewGame instanceof HTMLElement &&
        btnStopCard!== null && btnStopCard!== undefined && btnStopCard instanceof HTMLButtonElement &&
        btnCheckWhat !== null && btnCheckWhat !== undefined && btnCheckWhat instanceof HTMLElement) {
            btnGetCard.style.display = "none";
            btnNewGame.style.display = "block";
            btnStopCard.style.display = "none";
            btnCheckWhat.style.display = "block";
    }
}

//----------------------------------------
// FUNCIONALIDAD PARA ¿QUE HUBIERA PASADO?
//-----------------------------------------

const updateExtraScore = (numCard: number) => {
    switch (numCard) {
        case 1:
            extraScore += 1;
            break;
        case 2:
            extraScore += 2;
            break;
        case 3:
            extraScore += 3;
            break;
        case 4:
            extraScore += 4;
            break;
        case 5:
            extraScore += 5;
            break;
        case 6:
            extraScore += 6;
            break;
        case 7:
            extraScore += 7;
            break;
        default:
            extraScore += 0.5;
    }
}

const pintarCartaExtra = (srcCard: string) => {
    const img = document.createElement("img");
    img.src = srcCard;
    img.classList.add("filter");
    const cartas = document.getElementById("cartas-jugadas");
    if(cartas !== null && cartas !== undefined && cartas instanceof HTMLElement){
        cartas.appendChild(img);
    }
}

const checkExtraScore = (virtualScore:number) => {
    if (virtualScore >= 7.5) {
        if (btnGetCard!== null && btnGetCard!== undefined && btnGetCard instanceof HTMLButtonElement && 
            btnNewGame !== null && btnNewGame !== undefined && btnNewGame instanceof HTMLElement &&
            btnStopCard!== null && btnStopCard!== undefined && btnStopCard instanceof HTMLButtonElement &&
            btnCheckWhat !== null && btnCheckWhat !== undefined && btnCheckWhat instanceof HTMLElement) {
                btnGetCard.style.display = "none";
                btnNewGame.style.display = "block";
                btnStopCard.style.display = "none";
                btnCheckWhat.style.display = "none";
        }
    }
}


const newExtraCard = () => {
    let numNewExtraCard: number = 0;
    let newExtraCardSrc: string = "";
    
    numNewExtraCard = getCardNumber(); // Se genera un numero: 1, 2, 3, 4, 5, 6, 7, 10, 11, 12
    newExtraCardSrc = getSrcNewCard(numNewExtraCard); // Se genera la url de la imagen
    
    pintarCartaExtra(newExtraCardSrc);
    updateExtraScore(numNewExtraCard);
    
    extraCard += 1;
    puntuacionVirtual = extraScore + currentScore;
    msg = `Con ${extraCard } carta más habrias tenido una puntuacion de ${puntuacionVirtual}`
   
    pintarMensaje(msg);
    checkExtraScore(puntuacionVirtual);
}

//------------------------
// MANEJADORES DE EVENTOS
//------------------------


const btnGetCard= document.getElementById("btnPlay");
if (btnGetCard!== null && btnGetCard!== undefined && 
    btnGetCard instanceof HTMLButtonElement) {
      btnGetCard.addEventListener("click", newCard);
}
 
const btnNewGame = document.getElementById("btnNewGame");
if (btnNewGame !== null && btnNewGame !== undefined && btnNewGame instanceof HTMLElement){
    btnNewGame.addEventListener("click", resetAll);
}

const btnStopCard= document.getElementById("btnStop");
if (btnStopCard!== null && btnStopCard!== undefined && 
    btnStopCard instanceof HTMLButtonElement) {
      btnStopCard.addEventListener("click", noMoreCard);
}

const btnCheckWhat = document.getElementById("btnCheckWhat");
if (btnCheckWhat !== null && btnCheckWhat !== undefined && btnCheckWhat instanceof HTMLElement){
    btnCheckWhat.addEventListener("click", newExtraCard);
}



//-----------------------------------
// Esta función inicia la aplicación
//-----------------------------------


const init = () => {
    resetAll();
}

init();