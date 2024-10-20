import "./style.css";
import { newCardLogic, resetAllLogic } from "./motor";
import {
	btnCheckWhat,
	btnGetCard,
	btnNewGame,
	btnStopCard,
	newCardUI,
	noMoreCard,
	resetAllUI,
	newExtraCard
} from "./ui";

const newCard = () => {
	newCardLogic(); // motor
	newCardUI(); // UI
}

const resetAll = () => {
	resetAllLogic(); // motor
	resetAllUI(); // UI
}

//------------------------
// MANEJADORES DE EVENTOS
//------------------------

if (btnGetCard !== null && btnGetCard !== undefined &&
	btnGetCard instanceof HTMLButtonElement) {
	btnGetCard.addEventListener("click", newCard);
}


if (btnNewGame !== null && btnNewGame !== undefined && btnNewGame instanceof HTMLElement) {
	btnNewGame.addEventListener("click", resetAll);
}


if (btnStopCard !== null && btnStopCard !== undefined &&
	btnStopCard instanceof HTMLButtonElement) {
	btnStopCard.addEventListener("click", noMoreCard);
}


if (btnCheckWhat !== null && btnCheckWhat !== undefined && btnCheckWhat instanceof HTMLElement) {
	btnCheckWhat.addEventListener("click", newExtraCard);
}



//-----------------------------------
// Esta función inicia la aplicación
//-----------------------------------


const init = () => {
	resetAll();
}

init();
