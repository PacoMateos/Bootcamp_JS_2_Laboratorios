interface Partida {
  currentScore: number,
  extraCardCounter: number,
  extraScore: number,
  puntuacionVirtual: number
}

export const partida: Partida = {
  currentScore: 0,
  extraCardCounter: 0,
  extraScore: 0,
  puntuacionVirtual: 0
}

interface Mensajes {
  mensaje_entre_0_y_4: string,
  mensaje_entre_4_y_5: string,
  mensaje_entre_5_y_7: string,
  mensaje_con_7_y_media: string,
  mensaje_con_8_o_mas: string
}

export const mensajes: Mensajes = {
  mensaje_entre_0_y_4: "Has sido muy conservador",
  mensaje_entre_4_y_5: "Te ha entrado el canguelo eh?",
  mensaje_entre_5_y_7: "Casi casi...",
  mensaje_con_7_y_media: "¡Lo has clavado! ¡Enhorabuena!",
  mensaje_con_8_o_mas: "GAME OVER 💥"
}

