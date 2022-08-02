describe("Validación de números de teléfono.", () => {
  it("Validación de un número fijo.", () => {
    const phone = "2972-410686";
    const pattern = /^\d{4}-\d{6}$/;

    expect(pattern.test(phone)).toBeTruthy();
  });

  it("Validación de un número fijo con espacios.", () => {
    const phone = "2972 410686";
    const pattern = /^\d{4}\s\d{6}$/;

    expect(pattern.test(phone)).toBeTruthy();
  });

  it("Validación de un número fijo con espacios ó guion opcional.", () => {
    const phone = "2972 410686";
    const phone2 = "2972-410686";
    const pattern = /^\d{4}\s?-?\d{6}$/;

    expect(pattern.test(phone)).toBeTruthy();
    expect(pattern.test(phone2)).toBeTruthy();
  });

  it("Validación de un teléfono celular.", () => {
    const mobil = "+54 92 4161 5555";
    const pattern = /^\+\d{2}\s\d{2}\s\d{4}\s\d{4}$/;

    expect(pattern.test(mobil)).toBeTruthy();
  });

  it("Validación de un teléfono celular con guiones.", () => {
    const mobil = "+54 92-4161-5555";
    const pattern = /^\+\d{2}\s\d{2}-\d{4}-\d{4}$/;

    expect(pattern.test(mobil)).toBeTruthy();
  });

  it("Validación de un teléfono celular con guiones opcionales.", () => {
    const mobil = "+54 92-4161-5555";
    const mobil2 = "+54 92 4161 5555";
    const pattern = /^\+\d{2}\s\d{2}\s?-?\d{4}\s?-?\d{4}$/;

    expect(pattern.test(mobil)).toBeTruthy();
    expect(pattern.test(mobil2)).toBeTruthy();
  });
});
