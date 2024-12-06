import "./style.css";

import { partida } from "./modelo";

import { 
	makeRandomNumber, 
	makeCardNumber, 
	makeCardValue, 
	getSrcNewCard, 
	updateCurrentScore, 
	makeMessage, 
	updateExtraScore, 
	makeExtraMsg,
	resetAllData 
} from "./motor"

//--------------
// DOM ELEMENTS
//--------------

export const btnGetCard = document.getElementById("btnPlay");
export const btnNewGame = document.getElementById("btnNewGame");
export const btnStopCard = document.getElementById("btnStop");
export const btnCheckWhat = document.getElementById("btnCheckWhat");

//----------- 
// FUNCTIONS
//-----------

export const showCard = (srcCard: string) => {
	const img = document.createElement("img");
	img.src = srcCard;
	const cartas = document.getElementById("cartas-jugadas");
	if(cartas !== null && cartas !== undefined && cartas instanceof HTMLElement){
			cartas.appendChild(img);
	}
}
export const showScore = (currentScore: number) => {
	const puntuacion = document.getElementById("puntuacion");
    if (puntuacion !== null && puntuacion !== undefined && puntuacion instanceof HTMLElement) {
        puntuacion.innerHTML = `Puntuación actual: ${currentScore}`;
    }
}
export const showMessage = (msg: string = "") => {
	const msgElm = document.getElementById("mensaje-resultado");
	if (msgElm !== null && msgElm !== undefined && msgElm instanceof HTMLElement){
			msgElm.innerHTML = msg
	}
}
export const buttonsVisibilityStart = () => {
	if (btnGetCard !== null && btnGetCard !== undefined && btnGetCard instanceof HTMLButtonElement &&
		btnNewGame !== null && btnNewGame !== undefined && btnNewGame instanceof HTMLButtonElement &&
		btnStopCard !== null && btnStopCard !== undefined && btnStopCard instanceof HTMLButtonElement &&
		btnCheckWhat !== null && btnCheckWhat !== undefined && btnCheckWhat instanceof HTMLButtonElement) {
		
		// btnGetCard.style.display = "block";
		// btnNewGame.style.display = "none";
		// btnStopCard.style.display = "none";
		// btnCheckWhat.style.display = "none";

		// btnGetCard.style.visibility = "visible";
		// btnNewGame.style.visibility = "hidden";
		// btnStopCard.style.visibility = "hidden";
		// btnCheckWhat.style.visibility = "hidden";

		btnGetCard.disabled = false;
		btnNewGame.disabled = true;
		btnStopCard.disabled= true;
		btnCheckWhat.disabled = true;
	}
}
export const buttonsVisibilityPlay = () => {
	if (btnGetCard !== null && btnGetCard !== undefined && btnGetCard instanceof HTMLButtonElement &&
		btnNewGame !== null && btnNewGame !== undefined && btnNewGame instanceof HTMLButtonElement &&
		btnStopCard !== null && btnStopCard !== undefined && btnStopCard instanceof HTMLButtonElement &&
		btnCheckWhat !== null && btnCheckWhat !== undefined && btnCheckWhat instanceof HTMLButtonElement) {
		
		// btnGetCard.style.display = "block";
		// btnNewGame.style.display = "none";
		// btnStopCard.style.display = "block";
		// btnCheckWhat.style.display = "none";

		// btnGetCard.style.visibility = "visible";
		// btnNewGame.style.visibility = "hidden";
		// btnStopCard.style.visibility = "visible";
		// btnCheckWhat.style.visibility = "hidden";

		btnGetCard.disabled = false;
		btnNewGame.disabled = true;
		btnStopCard.disabled= false;
		btnCheckWhat.disabled = true;
	}
	}

export const buttonsVisibilityWinOrLose = () => {
	if (btnGetCard !== null && btnGetCard !== undefined && btnGetCard instanceof HTMLButtonElement &&
		btnNewGame !== null && btnNewGame !== undefined && btnNewGame instanceof HTMLButtonElement &&
		btnStopCard !== null && btnStopCard !== undefined && btnStopCard instanceof HTMLButtonElement &&
		btnCheckWhat !== null && btnCheckWhat !== undefined && btnCheckWhat instanceof HTMLButtonElement) {
		
		// btnGetCard.style.display = "none";
		// btnNewGame.style.display = "block";
		// btnStopCard.style.display = "none";
		// btnCheckWhat.style.display = "none";

		// btnGetCard.style.visibility = "hidden";
		// btnNewGame.style.visibility = "visible";
		// btnStopCard.style.visibility = "hidden";
		// btnCheckWhat.style.visibility = "hidden";

		btnGetCard.disabled = true;
		btnNewGame.disabled = false;
		btnStopCard.disabled= true;
		btnCheckWhat.disabled = true;
	
	}
}
export const buttonsVisibilityStop = () => {
	if (btnGetCard !== null && btnGetCard !== undefined && btnGetCard instanceof HTMLButtonElement &&
		btnNewGame !== null && btnNewGame !== undefined && btnNewGame instanceof HTMLButtonElement &&
		btnStopCard !== null && btnStopCard !== undefined && btnStopCard instanceof HTMLButtonElement &&
		btnCheckWhat !== null && btnCheckWhat !== undefined && btnCheckWhat instanceof HTMLButtonElement) {
		
		// btnGetCard.style.display = "none";
		// btnNewGame.style.display = "block";
		// btnStopCard.style.display = "none";
		// btnCheckWhat.style.display = "block";

		// btnGetCard.style.visibility = "hidden";
		// btnNewGame.style.visibility = "visible";
		// btnStopCard.style.visibility = "hidden";
		// btnCheckWhat.style.visibility = "visible";

		btnGetCard.disabled = true;
		btnNewGame.disabled = false;
		btnStopCard.disabled= true;
		btnCheckWhat.disabled = false;
	}
}
export const checkCurrentScore = (currentScore:number) => {
    
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
export const removeCards = () => {
	const cartasJugadas = document.getElementById("cartas-jugadas");
    if (cartasJugadas !== null && cartasJugadas !== undefined && cartasJugadas instanceof HTMLElement){
        while (cartasJugadas.firstChild) {
            cartasJugadas.removeChild(cartasJugadas.firstChild);
          }
    }
}
export const showExtraCard = (srcCard: string) => {
    const img = document.createElement("img");
    img.src = srcCard;
    img.classList.add("filter");
    const cartas = document.getElementById("cartas-jugadas");
    if(cartas !== null && cartas !== undefined && cartas instanceof HTMLElement){
        cartas.appendChild(img);
    }
}
export const checkExtraScore = (virtualScore: number) => {

	if (virtualScore < 7.5) {
		buttonsVisibilityStop()
	}

	if (virtualScore >= 7.5) {
		buttonsVisibilityWinOrLose()
	}
}
export const resetAll = () => {
  
	// partida.currentScore = 0;
	// partida.extraCardCounter = 0;
	// partida.extraScore = 0;
	// partida.puntuacionVirtual = 0;

	resetAllData();
	showScore(partida.currentScore);
	showMessage();
	removeCards(); 
	buttonsVisibilityStart();

}

export const newCard = () => {
	const randomNumber = makeRandomNumber();
	const cardNumber = makeCardNumber(randomNumber);
	const cardValue = makeCardValue(cardNumber);
	const cardUrl = getSrcNewCard(cardNumber);
	showCard(cardUrl);
	updateCurrentScore(cardValue); 
  showScore(partida.currentScore);
  checkCurrentScore(partida.currentScore);
}

export const noMoreCard = ()=> {
    const msg = makeMessage(partida.currentScore);
    showMessage(msg);
		buttonsVisibilityStop();
}

export const newExtraCard = () => {
	
	const randomNumber = makeRandomNumber();
	const cardNumber = makeCardNumber(randomNumber);
	const cardValue = makeCardValue(cardNumber);
	const cardUrl = getSrcNewCard(cardNumber);
	showExtraCard(cardUrl);
  updateExtraScore(cardValue);
	checkExtraScore(partida.puntuacionVirtual);
  const msg = makeExtraMsg();
	showMessage(msg);
}

//----------------
// EVENT HANDLERS
//----------------

if (btnGetCard !== null && btnGetCard !== undefined &&
	btnGetCard instanceof HTMLButtonElement) {
	btnGetCard.addEventListener("click", newCard);
}

if (btnNewGame !== null && btnNewGame !== undefined && btnNewGame instanceof HTMLButtonElement) {
	btnNewGame.addEventListener("click", resetAll);
}

if (btnStopCard !== null && btnStopCard !== undefined &&
	btnStopCard instanceof HTMLButtonElement) {
	btnStopCard.addEventListener("click", noMoreCard);
}

if (btnCheckWhat !== null && btnCheckWhat !== undefined && btnCheckWhat instanceof HTMLButtonElement) {
	btnCheckWhat.addEventListener("click", newExtraCard);
}




