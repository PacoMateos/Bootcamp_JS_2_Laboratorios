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
  const pacientesAsignadosAPediatria: Pacientes[] = pacientes.filter(paciente => paciente.especialidad === "Pediatra")
  return pacientesAsignadosAPediatria
};

// Array con los pacientes de pediatria.
console.log("Lista de pacientes en Pediatría: ", obtenPacientesAsignadosAPediatria(pacientes));


// b) Extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {
  const pacientesAsignadosAPediatriaYmenorDeDiezAnios: Pacientes[] = pacientes.filter((paciente) => paciente.edad < 10 && paciente.especialidad === "Pediatra");
  return pacientesAsignadosAPediatriaYmenorDeDiezAnios
};

// Array con los pacientes de pediatria con menos de diez años.
console.log("Lista de pacientes en Pediatría menores de 10 años: ", obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

//------------
// APARTADO 2
//------------

// Crear una función que devuelve true/false dependiendo si se da la condición: pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.

// Entendemos que se deben dar las dos condiciones a la vez para que se active el protocolo de urgencia.
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  const activarProtocolo = pacientes.some((paciente) => {
    paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39
  });
  return activarProtocolo;
}

// Activar protocolo de urgencia.
console.log("Activar protocolo de urgencia: ", activarProtocoloUrgencia(pacientes))


//------------
// APARTADO 3
//------------

// NOTA: No queda claro si hay que hacer solo un array con los reasignados, o una lista completa incluyendo los reasignados

// Lista de reasignados de Pediatria a Medicina de familia.
const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
  let especialidad: Especialidad = "Medico de familia"
  const pacientesReasignados: Pacientes[] = pacientes.filter(paciente => paciente.especialidad === "Pediatra").map((paciente) => {
    return {
      ...paciente,
      especialidad: especialidad
    }
  });
  return pacientesReasignados
};

const listaDeReasignados = reasignaPacientesAMedicoFamilia(pacientes);
console.log("Lista de reasignados de Pediatria a Medicina de familia", listaDeReasignados);

// Lista completa y actualizada con todas los reasignados de Pediatria a Medicina de familia y no reasignados
const generaListaCompletaYActualiada = (pacientes: Pacientes[]): Pacientes[] => {
  const pacientesNoReasignados: Pacientes[] = pacientes.filter(paciente => paciente.especialidad !== "Pediatra");
  const pacientesReasignados: Pacientes[] = reasignaPacientesAMedicoFamilia(pacientes);
  const listaActualizada: Pacientes[] = [...pacientesNoReasignados, ...pacientesReasignados]
  return listaActualizada
};

// Lista completa actualizada
const listaCompletaActualizada = generaListaCompletaYActualiada(pacientes)
console.log("Lista completa y actual despues de la reasignación: ", listaCompletaActualizada)


//------------
// APARTADO 4
//------------

// Comprobar si en la lista hay algún paciente asignado a pediatría.

// He mantenido inmutable el array original en todos los ejercicios. Para hacer el apartado 4, debería saber qué lista utilizamos: la lista original o la lista actualizada.

// Si uso la lista original, pues hay pacientes en pediatria.
// Si uso la lista de los reasignados por no habrá pacientes en pediatría, y el pediatra se podrá ir.


const hayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  const existenPacientesEnPediatria = pacientes.some((paciente) => {
    paciente.especialidad === "Pediatra"
  });
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

// Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y los que están asignados a Pediatría y a Cardiología.

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {

  let pacientesPorEspecilidad: NumeroPacientesPorEspecialidad;
  // let totalEnPediatria = 0;
  // let totalEnMedicinaDeFamilia = 0;
  // let totalEnCardiologia = 0;

  const totalEnPediatria: number = pacientes.filter(paciente => paciente.especialidad === "Pediatra").length
  const totalEnMedicinaDeFamilia: number = pacientes.filter(paciente => paciente.especialidad === "Medico de familia").length
  const totalEnCardiologia: number = pacientes.filter(paciente => paciente.especialidad === "Cardiólogo").length
  
  pacientesPorEspecilidad = {
    medicoDeFamilia: totalEnMedicinaDeFamilia,
    pediatria: totalEnPediatria,
    cardiologia: totalEnCardiologia
  }

  return pacientesPorEspecilidad
};

console.log("Total pacientes por especialidades: ", cuentaPacientesPorEspecialidad(pacientes));


console.log("LISTA ORIGINAL, inmutable: ", pacientes); 