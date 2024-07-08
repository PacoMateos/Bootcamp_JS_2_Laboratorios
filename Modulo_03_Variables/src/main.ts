import "./style.css";

// Definición de variables de género musical

const generoPopRock: string = "🎵 Pop Rock";
const generoRock: string = "🎸 Rock";
const generoHardRock: string = "🤘 Hard Rock";
const generoClasica: string = "🎼 Clásica";

// Definición de interfaz de grupo

interface GrupoMusical {
  nombreGrupo: string,
  añoFundacion: number,
  activo: boolean,
  generoMusical: string,
}

// Definición de estilos de nombre de grupo

const estiloTitulo: string = "font-style: bold; font-size: 18px; background-color: green;"

// Definición de grupos

const grupo1: GrupoMusical = {
  nombreGrupo: "The Beatles",
  añoFundacion: 1960,
  activo: true,
  generoMusical: generoPopRock,
}

const grupo2: GrupoMusical = {
  nombreGrupo: "Queen",
  añoFundacion: 1970,
  activo: false,
  generoMusical: generoRock,
}

const grupo3: GrupoMusical = {
  nombreGrupo: "AC DC",
  añoFundacion: 1973,
  activo: true,
  generoMusical: generoHardRock,
}

const grupo4: GrupoMusical = {
  nombreGrupo: "Ludwig van Beethoven",
  añoFundacion: 1770,
  activo: false,
  generoMusical: generoClasica,
}

const grupo5: GrupoMusical = {
  nombreGrupo: "The Rolling Stones",
  añoFundacion: 1962,
  activo: true,
  generoMusical: generoHardRock,
}

// Solución al problema propuesto

console.log("OPCION-1")

console.log(`- %c${grupo1.nombreGrupo}`, estiloTitulo, `/ ${grupo1.añoFundacion} / ${grupo1.activo} / ${grupo1.generoMusical}`);
console.log(`- %c${grupo2.nombreGrupo}`, estiloTitulo, `/ ${grupo2.añoFundacion} / ${grupo2.activo} / ${grupo2.generoMusical}`);
console.log(`- %c${grupo3.nombreGrupo}`, estiloTitulo, `/ ${grupo3.añoFundacion} / ${grupo3.activo} / ${grupo3.generoMusical}`);
console.log(`- %c${grupo4.nombreGrupo}`, estiloTitulo, `/ ${grupo4.añoFundacion} / ${grupo4.activo} / ${grupo4.generoMusical}`);
console.log(`- %c${grupo5.nombreGrupo}`, estiloTitulo, `/ ${grupo5.añoFundacion} / ${grupo5.activo} / ${grupo5.generoMusical}`);

console.log("*********************************************************************")

console.log("OPCION-2")

console.log(`- %c${grupo1.nombreGrupo}`, estiloTitulo, `/ ${grupo1.añoFundacion} / Activo:${grupo1.activo} / ${grupo1.generoMusical}`);
console.log(`- %c${grupo2.nombreGrupo}`, estiloTitulo, `/ ${grupo2.añoFundacion} / Activo:${grupo2.activo} / ${grupo2.generoMusical}`);
console.log(`- %c${grupo3.nombreGrupo}`, estiloTitulo, `/ ${grupo3.añoFundacion} / Activo:${grupo3.activo} / ${grupo3.generoMusical}`);
console.log(`- %c${grupo4.nombreGrupo}`, estiloTitulo, `/ ${grupo4.añoFundacion} / Activo:${grupo4.activo} / ${grupo4.generoMusical}`);
console.log(`- %c${grupo5.nombreGrupo}`, estiloTitulo, `/ ${grupo5.añoFundacion} / Activo:${grupo5.activo} / ${grupo5.generoMusical}`);


