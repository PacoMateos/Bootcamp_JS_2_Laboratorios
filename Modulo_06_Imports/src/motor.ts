import { partida } from "./modelo";


export const makeRandomNumber = (): number => {
	return Math.floor((Math.random() * 10) + 1);
}

export const makeCardNumber = (randomNumber: number): number => {
	if (randomNumber > 7) {
		return randomNumber + 2
	}
	return randomNumber;
}

export const makeCardValue = (cardNumber: number): number => {
	if (cardNumber > 7) {
		return 0.5
	}
	return cardNumber
}

export const getSrcNewCard = (carta : number) : string => {
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

export const updateCurrentScore = (cardValue: number): void => {
  partida.currentScore = partida.currentScore + cardValue;
}

export const makeMessage = (score: number): string => {
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

export const updateExtraScore = (cardValue: number) => {
  partida.extraScore = partida.extraScore + cardValue 
	partida.puntuacionVirtual = partida.currentScore + partida.extraScore;
}

export const makeExtraMsg = (): string => {
	
	let msg: string = "";
	partida.extraCardCounter += 1;
	msg = `Con ${partida.extraCardCounter} ${(partida.extraCardCounter === 1)? "carta": "cartas"} más, habrías obtenido una puntuación de ${partida.puntuacionVirtual}`
	
	return msg;
}
export const resetAllData = () => {
	partida.currentScore = 0;
	partida.extraCardCounter = 0;
	partida.extraScore = 0;
	partida.puntuacionVirtual = 0;
}