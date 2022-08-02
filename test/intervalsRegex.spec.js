describe("Intervalos de concurrencias.", () => {
  it("Generando un intervalo de coincidencia debe contener tres números.", () => {
    const sentence = "El 496 es mi número favorito.";
    const pattern = /[0-9]{3}/;

    expect(pattern.test(sentence)).toBeTruthy();
  });

  it("Falla porque debe comenzar con tres números.", () => {
    const sentence = "el 496 es mi número favorito.";
    const pattern = /^[0-9]{3}/;

    expect(pattern.test(sentence)).toBeFalsy();
  });

  it("Comienza con tres números.", () => {
    const sentence = "496 es mi número favorito.";
    const pattern = /^[0-9]{3}/;

    expect(pattern.test(sentence)).toBeTruthy();
  });

  it("No termina con tres números por lo tanto falla.", () => {
    const sentence = "El 496 es mi número favorito";
    const pattern = /[0-9]{3}$/;

    expect(pattern.test(sentence)).toBeFalsy();
  });

  it("Termina con tres números.", () => {
    const sentence = "Mi número favorito es el 496";
    const pattern = /[0-9]{3}$/;

    expect(pattern.test(sentence)).toBeTruthy();
  });

  it("No pasa la regex porque debe tener solamente tres números.", () => {
    const sentence = "Mi número favorito es el 496";
    const pattern = /^([0-9]{3})$/;

    expect(pattern.test(sentence)).toBeFalsy();
  });

  it("Debe tener solamente tres números.", () => {
    const sentence = "496";
    const pattern = /^([0-9]{3})$/;

    expect(pattern.test(sentence)).toBeTruthy();
  });
});
