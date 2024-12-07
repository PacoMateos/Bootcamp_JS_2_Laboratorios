# BootcampJS2_Laboratorio_Modulo_8_1

## Bucles

### ENUNCIADO

El objetivo de estos ejercicios es que te familiarices con los bucles for y while, no implementes arrays methods, estos los veremos en el siguiente laboratorio.

### SET DE DATOS

```typescript

type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

```


### APARTADOS OBLIGATORIOS

## APARTADO 1

1-A Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría

Firma de la función:

```typescript

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  // Tu implementación aquí :)
};

```

1-B Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.

```typescript

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  // Tu implementación aquí :)
};

```

## APARTADO 2

Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.

Es decir, crear una función que devuelve true/false dependiendo si se da la condición, algo así como:

```typescript

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;

  // Tu implementación aquí :)

  return activarProctolo;
};

```

## APARTADO 3

El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia.

```typescript

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  // Tu implementación aquí :)
};

```

## APARTADO 4

Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a pediatría

```typescript

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  // Tu implementación aquí :)
};

```

### APARTADOS OPCIONALES

## APARTADO 5

Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a cardiología

```typescript

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  // Tu implementación aquí :)
};

```


### SUGERENCIAS:

1. Cambiar el nombre de las especialidades en el set de datos. Pediatra por Pedriatría, Cardiologo por Cardiología, Medico de Familia por Medicina de Familia. Tal y como está parece que los pacientes son médicos. Y en algun apartado genera confusion.

2. El apartado 3, no queda claro si debe generar un array con los reasignados solamente, o bien una lista completa que tenga las reasignaciones realizadas.

3. El apartado 4, no queda claro sobre qué lista hay que hacer la consulta. Puede ser de la original o de la lista completa con reasignaciones.








