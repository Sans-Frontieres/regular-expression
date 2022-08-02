describe("Validando contraseñas.", () => {
  it("Contraseña con letras de la a-z en minuscula", () => {
    const password = "mipassword";
    const pattern = /[a-z]/;

    expect(pattern.test(password)).toBeTruthy();
  });

  it("Contraseña con letras de la a-z en minuscula es invalida", () => {
    const password = "MIPASSWORD";
    const pattern = /[a-z]/;

    expect(pattern.test(password)).toBeFalsy();
  });

  it("Contraseña que contenga números.", () => {
    const password = "1234456789";
    const pattern = /[0-9]/;

    expect(pattern.test(password)).toBeTruthy();
  });

  it("Validamos invalida debe contener números.", () => {
    const password = "mipassword";
    const pattern = /[0-9]/;

    expect(pattern.test(password)).toBeFalsy();
  });
});
