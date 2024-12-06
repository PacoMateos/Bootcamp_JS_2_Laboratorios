
import { vi } from "vitest";
import { mensajes } from "./modelo";
import { makeCardNumber, makeCardValue, makeMessage, makeRandomNumber } from "./motor";


describe("comprobar ganador", () => {
  it("Debería devolver '¡Lo has clavado! ¡Enhorabuena!'; cuando el número es 7.5 ", ()=>{
    // Arrange
    const score: number = 7.5;
    // Act
    const resultado: string = makeMessage(score);
    // Assert
    expect(resultado).toBe(mensajes.mensaje_con_7_y_media);
  });

  it("Debería devolver 'GAME OVER 💥'; cuando el número es 8 o más ", ()=>{
    // Arrange
    const score: number = 8;
    // Act
    const resultado: string = makeMessage(score);
    // Assert
    expect(resultado).toBe(mensajes.mensaje_con_8_o_mas);
  });

  it("Debería devolver 'Casi casi...'; cuando el número está en el rango (5, 7]", ()=>{
    // Arrange
    const score: number = 7;
    // Act
    const resultado: string = makeMessage(score);
    // Assert
    expect(resultado).toBe(mensajes.mensaje_entre_5_y_7);
  });

  it("Debería devolver 'Te ha entrado el canguelo eh?'; cuando el número está en el rango (4, 5]", ()=>{
    // Arrange
    const score: number = 5;
    // Act
    const resultado: string = makeMessage(score);
    // Assert
    expect(resultado).toBe(mensajes.mensaje_entre_4_y_5);
  });

  it("Debería devolver 'Has sido muy conservador'; cuando el número está en el rango (0, 4]", ()=>{
    // Arrange
    const score: number = 4;
    // Act
    const resultado: string = makeMessage(score);
    // Assert
    expect(resultado).toBe(mensajes.mensaje_entre_0_y_4);
  });
});


// CASO OPCIONAL 1.

// Nota: La función makeRandomNumber --> Math.floor((Math.random() * 10) + 1), devuelve números entre 1 y 10 ambos incluidos y con la misma distribución estadística.

// Nota:  Math.floor((Math.random()*11)), devuelve números entre 1 y 10 ambos incluidos, pero sin la misma distribución estadistica. 

// Analizamos la función makeRandomNumber.

describe ("Comprobar generar numero entre 1 y 10, ambos incluidos", () => {
  it("Debería devolver '1'; cuando math.random esta en el rango [0.000, 0.049], probamos con 0.049", ()=>{
    // Arrange
    const numeroEsperado: number = 1;
    vi.spyOn(global.Math, "random").mockReturnValue(0.049);
    // Act
    const resultado: number = makeRandomNumber();
    // Assert
    expect(resultado).toBe(numeroEsperado);
  });

  it("Debería devolver '1'; cuando math.random esta en el rango [0.000, 0.049], probamos con 0.000", ()=>{
    // Arrange
    const numeroEsperado: number = 1;
    vi.spyOn(global.Math, "random").mockReturnValue(0.000);
    // Act
    const resultado: number = makeRandomNumber();
    // Assert
    expect(resultado).toBe(numeroEsperado);
  });

  it("Debería devolver '10'; cuando math.random esta en el rango [0.900, 0.999], probamos con 0.900", ()=>{
    // Arrange
    const numeroEsperado: number = 10;
    vi.spyOn(global.Math, "random").mockReturnValue(0.900);
    // Act
    const resultado: number = makeRandomNumber();
    // Assert
    expect(resultado).toBe(numeroEsperado);
  });

  it("Debería devolver '10'; cuando math.random esta en el rango [0.900, 0.999], probamos con 0.999", ()=>{
    // Arrange
    const numeroEsperado: number = 10;
    vi.spyOn(global.Math, "random").mockReturnValue(0.999);
    // Act
    const resultado: number = makeRandomNumber();
    // Assert
    expect(resultado).toBe(numeroEsperado);
  });
})

// Analizamos la función makeCardNumber

describe("Comprobar generar numeros de carta 1, 2, 3, 4, 5, 6, 7, 10, 11, 12", () => {
 it("Debería generar el mismo valor cuando se pasa un número en el rango [1, 7], probamos con el 1", () => {
   // Arrange
   const numeroEsperado: number = 1;
   const numeroProbado: number = 1;
   // Act
   const resultado: number = makeCardNumber(numeroProbado);
   // Assert
   expect(resultado).toBe(numeroEsperado);
 });

 it("Debería generar el mismo valor cuando se pasa un número en el rango [1, 7], probamos con el 7", () => {
  // Arrange
  const numeroEsperado: number = 7;
  const numeroProbado: number = 7;
  // Act
  const resultado: number = makeCardNumber(numeroProbado);
  // Assert
  expect(resultado).toBe(numeroEsperado);
});

it("Debería generar el mismo valor cuando se pasa un número en el rango [8, 10], probamos con el 8", () => {
  // Arrange
  const numeroEsperado: number = 10;
  const numeroProbado: number = 8;
  // Act
  const resultado: number = makeCardNumber(numeroProbado);
  // Assert
  expect(resultado).toBe(numeroEsperado);
});

it("Debería generar el mismo valor cuando se pasa un número en el rango [8, 10], probamos con el 9", () => {
  // Arrange
  const numeroEsperado: number = 11;
  const numeroProbado: number = 9;
  // Act
  const resultado: number = makeCardNumber(numeroProbado);
  // Assert
  expect(resultado).toBe(numeroEsperado);
});

it("Debería generar el mismo valor cuando se pasa un número en el rango [8, 10], probamos con el 10", () => {
  // Arrange
  const numeroEsperado: number = 12;
  const numeroProbado: number = 10;
  // Act
  const resultado: number = makeCardNumber(numeroProbado);
  // Assert
  expect(resultado).toBe(numeroEsperado);
});

});

// CASO OPCIONAL 2.
// Analizamos la función makeCardValue

describe("Comprobar que el valor de la carta generada es 0.5 en el rango > 7", ()=>{
  it("Debería generar un valor de 0.5, cuando la carta es mayor de 7. Probamos con 10", ()=>{
    
    // Arrange
    const numeroEsperado: number = 0.5;
    const numeroProbado: number = 10;
    // Act
    const resultado: number = makeCardValue(numeroProbado);
    // Assert
    expect(resultado).toBe(numeroEsperado);

  });
  it("Debería generar un valor de 0.5, cuando la carta es mayor de 7. Probamos con 11", ()=>{
    
    // Arrange
    const numeroEsperado: number = 0.5;
    const numeroProbado: number = 11;
    // Act
    const resultado: number = makeCardValue(numeroProbado);
    // Assert
    expect(resultado).toBe(numeroEsperado);

  });
  it("Debería generar un valor de 0.5, cuando la carta es mayor de 7. Probamos con 12", ()=>{
    
    // Arrange
    const numeroEsperado: number = 0.5;
    const numeroProbado: number = 10;
    // Act
    const resultado: number = makeCardValue(numeroProbado);
    // Assert
    expect(resultado).toBe(numeroEsperado);

  });
  it("Debería generar el mismo valor, cuando la carta es 7 o menos.  Probamos con 1", ()=>{
    
    // Arrange
    const numeroEsperado: number = 1;
    const numeroProbado: number = 1;
    // Act
    const resultado: number = makeCardValue(numeroProbado);
    // Assert
    expect(resultado).toBe(numeroEsperado);

  });
  it("Debería generar el mismo valor, cuando la carta es 7 o menos.  Probamos con 7", ()=>{
    
    // Arrange
    const numeroEsperado: number = 7;
    const numeroProbado: number = 7;
    // Act
    const resultado: number = makeCardValue(numeroProbado);
    // Assert
    expect(resultado).toBe(numeroEsperado);

  });
})

