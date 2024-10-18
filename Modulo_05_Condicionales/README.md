
# BootcampJS2_Laboratorio_Modulo_5

## Condicionales

### ENUNCIADO

Puedes utilizar como punto de partida la sandbox de JS o la sandbox de TS (te recomendamos al de TS) y subir el resultado a tu repositorio de GitHub.

## JUEGO DE LAS SIETE Y MEDIA

Vamos a implementar el juego de cartas de las 7 1/2 en modo solitario.
...

## MATERIAL

Para simplificar la implementación del juego sólo vamos a mostrar cartas del palo de copas.
Se proporcionan 11 imagenes, una corresponde al reverso de las cartas de la barajas y las otras 10 al palo de copas.
...

## APARTADOS OBLIGATORIO

1. Mostrar puntuación
2. Pedir carta
3. Mostrar carta
4. Sumar puntuación
5. Game over
6. Me planto
7. Nueva partida
8. Estila la aplicación


## APARTADO OPCIONAL
1. Saber lo que habría pasado

Una vez que el usuario ya se ha plantado, se le muestra un botón para que pueda saber lo que habría pasado si hubiera seguido pidiendo cartas.

### RESOLUCION (APARTADO OBLIGATORIO)

1. Mostrar puntuación.

- Creamos una variable currentScore, de tipo number.
- Capturamos el elemento puntuacion.
- Creamos la función showScore, que pintará la puntuación. Ojo que al tipar el elemento capturado debemos tener en cuenta que no sea null ni undefined, y que sea instancia de HTMLelement. Esta función admite un parámetro tipado a number.
- LLamamos a la función showScore con el argumento currentScore.


2. Pedir carta.
- Creamos un manejador de eventos en el botón DAME CARTA.
- Con el evento click, se ejecuta la función newCard

3. Mostrar carta.
- Creamos una función showCard.

Reverso carta baraja:
https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg

1 de copas
https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg

2 de copas
https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg

3 de copas
https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg

4 de copas
https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg

5 de copas
https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg

6 de copas
https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg

7 de copas
https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg

Sota de copas
https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg

Caballo de copas
https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg

Rey de copas
https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg

4. Sumar puntuación
- Creamos la función updateCurrentScore.
5. Game over
- Lo hacemos con las funciones message y pintarMensaje.
6. Me planto
- Con la función noMoreCard
7. Nueva partida
- Con la función resetAll
8. Estila la aplicación
- Se muestran todas las cartas en el tapete durante la partida.
- Se usa flex

### RESOLUCION (APARTADO OPCIONAL)
1. Saber lo que habría pasado
- Se crean varia funciones adicionales.
- Las cartas extra se pintan en escala de grises.


### OBSERVACIONES Y SUGERENCIAS.
- Hubiera sido muy bonito utilizar toda la baraja.
- La implementación propuesta por mi es mejorable. Por ejemplo, dejar todos los botones en lugar de ocultar y en su lugar utilizar disabled y opacity.
- Implementar una especie de barajado inicial. En lugar de generar un numero aleatorio cada vez, se prodría haber generado directamente un array de las 16 cartas (máximo hasta pasarse). Y cuando se compruebe que hubiera pasado, la situación sería mas real que la actual.

### DUDAS
- ¿no existe una forma menos verbosa de controlar los null?