describe("Validación de un email.", () => {
  it("El email cumple con la estructura de la regex.", () => {
    const email = "example@email.com";
    const pattern = /^([a-z0-9_\.-]+)@([a-z\.]+)\.([a-z]{2,6})$/;

    expect(pattern.test("example.empresa@outlook.com.ar")).toBeTruthy();
  });

  it("El gamil cumple con la estructura de la regex.", () => {
    const email = "example@email.com";
    const pattern = /^([a-z0-9_\.-]+)@([a-z\.]+)\.([a-z]{2,6})$/;

    expect(pattern.test("example.empresa@gmail.com")).toBeTruthy();
  });

  it("Hotmail cumple con la estructura de la regex.", () => {
    const email = "example@email.com";
    const pattern = /^([a-z0-9_\.-]+)@([a-z\.]+)\.([a-z]{2,6})$/;

    expect(pattern.test("example@hotmail.com.es")).toBeTruthy();
  });

  it("Email inválido no cumple con la estructura de la regex.", () => {
    const email = "example@email.com";
    const pattern = /^([a-z0-9_\.-]+)@([a-z\.]+)\.([a-z]{2,6})$/;

    expect(pattern.test("example@hotmail.novalido")).toBeFalsy();
  });
});
