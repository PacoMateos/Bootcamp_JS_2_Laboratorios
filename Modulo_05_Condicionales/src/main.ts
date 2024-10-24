import "./style.css";

let currentScore: number = 0;

//------------------------------- 
// Variables para la parte extra
//-------------------------------

let extraCardCounter: number = 0;
let extraScore: number = 0;
let puntuacionVirtual: number = 0;

//-----------
// FUNCIONES
//-----------

// 1. Esta función devuelve un número entero entre 1 y 10, ambos incluidos.
const makeRandomNumber = (): number => {
	return Math.floor((Math.random() * 10) + 1);
}

// 2. Esta función devuelve un número de valor de carta, según el número aleatorio que se le pase.
const makeCardNumber = (randomNumber: number): number => {
	if (randomNumber > 7) {
		return randomNumber + 2
	}
	return randomNumber;
}

// 3. Esta función devuelve el valor de carta actual.
const makeCardValue = (cardNumber: number): number => {
	if (cardNumber > 7) {
		return 0.5
	}
	return cardNumber
}

// 4. Esta función retorna un string (url), según sea el valor de la variable numCard.
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

// 5. Esta función pinta la carta que sale en el DOM
const showCard = (srcCard: string) => {
	const img = document.createElement("img");
	img.src = srcCard;
	const cartas = document.getElementById("cartas-jugadas");
	if(cartas !== null && cartas !== undefined && cartas instanceof HTMLElement){
			cartas.appendChild(img);
	}
}

// 6. Esta función actualiza el marcador.
const updateCurrentScore = (cardValue: number): void => {
    currentScore = currentScore + cardValue;
}

// 7. Esta función pinta en el DOM la puntuación actual.
const showScore = (currentScore: number) => {
	const puntuacion = document.getElementById("puntuacion");
    if (puntuacion !== null && puntuacion !== undefined && puntuacion instanceof HTMLElement) {
        puntuacion.innerHTML = `Puntuación actual: ${currentScore}`;
    }
}

// 8. Esta función retorna una mensaje en función de la puntuación
const makeMessage = (score: number): string => {
  let msg: string = "";
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
 return msg;
}

// 9. Esta función pinta el mensaje en el DOM
const showMessage = (msg: string = "") => {
	const msgElm = document.getElementById("mensaje-resultado");
	if (msgElm !== null && msgElm !== undefined && msgElm instanceof HTMLElement){
			msgElm.innerHTML = msg
	}
}

// 10. Muestra/oculta botones según currentScore
const checkCurrentScore = (currentScore:number) => {
    
	if (currentScore > 0 && currentScore < 7.5) {
		buttonsVisibilityPlay();
	}
	
	if (currentScore === 7.5) {
		buttonsVisibilityWinOrLose();
	}
	
	if (currentScore >= 7.5) {
		const msg = makeMessage(currentScore);
		showMessage(msg);
		buttonsVisibilityWinOrLose();
	}
}

// 11. Borra las cartas del DOM
const removeCards = () => {
	const cartasJugadas = document.getElementById("cartas-jugadas");
    if (cartasJugadas !== null && cartasJugadas !== undefined && cartasJugadas instanceof HTMLElement){
        while (cartasJugadas.firstChild) {
            cartasJugadas.removeChild(cartasJugadas.firstChild);
          }
    }
}

//-------------------- 
// Buttons visibility
//--------------------
const buttonsVisibilityStart = () => {
	if (btnGetCard !== null && btnGetCard !== undefined && btnGetCard instanceof HTMLButtonElement &&
		btnNewGame !== null && btnNewGame !== undefined && btnNewGame instanceof HTMLElement &&
		btnStopCard !== null && btnStopCard !== undefined && btnStopCard instanceof HTMLButtonElement &&
		btnCheckWhat !== null && btnCheckWhat !== undefined && btnCheckWhat instanceof HTMLElement) {
		btnGetCard.style.display = "block";
		btnNewGame.style.display = "none";
		btnStopCard.style.display = "none";
		btnCheckWhat.style.display = "none";
	}
}
const buttonsVisibilityPlay = () => {
	if (btnGetCard !== null && btnGetCard !== undefined && btnGetCard instanceof HTMLButtonElement &&
		btnNewGame !== null && btnNewGame !== undefined && btnNewGame instanceof HTMLElement &&
		btnStopCard !== null && btnStopCard !== undefined && btnStopCard instanceof HTMLButtonElement &&
		btnCheckWhat !== null && btnCheckWhat !== undefined && btnCheckWhat instanceof HTMLElement) {
		btnGetCard.style.display = "block";
		btnNewGame.style.display = "none";
		btnStopCard.style.display = "block";
		btnCheckWhat.style.display = "none";
	}
}
const buttonsVisibilityWinOrLose = () => {
	if (btnGetCard !== null && btnGetCard !== undefined && btnGetCard instanceof HTMLButtonElement &&
		btnNewGame !== null && btnNewGame !== undefined && btnNewGame instanceof HTMLElement &&
		btnStopCard !== null && btnStopCard !== undefined && btnStopCard instanceof HTMLButtonElement &&
		btnCheckWhat !== null && btnCheckWhat !== undefined && btnCheckWhat instanceof HTMLElement) {
		btnGetCard.style.display = "none";
		btnNewGame.style.display = "block";
		btnStopCard.style.display = "none";
		btnCheckWhat.style.display = "none";
	}
}
const buttonsVisibilityStop = () => {
	if (btnGetCard !== null && btnGetCard !== undefined && btnGetCard instanceof HTMLButtonElement &&
		btnNewGame !== null && btnNewGame !== undefined && btnNewGame instanceof HTMLElement &&
		btnStopCard !== null && btnStopCard !== undefined && btnStopCard instanceof HTMLButtonElement &&
		btnCheckWhat !== null && btnCheckWhat !== undefined && btnCheckWhat instanceof HTMLElement) {
		btnGetCard.style.display = "none";
		btnNewGame.style.display = "block";
		btnStopCard.style.display = "none";
		btnCheckWhat.style.display = "block";
	}
}

//----------------------------------------
// FUNCIONALIDAD ADICIONAL PARA ¿QUE HUBIERA PASADO?
//-----------------------------------------

const updateExtraScore = (cardValue: number) => {
  extraScore = extraScore + cardValue 
	puntuacionVirtual = currentScore + extraScore;
}

const showExtraCard = (srcCard: string) => {
    const img = document.createElement("img");
    img.src = srcCard;
    img.classList.add("filter");
    const cartas = document.getElementById("cartas-jugadas");
    if(cartas !== null && cartas !== undefined && cartas instanceof HTMLElement){
        cartas.appendChild(img);
    }
}

const checkExtraScore = (virtualScore: number) => {

	if (virtualScore < 7.5) {
		buttonsVisibilityStop()
	}

	if (virtualScore >= 7.5) {
		buttonsVisibilityWinOrLose()
	}
}

const makeExtraMsg = (): string => {
	
	let msg: string = "";
	
	extraCardCounter += 1;
	
  msg = `Con ${extraCardCounter} ${(extraCardCounter === 1)? "carta": "cartas"} más, habrías obtenido una puntuación de ${puntuacionVirtual}`

	/* if (extraCard === 1){
		msg = `Con ${extraCard } carta más, habrias tenido una puntuacion de ${puntuacionVirtual}` 
	}
	else {
		msg = `Con ${extraCard } cartas más, habrias tenido una puntuacion de ${puntuacionVirtual}`
	} */
	
		console.log(`cartas extra: ${extraCardCounter}`)
	return msg;
}

//-----------------------------
// FUNCIONALIDAD NUEVA PARTIDA
//-----------------------------

const resetAll = () => {
  
	currentScore = 0;
	extraCardCounter = 0;
	extraScore = 0;
	puntuacionVirtual = 0;

	showScore(currentScore);
	showMessage();
	removeCards(); 
	buttonsVisibilityStart();

}

//--------------------------
// FUNCIONALIDAD DAME CARTA
//--------------------------

const newCard = () => {
	const randomNumber = makeRandomNumber();
	const cardNumber = makeCardNumber(randomNumber);
	const cardValue = makeCardValue(cardNumber);
	const cardUrl = getSrcNewCard(cardNumber);
	showCard(cardUrl);
	updateCurrentScore(cardValue); 
  showScore(currentScore);
  checkCurrentScore(currentScore);
}

//-------------------------
// FUNCIONALIDAD ME PLANTO
//-------------------------

const noMoreCard = ()=> {
    const msg = makeMessage(currentScore);
    showMessage(msg);
		buttonsVisibilityStop();
}

//------------------------------------
// FUNCIONALIDAD ¿QUE HUBIERA PASADO?
//------------------------------------

const newExtraCard = () => {
	
	const randomNumber = makeRandomNumber();
	const cardNumber = makeCardNumber(randomNumber);
	const cardValue = makeCardValue(cardNumber);
	const cardUrl = getSrcNewCard(cardNumber);
	showExtraCard(cardUrl);
  updateExtraScore(cardValue);
	checkExtraScore(puntuacionVirtual);
  const msg = makeExtraMsg();
	showMessage(msg);
}

//------------------------
// MANEJADORES DE EVENTOS
//------------------------

const btnGetCard = document.getElementById("btnPlay");
if (btnGetCard !== null && btnGetCard !== undefined &&
	btnGetCard instanceof HTMLButtonElement) {
	btnGetCard.addEventListener("click", newCard);
}

const btnNewGame = document.getElementById("btnNewGame");
if (btnNewGame !== null && btnNewGame !== undefined && btnNewGame instanceof HTMLElement) {
	btnNewGame.addEventListener("click", resetAll);
}

const btnStopCard = document.getElementById("btnStop");
if (btnStopCard !== null && btnStopCard !== undefined &&
	btnStopCard instanceof HTMLButtonElement) {
	btnStopCard.addEventListener("click", noMoreCard);
}

const btnCheckWhat = document.getElementById("btnCheckWhat");
if (btnCheckWhat !== null && btnCheckWhat !== undefined && btnCheckWhat instanceof HTMLElement) {
	btnCheckWhat.addEventListener("click", newExtraCard);
}


//-----------------------------------
// Esta función inicia la aplicación
//-----------------------------------

document.addEventListener("DOMContentLoaded", resetAll)

