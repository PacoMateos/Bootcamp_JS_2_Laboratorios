
# BootcampJS2_Laboratorio_Modulo_3

## Variables

### ENUNCIADO

Puedes utilizar como punto de partida la sandbox de JS o la sandbox de TS (te recomendamos al de TS) y subir el resultado a tu repositorio de GitHub.

Grupos musicales
Queremos mostrar información acerca de grupos musicales.

Si estás trabajando con TypeScript habría que crear un interfaz para representar a un grupo musical.

La información de los grupos que queremos mostrar:

- Nombre del grupo / cantante / compositor (string).
- Año de fundación: cuando se formó el grupo (numero).
- Si está en activo (booleano).
- Género musical (string).

Cada género queremos tenerlo en una variable.

Los grupos que vamos a mostrar:

- The Beatles / 1960 / Activo: true / 🎵 Pop Rock
- Queen / 1970 / Activo: false / 🎸 Rock
- AC DC / 1973 / Activo: true / 🤘 Hard Rock
- Ludwig van Beethoven / 1770 / Activo: false / 🎼 Clásica
- The Rolling Stones / 1962 / Activo: true / 🎸 Rock

Queremos mostrar cada grupo por consola, el nombre del grupo de música queremos ponerlo en negrita, con fuente más grande y color de fondo verde.

### CONSIDERACIONES

Nos parece extraño que para cada una de las propiedades únicamente se deba mostrar su valor, pero para la propiedad "si está activo (booleano)" debe mostrarse el nombre de la propiedad y su valor, es decir, Activo: false o Activo: true. 

Ante este dilema tenemos dos opciones:

OPCION-1
Podemos interpretar que se pide que se muestre el valor de la propiedad Activo, siendo consecuentes con el resto de información.

OPCION-2
O Podemos interpretar que debe aparecer el nombre de la propiedad, en ese caso lo mostramos concatenando el nombre de la propiedad y su valor.

Respecto a "el nombre del grupo de música queremos ponerlo en negrita, con fuente más grande y color de fondo verde", entenderemos que estos estilos solo son aplicados al nombre del grupo, el resto de propiedades del grupo llevarán estilos por defecto.

### RESOLUCION

1. Creamos las variables de género.

2. Creamos la interfaz de GrupoMusical.

3. Creamos la variable estiloNombreGrupo.

4. Creamos los cinco grupos solicitados.

5. Mostramos por consola la OPCION-1.

6. Mostramos por consola la OPCION-2.


