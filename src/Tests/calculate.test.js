import calculate from '../logic/calculate';
import operate from '../logic/operate';
// Mock the operate function so we can test the calculation logic separately
jest.mock('../logic/operate', () => jest.fn());
// Helper function to create an initial calculator object
const createCalculatorObject = (total, next, operation) => ({
  total,
  next,
  operation,
});
describe('calculate', () => {
  beforeEach(() => {
    operate.mockReset();
  });
  describe('when buttonName is a number', () => {
    it('returns the updated calculator object with the number added to next', () => {
      const obj = createCalculatorObject('5', '3', '+');
      const buttonName = '2';
      const expected = {
        total: '5',
        next: '32',
        operation: '+',
      };
      const actual = calculate(obj, buttonName);
      expect(actual).toEqual(expected);
    });
    it('returns the updated calculator object with the number added to next and clears the value if next is "0"', () => {
      const obj = createCalculatorObject(null, '0', null);
      const buttonName = '5';
      const expected = {
        next: '5',
        total: null,
      };
      const actual = calculate(obj, buttonName);
      expect(actual).toEqual(expected);
    });
    it('returns the updated calculator object with the number as next if there is no operation', () => {
      const obj = createCalculatorObject(null, null, null);
      const buttonName = '7';
      const expected = {
        next: '7',
        total: null,
      };
      const actual = calculate(obj, buttonName);
      expect(actual).toEqual(expected);
    });
  });
  describe('when buttonName is "."', () => {
    it('returns the updated calculator object with next set to "0." if there is an operation and no next', () => {
      const obj = createCalculatorObject('10', null, 'x');
      const buttonName = '.';
      const expected = {
        next: '0.',
        operation: 'x',
        total: '10',
      };
      const actual = calculate(obj, buttonName);
      expect(actual).toEqual(expected);
    });
  });
});
