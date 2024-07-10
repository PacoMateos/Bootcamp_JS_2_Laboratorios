
// Obtener turno actual en pantalla
function getTurn():number{
  const turnElement = document.getElementById("turno-actual");
  let currentTurn: number = 0;
    if (turnElement !== null && turnElement !== undefined) {
        currentTurn = parseInt(turnElement.innerHTML);
    }
    return currentTurn;
}

// Calcular turno siguiente y mostarlo en pantalla
function setNextTurn():void {
  let turn = getTurn();
  turn += 1;
  showTurn(turn);  
}

// Calcular turno anterior y mostrarlo en pantalla
function setPreviousTurn():void {
  let turn = getTurn();
  turn -= 1;
  if (turn < 0) {
    let msg:string = "no hay turnos negativos";
    console.log(msg);
    alert(msg);
  }
  else{
    showTurn(turn);
  }
}

// Resetear el turno a cero y mostrarlo por pantalla
function resetTurn():void {
  let turn = getTurn();
  turn = 0;
  showTurn(turn);
}

// Mostrar un turno 
function showTurn(turn:number):void{
  const turnElement = document.getElementById("turno-actual");
    if (turnElement !== null && turnElement !== undefined) {
      turnElement.innerHTML = turn.toString().padStart(2,'0');
    }
}

// Establecer un turno personalizado y mostrarlo por pantalla
function setCustomTurn() {
  const inputElement = document.getElementById("input-turn");
    if(inputElement !== null && inputElement !== undefined && inputElement instanceof HTMLInputElement) {
      
      if (inputElement.value === ""){
        let msg:string = "debes introducir un número"
        console.log(msg);
        alert(msg);
      }
      else if (parseInt(inputElement.value) < 0) {
        let msg:string = "debes introducir un número positivo"
        console.log(msg);
        alert(msg);
      }
      else {
        let turn = parseInt(inputElement.value);
        showTurn(turn);
        inputElement.value = "";
      }
      
    }
}

// Establecer manejador de eventos de los botones
// Botones: siguiente, anterior, reseteo, cambio

const btnNextElement = document.getElementById("boton-siguiente");
if (btnNextElement!== null && btnNextElement !== undefined && 
    btnNextElement instanceof HTMLButtonElement) {
        btnNextElement.addEventListener("click", setNextTurn);
}

const btnPreviousElement = document.getElementById("boton-anterior");
if (btnPreviousElement!== null && btnPreviousElement !== undefined && 
    btnPreviousElement instanceof HTMLButtonElement) {
        btnPreviousElement.addEventListener("click", setPreviousTurn);
}

const btnResetElement = document.getElementById("boton-reset");
if (btnResetElement!== null && btnResetElement !== undefined && 
    btnResetElement instanceof HTMLButtonElement) {
        btnResetElement.addEventListener("click", resetTurn);
}

const btnChangeElement= document.getElementById("boton-cambiar");
if (btnChangeElement!== null && btnChangeElement!== undefined && 
    btnChangeElement instanceof HTMLButtonElement) {
      btnChangeElement.addEventListener("click", setCustomTurn);
}


