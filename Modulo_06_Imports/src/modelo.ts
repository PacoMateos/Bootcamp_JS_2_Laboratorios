

interface Partida {
  currentNumber: number,
  currentScore: number,
  msg: string,
  extraCard: number,
  extraScore: number,
  puntuacionVirtual: number
}

export const partida: Partida = {
  currentNumber: 0,
  currentScore: 0,
  msg: "",
  extraCard: 0,
  extraScore: 0,
  puntuacionVirtual: 0
}



