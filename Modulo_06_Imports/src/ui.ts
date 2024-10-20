import {partida} from "./modelo";
import {getCardNumber, getSrcNewCard, message, updateExtraScore} from "./motor";

export const puntuacion = document.getElementById("puntuacion");
export const btnGetCard= document.getElementById("btnPlay");
export const btnNewGame = document.getElementById("btnNewGame");
export const btnStopCard= document.getElementById("btnStop");
export const btnCheckWhat = document.getElementById("btnCheckWhat");
export const cartasJugadas = document.getElementById("cartas-jugadas");

export const showScore = (currentScore: number) => {
  if (puntuacion !== null && puntuacion !== undefined &&
      puntuacion instanceof HTMLElement) {
      puntuacion.innerHTML = `Puntuación actual: ${currentScore}`;
  }
}
export const pintarMensaje = (msg: string) => {
  const msgElm = document.getElementById("mensaje-resultado");
  if (msgElm !== null && msgElm !== undefined && msgElm instanceof HTMLElement){
      msgElm.innerHTML = msg
  }
}

export const pintarCarta = (srcCard: string) => {
  const img = document.createElement("img");
  img.src = srcCard;
  const cartas = document.getElementById("cartas-jugadas");
  if(cartas !== null && cartas !== undefined && cartas instanceof HTMLElement){
      cartas.appendChild(img);
  }
}

export const checkCurrentScore = (currentScore:number) => {
    
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
      message(partida.currentScore);
      //msg = "GAME OVER";
      pintarMensaje(partida.msg);

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


export const newCardUI = () => {
  
  pintarCarta(getSrcNewCard(partida.currentNumber)); //UI
  showScore(partida.currentScore); // UI
  checkCurrentScore(partida.currentScore); //UI
}

export const noMoreCard = ()=> {
  message(partida.currentScore);
  pintarMensaje(partida.msg);
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

export const resetAllUI = () => {
  showScore(partida.currentScore);
  pintarMensaje(partida.msg);
  
  
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

export const pintarCartaExtra = (srcCard: string) => {
  const img = document.createElement("img");
  img.src = srcCard;
  img.classList.add("filter");
  const cartas = document.getElementById("cartas-jugadas");
  if(cartas !== null && cartas !== undefined && cartas instanceof HTMLElement){
      cartas.appendChild(img);
  }
}

export const checkExtraScore = (virtualScore:number) => {
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

export const newExtraCard = () => {
  partida.currentNumber = getCardNumber();
  pintarCartaExtra(getSrcNewCard(partida.currentNumber));
  updateExtraScore(partida.currentNumber);
  
  partida.extraCard += 1;
  partida.puntuacionVirtual = partida.extraScore + partida.currentScore;
  partida.msg = `Con ${partida.extraCard } carta más habrias tenido una puntuacion de ${partida.puntuacionVirtual}`
 
  pintarMensaje(partida.msg);
  checkExtraScore(partida.puntuacionVirtual);
}