import stripString from '../../utils/stripString';

describe('stripString', () => {
  test('should return string with numbers and lowercase letters only', () => {
    const testString = `T3st te/5t      tes't !"# ¤% &/( )= ? TEST  t3st ! !`;
    expect(stripString(testString)).toBe('t3st te5t test test t3st');
  });
});