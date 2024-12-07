import "./style.css";
console.log("Hello Typescript!");


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

//------------
// APARTADO 1
//------------

// a) Extraer la lista de pacientes que están asignados a la especialidad de Pediatría

const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {

  let pacientesAsignadosAPediatria: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      const pacienteAsignadosAPediatria = {
        ...pacientes[i]
      }
      pacientesAsignadosAPediatria = [...pacientesAsignadosAPediatria, pacienteAsignadosAPediatria]
    }
  }
  return pacientesAsignadosAPediatria
};

// Array con los pacientes de pediatria
console.log(obtenPacientesAsignadosAPediatria(pacientes));
console.log(pacientes); // El array original sigue igual.

// b) Extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {

  let pacientesAsignadosAPediatriaYmenorDeDiezAnios: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      const pacienteAsignadosAPediatriaYMenorDeDiezAnios = {
        ...pacientes[i]
      }
      pacientesAsignadosAPediatriaYmenorDeDiezAnios = [...pacientesAsignadosAPediatriaYmenorDeDiezAnios, pacienteAsignadosAPediatriaYMenorDeDiezAnios]
    }
  }
  return pacientesAsignadosAPediatriaYmenorDeDiezAnios
};

// Array con los pacientes de pediatria con menos de diez años.
console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));
console.log(pacientes); // El array original sigue igual.

//------------
// APARTADO 2
//------------

// Crear una función que devuelve true/false dependiendo si se da la condición: pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.

// Entendemos que se deben dar las dos condiciones a la vez para que se active el protocolo de urgencia.

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProtocolo = false;

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].frecuenciaCardiaca > 100 && pacientes[i].temperatura > 39) {
      activarProtocolo = true;
    }
  }
  return activarProtocolo;
}

// Activar protocolo de urgencia
console.log("Activar protocolo de urgencia: ", activarProtocoloUrgencia(pacientes))



//------------
// APARTADO 3
//------------

// NOTA: No queda claro si hay que hacer solo un array con los reasignados, o una lista completa incluyendo los reasignados

// Reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia

const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {

  let pacientesReasignadosAMedicoDeFamilia: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {

      let especialidad: Especialidad = "Medico de familia"
      const pacienteReasignadoAMedicoDeFamilia = {
        ...pacientes[i],
        especialidad: especialidad
      }
      pacientesReasignadosAMedicoDeFamilia = [...pacientesReasignadosAMedicoDeFamilia, pacienteReasignadoAMedicoDeFamilia]
    }
  }
  return pacientesReasignadosAMedicoDeFamilia
};

// Lista completa y actual despues de la reasignación.

const generaPacientesNoReasignados = (pacientes: Pacientes[]): Pacientes[] => {

  let pacientesNoReasignados: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad !== "Pediatra") {

      const pacienteNoReasignado = {
        ...pacientes[i],
      }
      pacientesNoReasignados = [...pacientesNoReasignados, pacienteNoReasignado]
    }
  }
  return pacientesNoReasignados
};

//Lista completa, incluyendo las reasignaciones

const listaDeReasignados = reasignaPacientesAMedicoFamilia(pacientes);
const listaDeNoReasignados = generaPacientesNoReasignados(pacientes);
const listaCompletaActualizada = [...listaDeReasignados, ...listaDeNoReasignados]


// Array con los pacientes de Pediatria asignados a Medico de Familia.
console.log(reasignaPacientesAMedicoFamilia(pacientes))
// Array con la lista completa actualizada
console.log("lista completa", listaCompletaActualizada);
console.log(pacientes); // El array original sigue igual.


//------------
// APARTADO 4
//------------

// Comprobar si en la lista hay algún paciente asignado a pediatría.

// He mantenido inmutable el array original en todos los ejercicios. Para hacer el apartado 4, debería saber qué lista utilizamos: la lista original o la lista de reasignados de pediatria a medicina de familia.

// Si uso la lista original, pues hay pacientes en pediatria.
// Si uso la lista de los reasignados por no habrá pacientes en pediatría, y el pediatra se podrá ir.


const hayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let existenPacientesEnPediatria = false;

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      existenPacientesEnPediatria = true
    }
  }
  return existenPacientesEnPediatria;
};

// Usando la lista original
console.log("Hay pacientes en pediatria en la lista original: ", hayPacientesDePediatria(pacientes))
// Usando la lista actualizada
console.log("Hay pacientes en pediatria en la lista actualizada: ", hayPacientesDePediatria(listaCompletaActualizada))


//----------------------
// APARTADOS OPCIONALES
// APARTADO 5
//----------------------

// Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a cardiología

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {

  let pacientesPorEspecilidad: NumeroPacientesPorEspecialidad;
  let totalEnPediatria = 0;
  let totalEnMedicinaDeFamilia = 0;
  let totalEnCardiologia = 0;

  for (let i = 0; i < pacientes.length; i++) {

    if (pacientes[i].especialidad === "Pediatra") {
      totalEnPediatria += 1;
    }

    if (pacientes[i].especialidad === "Medico de familia") {
      totalEnMedicinaDeFamilia += 1;
    }

    if (pacientes[i].especialidad === "Cardiólogo") {
      totalEnCardiologia += 1;
    }
  }

  pacientesPorEspecilidad = {
    medicoDeFamilia: totalEnMedicinaDeFamilia,
    pediatria: totalEnPediatria,
    cardiologia: totalEnCardiologia
  }

  return pacientesPorEspecilidad
};

console.log("Total pacientes por especialidades: ", cuentaPacientesPorEspecialidad(pacientes));



