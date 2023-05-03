import operate from '../logic/operate';

describe('operate', () => {
  test('adds two numbers', () => {
    expect(operate(2, 3, '+')).toBe('5');
  });

  test('subtracts two numbers', () => {
    expect(operate(5, 3, '-')).toBe('2');
  });

  test('multiplies two numbers', () => {
    expect(operate(2, 3, 'x')).toBe('6');
  });

  test('divides two numbers', () => {
    expect(operate(6, 3, '÷')).toBe('2');
  });

  test('returns error message for division by zero', () => {
    expect(operate(6, 0, '÷')).toBe("Can't divide by 0.");
  });

  test('returns error message for modulo by zero', () => {
    expect(operate(6, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  test('throws an error for unknown operation', () => {
    expect(() => operate(2, 3, '^')).toThrow("Unknown operation '^'");
  });
});
