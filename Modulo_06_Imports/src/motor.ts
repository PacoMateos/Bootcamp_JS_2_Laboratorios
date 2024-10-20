import { partida } from "./modelo"

export const getCardNumber = () => {
  let numCard: number;
  numCard = Math.floor((Math.random() * 10) + 1);
  if (numCard > 7) {
    numCard += 2
  }
  return numCard;
}

export const updateCurrentScore = (numCard: number) => {
  switch (numCard) {
    case 1:
      partida.currentScore += 1;
      break;
    case 2:
      partida.currentScore += 2;
      break;
    case 3:
      partida.currentScore += 3;
      break;
    case 4:
      partida.currentScore += 4;
      break;
    case 5:
      partida.currentScore += 5;
      break;
    case 6:
      partida.currentScore += 6;
      break;
    case 7:
      partida.currentScore += 7;
      break;
    default:
      partida.currentScore += 0.5;
  }
}

export const message = (score: number) => {

  if (score < 4) {
    partida.msg = "Has sido muy conservador"
  }
  else if (score >= 4 && score <= 5) {
    partida.msg = "Te ha entrado el canguelo eh?"
  }
  else if (score > 5 && score <= 7) {
    partida.msg = "Casi casi..."
  }
  else if (score === 7.5) {
    partida.msg = "¡Lo has clavado! ¡Enhorabuena! "
  }
  else {
    partida.msg = "GAME OVER 💥"
  }

}

export const getSrcNewCard = (carta: number): string => {
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

export const updateExtraScore = (numCard: number) => {
  switch (numCard) {
    case 1:
      partida.extraScore += 1;
      break;
    case 2:
      partida.extraScore += 2;
      break;
    case 3:
      partida.extraScore += 3;
      break;
    case 4:
      partida.extraScore += 4;
      break;
    case 5:
      partida.extraScore += 5;
      break;
    case 6:
      partida.extraScore += 6;
      break;
    case 7:
      partida.extraScore += 7;
      break;
    default:
      partida.extraScore += 0.5;
  }
}

export const newCardLogic = () => {
  partida.currentNumber = getCardNumber();
  updateCurrentScore(partida.currentNumber); // Motor
}

export const resetAllLogic = () => {
  partida.currentScore = 0;
  partida.msg = "";

  partida.extraCard = 0;
  partida.extraScore = 0;
  partida.puntuacionVirtual = 0;
}

