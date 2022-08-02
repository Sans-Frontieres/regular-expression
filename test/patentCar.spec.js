describe("Validación de patentes.", () => {
  it('Patente "AA 564 BB" valida.', () => {
    const sentence = "AA 564 BB";
    const pattern = /^[A-Z]{2}\s[0-9]{3}\s[A-Z]{2}$/;

    expect(pattern.test(sentence)).toBeTruthy();
  });

  it('Patente "AA 564 99" invalida.', () => {
    const sentence = "AA 564 99";
    const pattern = /^[A-Z]{2}\s[0-9]{3}\s[A-Z]{2}$/;

    expect(pattern.test(sentence)).toBeFalsy();
  });

  it('Patente "AA 564 99" validada con metacaracteres.', () => {
    const sentence = "AA 564 99";
    const pattern = /^[A-Z]{2}\s\d{3}\s[A-Z]{2}$/;

    expect(pattern.test(sentence)).toBeFalsy();
  });
});
