
# BootcampJS2_Laboratorio_Modulo_4

## Funciones - Laboratorio

Puedes utilizar como punto de partida la sandbox de JS o la sandbox de TS (te recomendamos al de TS) y subir el resultado a tu repositorio de GitHub.

### ENUNCIADO

Queremos implementar una pantalla en la que aparezca un display con el turno actual de una clínica y un botón para pasar al siguiente turno y otro para volver al anterior.

A implementar:

- Básico:

    - En grande se muestra el turno.
    - El operario puede ir dándole a siguiente o anterior y el turno cambia.
    - Además de esto vamos a añadir un botón de reset que pone el turno a 0.

- Avanzado:

    - Como challenge puedes añadir una caja de texto y un botón que permita cambiar el turno a un valor que ponga el operario.

- Challenge:

    - Sea el número que sea, lo quiero mostrar siempre con dos digitos (es decir el 1 -> 01, el 2 -> 02, el 10 -> 10, el 11 -> 11, etc), investiga como puedes formatear un número para que siempre tenga dos dígitos.

Pista: Puedes usar la función padStart, la cual nos ayuda a añadir ceros o cualquier otro carácter que queramos al principio de una cadena de texto.

Si lo implementas en TypeScript en modo estricto, mejor que mejor.

### Material

Un ejemplo de marcador de turnos:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <link rel="stylesheet" href="./src/style.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + TS</title>
  </head>
  <body>
    <div class="turno-display">
      <h1 class="numero-turno">01</h1>
      <p class="texto-turno">Por favor, acérquese al mostrador</p>
    </div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>

```

Y el estilo,

*./src/style.css*

```css
.turno-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.numero-turno {
  font-size: 6rem;
  font-weight: bold;
  margin: 0;
}

.texto-turno {
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  text-align: center;
}
```

Deja el resto del CSS de styles.css como está (en root se añade una fuente que hace que quede bien)

### CONSIDERACIONES DE LA PARTE BÁSICA.

1. Se nos propone usar el html y css anterior. De su redacción se deduce, que la estructura del html y el css de estilo, no es el objetivo principal del ejercicio. No se impiden los cambios en estos archivos, pero si se realizan éstos deberían ser mínimos y que aporten legibilidad y funcionalidad. Siguiendo estas consideraciones se realizan únicamente cambios mínimos que son:

  - Los controles de turnos se han agrupado en un div con tres secciones (avance y retroceso; boton de reseteo a cero; input de turno y boton de cambio).

  - Se ha añadido un id elemento h1 para mejor manejo, siguiendo en la línea de los videos de formación de este módulo, para usar document.getElementById. No obstante, debemos decir que no hubiera sido necesario tocar esto porque se dispone del querySelector que hace la misma función sin cambiar nada en el html.

  ```typescript

  const el = document.querySelector(".numero-turno");
  let tal: number = 0;
  if (el !== null && el !== undefined ){
    tal = parseInt(el.innerHTML)
  }

 ```
  o bien más específicamente

```typescript

  const el = document.querySelector(".turno-display .numero-turno");
let tal: number = 0;
if (el !== null && el !== undefined ){
  tal = parseInt(el.innerHTML)
}

```

2. Respecto a la funcionalidad de los botones siguiente y anterior, no se cita que deba protegerse los turnos negativos. A nuestro entender es buena idea evitar que cuando se pulse el botón anterior no se llegue en ningún caso a número de turno negativo que no tendría sentido. 

- Por lo tanto vamos a evitar que se muestren números negativos de turno. Esto podemos hacerlo de dos formas: dejando el turno en cero simplemente, o bien dejando el turno en cero y mostando una alerta para enriquecer la experiencia de usuario.


### CONSIDERACIONES DE LA PARTE AVANZADA.

1. Se indica que como challenge puedes añadir una caja de texto y un botón que permita cambiar el turno a un valor que ponga el operario. De esta redacción parece intuirse que el input debe ser <input type="text">, aunque sería más adecuado un: <input type="number">, dado que se pretende que usuario introduzca un número.

2. No obstante, la elección de <input type="number"> aunque evita entradas como cadenas de texto y otras, no evita números negativos, o exponenciales o dejar el campo en blanco. Por lo tanto aun eligiendo <input type="number"> debemos minimamente proteger estos casos. Se implementará una pequeña validación de todo esto.


### CONSIDERACIONES DE LA PARTE CHALLENGE.

1. Se insta que que los números de turnos aparezcan con dos dígitos aunque tengan menos. Para ello se recomienda usar la función padStart. Por lo tanto emplearemos dicha función.

3. Nada se dice si se llega a turnos de 3 digitos y siguientes. Podríamos considerar parar el contador en 99, pero no lo haremos porque no aporta nada adicional al contexto del ejercicio. Dejaremos que puedan incrementarse los turnos sin límite superior. Nota: esto es sencillo de implementar en su caso, con los atributos min max del <input type="number">.

### RESOLUCION

1. Adecuación de la UI, ampliando el archivo index.html y style.css. El resultado de dicha implementación es el siguiente:

![turnosApp](https://github.com/PacoMateos/Bootcamp_JS_2_Laboratorios/blob/main/Modulo_04_Funciones/src/assets/turnos.png)

2. Para la funcionalidad de la parte básica, empezamos creando las sigientes funciones:

- getTurn(), esta función obtiene el número actual que se muestra en pantalla. En una constante almacenamos el HTMLElement. El tipado tiene como reto que elemento del DOM requerido puede ser nulo, por lo que debemos protegernos con un condicional null/undefined.
- setNextTurn(), esta función obtiene el siguiente turno. Para ello primero se llama a la función getTurn(), y despues se incrementa el turno. El tipado es sencillo porque no tiene parámetros y no tiene return.
- setPreviosTurn(), esta función obtiene el turno anterior. Para ello primero se llama a la función getTurn(), y despues se descrementa el turno. El tipado es sencillo porque no tiene parámetros y no tiene return. Esta función contiene ademas una pequeña validación que impide llegar a números negativos.
- resetTurn(), esta función establece el turno en cero. El tipado es sencillo porque no tiene parámetros y no tiene return.
- showTurn(), esta función pinta el turno que se le pasa como argumento. El tipado tiene como reto que elemento del DOM requerido puede ser nulo, por lo que debemos protegernos con un condicional null/undefined.

3. En este punto debemos asociar un manejador de eventos a los botones correspondientes. La clave de esta parte es que el elemento del DOM necesario es HTMLButtonElement, por lo ademas de protegernos de null/ undefined necesitamos también filtrar las instancias. Todo esto lo hacemos del siguiente modo:

```typescript

const btnNextElement = document.getElementById("boton-siguiente");
if (btnNextElement!== null && btnNextElement !== undefined && 
    btnNextElement instanceof HTMLButtonElement) {
        btnNextElement.addEventListener("click", setNextTurn);
}

```

4. En la parte avanzada se pide un input para capturar el turno desea y un boton para actualizar. Para esta parte creamos la funcion setCustomTurn(). El elemento del DOM necesario es HTMLInputElement, por lo ademas de protegernos de null/ undefined necesitamos también filtrar las instancias. Todo esto lo hacemos del siguiente modo:

```typescript

function setCustomTurn() {
  const inputElement = document.getElementById("input-turn");
    if(inputElement !== null && inputElement !== undefined && inputElement instanceof HTMLInputElement) {
      // codigo a ejecutar
    }
   
}

```
Adicionalmente será necearia una pequeña validación, para controlar los valores negativos y ademas saber si el input está en blanco o contiene algún valor. La mayor parte de la validación se realiza casi automáticamente por haber elegido un input type="number"

5. El desafío final, usamos la función padstart del siguiente modo:

```typescript
// Mostrar un turno 
function showTurn(turn:number):void{
  const turnElement = document.getElementById("turno-actual");
    if (turnElement !== null && turnElement !== undefined) {
      turnElement.innerHTML = turn.toString().padStart(2,'0');
    }
}

```
