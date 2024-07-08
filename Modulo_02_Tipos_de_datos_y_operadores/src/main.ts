import "./style.css";

// Podríamos utilizar let o const para las variables. 
// Pero he decidido hacer la aplicación reutilizable para otras ocasiones, 
// por ejemplo al año que viene voy a invitar de nuevo, 
// y los precios pueden haber variados así como el número de comensales, asi que utilizo let

let TotalCena: number = 120;
let TotalBebidas: number = 18;
let NumeroComensales: number = 6;

let TotalCenaSinBebidas: number = TotalCena - TotalBebidas;
let ImportePorAmigo: number = TotalCenaSinBebidas / NumeroComensales;
let MiParte: number = ImportePorAmigo + TotalBebidas;

console.log('El total a pagar por la cena es: ' + TotalCena + ' euros.');
console.log('El total de la cena sin bebidas es: ' + TotalCenaSinBebidas + ' euros.');
console.log('Cada comensal debe pagar: ' + ImportePorAmigo + ' euros.');
console.log('Yo pago mi parte de la cena y las bebidas, es decir: ' + MiParte + ' euros.');
