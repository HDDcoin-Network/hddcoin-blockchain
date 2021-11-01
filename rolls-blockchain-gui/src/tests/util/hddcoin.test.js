const rolls = require('../../util/rolls');

describe('rolls', () => {
  it('converts number byte to rolls', () => {
    const result = rolls.byte_to_rolls(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string byte to rolls', () => {
    const result = rolls.byte_to_rolls('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number byte to rolls string', () => {
    const result = rolls.byte_to_rolls_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string byte to rolls string', () => {
    const result = rolls.byte_to_rolls_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number rolls to byte', () => {
    const result = rolls.rolls_to_byte(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string rolls to byte', () => {
    const result = rolls.rolls_to_byte('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number byte to colouredcoin', () => {
    const result = rolls.byte_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string byte to colouredcoin', () => {
    const result = rolls.byte_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number byte to colouredcoin string', () => {
    const result = rolls.byte_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string byte to colouredcoin string', () => {
    const result = rolls.byte_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to byte', () => {
    const result = rolls.colouredcoin_to_byte(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to byte', () => {
    const result = rolls.colouredcoin_to_byte('1000');

    expect(result).toBe(1000000);
  });
});
