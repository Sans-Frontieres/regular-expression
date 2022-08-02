describe("Primeros test de validación de las regular expresion.", () => {
  it("Uso de una regex creada con new Regex", () => {
    const sentence = "Hoy será un gran dia soleado de verano.";
    const pattern = new RegExp("sol");

    expect(pattern.test(sentence)).toBeTruthy();
  });

  it('Cantidad de coincidencias para una regex "/ /"', () => {
    const sentence = "Hoy será un gran dia soleado de verano sol";
    const pattern = /sol/g;

    const matchers = sentence.match(pattern);

    expect(matchers.length).toEqual(2);
  });

  it("Cantidad de coincidencias distinguiendo mayusculas de minusculas", () => {
    const sentence = "Hoy será un gran dia soleado de verano Sol";
    const pattern = /sol/g;

    const matchers = sentence.match(pattern);

    expect(matchers.length).toEqual(1);
  });

  it("Cantidad de coincidencias sin distinguir mayusculas de minusculas", () => {
    const sentence = "Hoy será un gran dia soleado de verano Sol";
    const pattern = /sol/gi;

    const matchers = sentence.match(pattern);

    expect(matchers.length).toEqual(2);
  });
});
