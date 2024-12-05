
# BootcampJS2_Laboratorio_Modulo_6

## Imports

### ENUNCIADO

Puedes utilizar como punto de partida la sandbox de JS o la sandbox de TS (te recomendamos al de TS) y subir el resultado a tu repositorio de GitHub.

En esta práctica vamos a refactorizar el código del Laboratorio_05 para que sea más mantenible y reutilizable, siguiendo los mismos principios que aplicamos en este módulo.

...


## APARTADOS OBLIGATORIOS

1. Modelo.
- Extrae la parte que define el modelo de datos a un fichero model.ts y haz limpia en main.ts.
- Asegúrate que sigue todo funcionando y no salen errores por consola.

2. Motor.
- Extrae la parte que define las reglas a un fichero motor.ts y haz limpia en main.ts.
- Asegúrate que sigue todo funcionando y no salen errores por consola.

3. UI.
- Extrae la parte que define el UI a un fichero ui.ts y haz limpia en main.ts.
- Asegúrate que sigue todo funcionando y no salen errores por consola.



## APARTADO OPCIONAL

1. Objeto partida
- ¿Te animas a crear un objeto partida y su método de ayuda para crear una partida?
- Asegúrate que sigue todo funcionando y no salen errores por consola.


### RESOLUCION (APARTADO OBLIGATORIO)

0. Aspecto de la aplicación.

![imagenApp](https://github.com/PacoMateos/Laboratorio_Git/blob/master/assets/images/sieteymedia.png)

1. Modelo.

- He pasado la variables que contienen los datos a un nuevo archivo que hemos denominado modelo.ts
- Hemos exportado esa variables, para que estén disponibles en otros módulos.
- Hemos importado esa variables desde main.js.

- Ya en este punto he tenido el primer problema. Las variables eran de tipo let y no se pueden exportar. Deben ser const, por lo que he tenido que hacer el apartado opcional desde el principio. Se ha creado una interface para los tipos, y se ha creado una constante partido con los valores.

```typescript

interface Partida {
  currentScore: number,
  extraCardCounter: number
  extraScore: number,
  puntuacionVirtual: number
}

export const partida: Partida = {
  currentScore: 0,
  extraCardCounter: 0,
  extraScore: 0,
  puntuacionVirtual: 0
}

```


2. Motor.
- Creamos un nuevo archivo denominado motor.ts
- Pasamos las funciones que tiene que ver con la lógica de la aplicación (es decir que no sean las del modelo ni las que tienen que ver con la UI).

- En este punto hemos tenido problemas, porque teníamos funciones en el laboratorio_05 que hacían varias cosas (lógica y UI), por lo que hemos tenido que desdoblarlas en dos. 
- En concreto han sido: 

```typescript

export const resetAll = () => {
  
	// partida.currentScore = 0;
	// partida.extraCardCounter = 0;
	// partida.extraScore = 0;
	// partida.puntuacionVirtual = 0;
	
	showScore(partida.currentScore);
	showMessage();
	removeCards(); 
	buttonsVisibilityStart();
}

```
- Creamos una nueva función y la ponemos en motor.

```typescript

export const resetAllData = () => {
	partida.currentScore = 0;
	partida.extraCardCounter = 0;
	partida.extraScore = 0;
	partida.puntuacionVirtual = 0;
}

```

- Y en UI queda:
```typescript

export const resetAll = () => {
  resetAllData();
	showScore(partida.currentScore);
	showMessage();
	removeCards(); 
	buttonsVisibilityStart();
}

```


- Una vez resuelto el problema de funciones con varias responsabilidades, se ha pasado a motor.ts lo relacionado con la lógica de la aplicación.
- Despues se han exportado esas funciones.
- Se ha importando todo desde main.ts

3. UI.
- Casi todo el resto, era UI. 
- Se ha creado un archivo denominado ui.ts
- En este archivo ha sido pasada las funciones con relación con el HTML.
- Se exporta todo, y se importa desde main.ts


### RESOLUCION (APARTADO OPCIONAL)
1. Objeto partida
- Se ha creado el objeto partida como se describe en el apartado primero.
- Se ha usado en toda la aplicación.


### OBSERVACIONES Y SUGERENCIAS.
- Ha sido un ejecicio muy util para comprobar lo bien o mal que destribuimos el código aunque funcionen.
- A pesar de que me han surgido problemas, éstos han podido ser resuelto con cierta facilidad debido a la organización nueva.


