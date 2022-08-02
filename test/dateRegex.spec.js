describe("Validación de fechas.", () => {
  it("Validación exitosa del año.", () => {
    const _1989 = 1989;
    const _1999 = 1999;
    const _2000 = 2000;
    const pattern = /^[12]\d{3}$/;

    expect(pattern.test(_1989)).toBeTruthy();
    expect(pattern.test(_1999)).toBeTruthy();
    expect(pattern.test(_2000)).toBeTruthy();
  });

  it("Año invalido para la regex de fechas.", () => {
    const _0989 = 989;
    const _3000 = 3000;
    const pattern = /^[12]\d{3}$/;

    expect(pattern.test(_0989)).toBeFalsy();
    expect(pattern.test(_3000)).toBeFalsy();
  });

  it("Validación exitosa del mes.", () => {
    const enero = "01";
    const octubre = 10;
    const diciembre = 12;
    const pattern = /(0[1-9]|1[0-2])/;

    expect(pattern.test(enero)).toBeTruthy();
    expect(pattern.test(octubre)).toBeTruthy();
    expect(pattern.test(diciembre)).toBeTruthy();
  });

  it("Validación erronea del mes.", () => {
    const antes_enero = "00";
    const despues_diciembre = 13;
    const pattern = /(0[1-9]|1[0-2])/;

    expect(pattern.test(antes_enero)).toBeFalsy();
    expect(pattern.test(despues_diciembre)).toBeFalsy();
  });

  it("Validación exitosa del día.", () => {
    const primero = "01";
    const _10 = 10;
    const _11 = 11;
    const _20 = 20;
    const _29 = 29;
    const _31 = 31;
    const pattern = /(0[1-9]|1[\d]|[1,2]\d|3[0-1])/;

    expect(pattern.test(primero)).toBeTruthy();
    expect(pattern.test(_10)).toBeTruthy();
    expect(pattern.test(_11)).toBeTruthy();
    expect(pattern.test(_20)).toBeTruthy();
    expect(pattern.test(_29)).toBeTruthy();
    expect(pattern.test(_31)).toBeTruthy();
  });

  it("Validación erronea del día.", () => {
    const _00 = "00";
    const _32 = 32;
    const pattern = /(0[1-9]|1[\d]|[1,2]\d|3[0-1])/;

    expect(pattern.test(_00)).toBeFalsy();
    expect(pattern.test(_32)).toBeFalsy();
  });

  it('Validación exitosa de la fecha "1989-01-09".', () => {
    const date = "1989-01-09";
    const pattern = /([12]\d{3})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[0-1])/;

    expect(pattern.test(date)).toBeTruthy();
  });

  it('Validación erronea de la fecha "3000-01-09".', () => {
    const date = "3000-01-09";
    const pattern = /([12]\d{3})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[0-1])/;

    expect(pattern.test(date)).toBeFalsy();
  });

  it('Validación erronea de la fecha "1989-13-09".', () => {
    const date = "1989-13-09";
    const pattern = /([12]\d{3})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[0-1])/;

    expect(pattern.test(date)).toBeFalsy();
  });

  it('Validación erronea de la fecha "1989-01-32".', () => {
    const date = "1989-01-32";
    const pattern = /([12]\d{3})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[0-1])/;

    expect(pattern.test(date)).toBeFalsy();
  });

  it('Validación exitosa de la fecha "1989 01 09".', () => {
    const date = "1989 01 09";
    const pattern = /([12]\d{3})\s(0[1-9]|1[0-2])\s(0[1-9]|[12]\d|3[0-1])/;

    expect(pattern.test(date)).toBeTruthy();
  });

  it('Validación erronea de la fecha "3000 01 09".', () => {
    const date = "3000 01 09";
    const pattern = /([12]\d{3})\s(0[1-9]|1[0-2])\s(0[1-9]|[12]\d|3[0-1])/;

    expect(pattern.test(date)).toBeFalsy();
  });

  it('Validación erronea de la fecha "1989 13 09".', () => {
    const date = "1989 13 09";
    const pattern = /([12]\d{3})\s(0[1-9]|1[0-2])\s(0[1-9]|[12]\d|3[0-1])/;

    expect(pattern.test(date)).toBeFalsy();
  });

  it('Validación erronea de la fecha "1989 01 32".', () => {
    const date = "1989 01 32";
    const pattern = /([12]\d{3})\s(0[1-9]|1[0-2])\s(0[1-9]|[12]\d|3[0-1])/;

    expect(pattern.test(date)).toBeFalsy();
  });

  it('Validación exitosa de la fecha "1989-01-09" con guiones opcionales.', () => {
    const date = "1989-01-09";
    const date2 = "1989 01 09";
    const pattern =
      /([12]\d{3})\s?-?(0[1-9]|1[0-2])\s?-?(0[1-9]|[12]\d|3[0-1])/;

    expect(pattern.test(date)).toBeTruthy();
  });

  it('Validación erronea de la fecha "1989-01-09" con guiones opcionales.', () => {
    const date = "3000-01-09";
    const date2 = "3000 01 09";
    const pattern =
      /([12]\d{3})\s?-?(0[1-9]|1[0-2])\s?-?(0[1-9]|[12]\d|3[0-1])/;

    expect(pattern.test(date)).toBeFalsy();
    expect(pattern.test(date2)).toBeFalsy();
  });
});
