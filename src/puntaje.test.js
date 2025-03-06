import puntuacion from "./puntaje.js";

describe("Marcador de puntaje de tenis", () => {
  it("en caso de que ambos jugadores tengan 0 el marcador es Love, Love", () => {
    expect(puntuacion(0, 0)).toEqual("Love - Love");
  });
});


