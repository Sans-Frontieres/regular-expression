describe("Validación de nombres propios.", () => {
  it("Juan pasa la validación", () => {
    const pattern = /^[A-Z]{1}[a-z]{1,}$/;

    expect(pattern.test("Juan")).toBeTruthy();
  });

  it("Juan123 no pasa la validación", () => {
    const pattern = /^[A-Z]{1}[a-z]{1,}$/;

    expect(pattern.test("Juan123")).toBeFalsy();
  });

  it("Nombre-Apellido válido", () => {
    const pattern = /^[A-Z]{1}[a-z]{1,}-[A-Z]{1}[a-z]{1,}$/;

    expect(pattern.test("Juan-Juarez")).toBeTruthy();
  });

  it("Nombre-Apellido inválido", () => {
    const pattern = /^[A-Z]{1}[a-z]{1,}-[A-Z]{1}[a-z]{1,}$/;

    expect(pattern.test("Juan-juarez")).toBeFalsy();
  });

  it("Nombre Apellido válido", () => {
    const pattern = /^[A-Z]{1}[a-z]{1,}\s[A-Z]{1}[a-z]{1,}$/;

    expect(pattern.test("Juan Juarez")).toBeTruthy();
  });

  it('Nombre Apellido válido con "-" y "espacio" condicional.', () => {
    const pattern = /^[A-Z]{1}[a-z]{1,}\s?-?[A-Z]{1}[a-z]{1,}$/;

    expect(pattern.test("Juan Juarez")).toBeTruthy();
    expect(pattern.test("Juan-Juarez")).toBeTruthy();
    expect(pattern.test("JuanJuarez")).toBeTruthy();
  });
});
