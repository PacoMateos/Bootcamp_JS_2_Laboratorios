
# BootcampJS2_Laboratorio_Modulo_7

## Testing

### ENUNCIADO

En laboratorios anteriores creamos el juego de la siete y media, luego refactorizamos el código y en este laboratorio vamos a realizar pruebas unitarias para comprobar que el juego funciona correctamente.

Para ambos ejercicios recomendamos usar el sandbox de Typescript

## APARTADOS OBLIGATORIOS

Vamos a realizar pruebas unitarias para comprobar si un jugador ha ganado el juego o no.

Para ello,

1. Identifica las funciones y componentes que determinan si un jugador ha ganado la partida o no.
2. Crea una serie de tests utilizando la librería de testing vitest para comprobar que el juego funciona correctamente.
3. Importa los módulos que fuesen necesarios para poder realizar las pruebas unitarias.

## APARTADO OPCIONAL

Para seguir practicando vamos a añadir dos casos más:

1. Habrás tenido que generar una función que genere un número aleatorio entre 0 y 10 y en el caso de que este número sea mayor que 7, sume 2 al resultado final. Para asegurarnos de que la función se comporta como se espera, se van a realizar sus pruebas unitarias correspondientes.

2. En el caso de que el jugador haya obtenido una carta, debemos de haber creado una función que devuelva el valor de esa carta. Al igual que en el caso anterior, se van a realizar pruebas unitarias para comprobar que la función se comporta como se espera en diferentes situaciones.


## RESOLUCION (APARTADO OBLIGATORIO)

0. Aspecto de la aplicación.

![imagenApp](https://github.com/PacoMateos/Laboratorio_Git/blob/master/assets/images/sieteymedia.png)

1. Realizar pruebas unitarias para comprobar si un jugador ha ganado el juego o no.

Lo primero que tenemos que definir es qué se considera que un jugador ha ganado el juego. Por lógica un jugador ha ganado el juego cuando optiene 7.5 puntos sin pasarse.

Aqui podemos preguntarnos que pasa cuando un jugador se planta sin pasarse. En este caso consideramos que no ha perdido, pero no ha ganado.

Por último, decimos que ha perdido cuando se ha pasado.

Descartamos el caso de "que hubiera pasado", aunque se obtuvieran 7.5 despues de plantarse.

Por lo tanto para realizar los test solicitados, nos centramos en que un jugador gana cuando optiene 7.5 sin pasarse.

En nuestra implementación no existe una función clara que nos indique esta situación. Lo ideal sería una función que devolviera la puntuación actualizada, pero no existe exactamente esa función. Existe una función que actualiza la puntuación actual pero no devuelve nada. Por lo tanto no podemos usar esa función para los test que se piden.

Existe otra función que se aproxima bastante a lo que queremos. Es la función makeMessage, que usa como argumento la puntuación actualizada (partida.currentScore)  y devuelve el mensaje correspondiente a esa puntuación. Es decir, cuando se obtiene 7.5 puntos en la puntuación actualizada, devuelve el mensaje "¡Lo has clavado! ¡Enhorabuena!"

Utilizaremos esta función para realizar los test.


```typescript

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
			msg = "¡Lo has clavado! ¡Enhorabuena!"
	}
	else {
			msg = "GAME OVER 💥"
	}
 return msg;
}

```

Los CASOS de test que vamos a implementar serían:

1. Pasamos 7.5 a la función y nos debería devolver "¡Lo has clavado! ¡Enhorabuena!"
2. Pasamos un número mayor a 7.5 a la función y nos debería devolver "GAME OVER 💥"

Y ya puesto comprobamos también los siguientes: (Con especial atención al 4 y al 5)
3. Pasamos un número menor en el rango (5, 7]. Debería devolver "Casi casi..."
4. Pasamos un número menor en el rango (4, 5]. Debería devolver "Te ha entrado el canguelo eh?"
5. Pasamos un número menor en el rango (0, 4]. Debería devolver "Has sido muy conservador"


## RESOLUCION (APARTADO OPCIONAL)

1. Habrás tenido que generar una función que genere un número aleatorio entre 0 y 10 y en el caso de que este número sea mayor que 7, sume 2 al resultado final. Para asegurarnos de que la función se comporta como se espera, se van a realizar sus pruebas unitarias correspondientes.

Entendemos que este ejercicio es doble. Es decir, primero testear la función que generar un número entre 0 y 10. Y segundo testear la función que generar el número de carta. 

  - f(x): makeRandomNumber (testing)
	- f(x): makeCardNumber (testing)


2. En el caso de que el jugador haya obtenido una carta, debemos de haber creado una función que devuelva el valor de esa carta. Al igual que en el caso anterior, se van a realizar pruebas unitarias para comprobar que la función se comporta como se espera en diferentes situaciones.

Complemento del ejercicio anterior.

  - f(x): makeCardValue (testing)


## OBSERVACIONES Y SUGERENCIAS.

- Los ejercicios encadenados pueden generar la necesidad de modificar los ejercicios precedentes. Me explico: El módulo 5 pide crear una aplicación de "el juego de las siete y media", con el objetivo de practicar los condicionales. El módulo 6 pide factorizar la aplicación del módulo 6 para practicar los imports. El módulo 7 pide realizar testing de la aplicación del módulo 6 para practicar testing. Este esquema me ha obligado a modificar el módulo 5 para realizar el módulo 6. Y modificar el módulo 6 para realizar el módulo 7. Es decir de haber sabido que se realizaría testing del módulo 5 en el modulo 7, tal vez se pudieran haber contemplado más opciones de seguridad y control.

- Sugerencia: Proponer ejercicios independientes. O indiquen claramente la necesidad de modificar los módulos anteriores para realizar los subsiguientes (si el objetivo del aprendizaje es integral).





