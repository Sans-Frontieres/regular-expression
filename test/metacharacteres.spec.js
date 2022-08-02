describe("Metacaracteres especiales.", () => {
  it("Detectando números que tengan un espacio en blanco delante y detrás.", () => {
    const sentence = "Mi cumpleaños es el 09 de 1989 ✊🏻";
    const pattern = /\s[0-9]{1,}\s/g;

    const matchers = sentence.match(pattern);

    expect(matchers.length).toEqual(2);
  });

  it("Detectando 4 números que tengan un espacio en blanco delante y detrás.", () => {
    const sentence = "Mi cumpleaños es el 09 de 1989 ✊🏻";
    const pattern = /\s[0-9]{4}\s/g;

    const matchers = sentence.match(pattern);

    expect(matchers.length).toEqual(1);
  });

  it("Detectando números que tengan un espacio en blanco detras.", () => {
    const sentence = "Mi cumpleaños es el 09 de 1989.";
    const pattern = /[0-9]{1,}\s/g;

    const matchers = sentence.match(pattern);

    expect(matchers.length).toEqual(1);
  });

  it('Usando "d que identifica [0-9]" valida que tenga un rango de 4 números en la frase.', () => {
    const sentence = "Mi cumpleaños es el 09 de 1989.";
    const pattern = /\d{4}/;

    expect(pattern.test(sentence)).toBeTruthy();
  });

  it('Usando "w que identifica [a-zA-Z0-9]" username debe tener mas de 6 caracteres.', () => {
    const username = "nikodev";
    const pattern = /\w{6}/;

    expect(pattern.test(username)).toBeTruthy();
  });

  it('Usando "w que identifica [a-zA-Z0-9]" username puede combinar números y letras.', () => {
    const username = "nikodev8901";
    const pattern = /\w/;

    expect(pattern.test(username)).toBeTruthy();
  });

  it('Usando "w que identifica [a-zA-Z0-9]" username invalido.', () => {
    const username = "niko";
    const pattern = /\w{6}/;

    expect(pattern.test(username)).toBeFalsy();
  });
});
