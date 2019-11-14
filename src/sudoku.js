export function Square(input, row, column) {
  this.input = input,
  this.row = row,
  this.column = column;
}

Square.prototype.getInput = function() {
  if (isNaN(this.input)) {
    return 'Please enter a number.';
  } else if ((this.input > 9 || this.input < 1) || (this.row > 9 || this.row < 1) || (this.column > 9 || this.column < 1)){
    return 'Please enter a number between 1 and 9.';
  }
}
// || ((this.row > 9) && (this.row < 1)) || ((this.column > 9) && (this.column < 1))){

// Sudoku.prototype.getRow() {
//   if (isNaN(this.row)){
//     return 'Please enter a number';
//   }
// }

// Sudoku.prototype.getColumn() {
//
// }
