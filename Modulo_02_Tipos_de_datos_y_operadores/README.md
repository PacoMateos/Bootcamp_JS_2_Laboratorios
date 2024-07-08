
# BootcampJS2_Laboratorio_Modulo_2

## Tipos de datos y Operadores - Laboratorio

### ENUNCIADO

Puedes utilizar como punto de partida la sandbox de JS o la sandbox de TS (te recomendamos al de TS) y subir el resultado a tu repositorio de GitHub.

Cena de cumpleaños entre amigos
Tienes un grupo de 6 amigos y quieres invitarlos a cenar por tu cumpleaños.

- Solo puedes permitirte invitar a las bebidas, ya que estás un poco ajustado de dinero.

- Tienes un ticket de cena que cuesta 120 € y en el que ya se incluyen las bebidas por un valor de 18 €.

- Calcula cuánto tendría que pagar cada comensal para dividir los costos de manera equitativa.

- Utiliza JavaScript para hacer el cálculo y mostrar el resultado por consola.

### CONSIDERACIONES

Con la actual redacción del problema, no me queda claro si se trata de de un grupo de 6 amigos contandome a mi o sin contarme.
Dado que la redacción es "Tiene un grupo de 6 amigos", entederé que se pretende decir "Sois un grupo de seis amigos en total". Por lo tanto para realizar los cálculos supondremos un total de 6 personas incluyendome a mi.

### RESOLUCION

1. Visto que solo puedo invitar a las bebidas, para calcular la parte de cada uno primero restaré el total de las bebidas (18€) al total de la cena (120€). Luego: Total sin bebidas: 120€ - 18€ = 102€.

2. Para calcular las partes que cada uno de mis amigos de pagar, dividiré el Total sin bebidas entre 6. Aclaración, se divide entre 6 y no entre 5 porque yo también ceno. Luego: Partes: 102€ / 6 = 17€. Cada amigo debe pagar: 17€.

3. Comprobación: Amigo 1 (17€) + Amigo 2 (17€) + Amigo 3 (17€) + Amigo 4 (17€) + Amigo 5 (17€) + Mi cena (17€) + Bebidas pagadas por mi (18€). Luego 17 + 17 + 17 + 17 + 17 + 17 + 18 = 120.

4. Solución: cada uno de mis amigos paga 17€ y yo pago 35€ (17€  + 18€).

```
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

```