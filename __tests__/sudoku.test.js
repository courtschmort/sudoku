import { Square } from './../src/sudoku.js';

describe('Sudoku', () => {
  test('The program will only accept numbers', () => {
    let input = new Square('A', 1, 1);
    expect(input.getInput()).toEqual('Please enter a number.');
  });
  test('The program will only accept numbers 1-9', () => {
    let something = new Square(10, 7, 7);
    expect(something.getInput()).toEqual('Please enter a number between 1 and 9.');
  });
  test('Each row contains all numbers from 1 to 9 with no repeats.', () => {
    let something = new Row;
    expect(something.getInput()).toEqual('Please enter a number between 1 and 9.');
});
