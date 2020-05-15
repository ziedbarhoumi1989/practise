/*
Write a method that takes a field for well-known board game "Battleship" as an argument and returns true if it has a valid disposition of ships, false otherwise. Argument is guaranteed to be 10*10 two-dimension array. Elements in the array are numbers, 0 if the cell is free and 1 if occupied by ship.

Battleship (also Battleships or Sea Battle) is a guessing game for two players. Each player has a 10x10 grid containing several "ships" and objective is to destroy enemy's forces by targetting individual cells on his field. The ship occupies one or more cells in the grid. Size and number of ships may differ from version to version. In this kata we will use Soviet/Russian version of the game.


Before the game begins, players set up the board and place the ships accordingly to the following rules:
There must be single battleship (size of 4 cells), 2 cruisers (size 3), 3 destroyers (size 2) and 4 submarines (size 1). Any additional ships are not allowed, as well as missing ships.
Each ship must be a straight line, except for submarines, which are just single cell.

The ship cannot overlap or be in contact with any other ship, neither by edge nor by corner.
*/


//// SOLUTION ////////


function findShip(x, y, field, visited, ships) {
  // should not be in contact with other ship by corner
  if (
      (field[x - 1] && (field[x - 1][y - 1] === 1 || field[x - 1][y + 1] === 1)) ||
      (field[x + 1] && (field[x + 1][y - 1] === 1 || field[x + 1][y + 1] === 1))
    ) return false;

  let k = 0, l = 0, m = 0;
  for (k = 0; k < ships.length; k += 1) {
    // horizontal
    for (l = 0; l < ships.length; l += 1) {
      if (!field[x][y + l] || field[x][y + l] === 0) break;
      // The ship cannot overlap or be in contact with any other ship
      if (l > 0 && field[x + 1] && field[x + 1][y + l] === 1) return false;
      visited[`(${x},${y + l})`] = true;
    }
    // vertical
    for (m = 0; m < ships.length; m += 1) {
      if (!field[x + m] || field[x + m][y] === 0) break;
      // The ship cannot overlap or be in contact with any other ship
      if (m > 0 && field[x + m][y + 1] === 1) return false;
      visited[`(${x + m},${y})`] = true;
    }
  }
  ships[Math.max(l, m) - 1][1] -= 1;
  return !(l > 1 && m > 1);
}
function validateBattlefield(field) {
  const ships = [[1, 4], [2, 3], [3, 2], [4, 1]];
  const visited = {};
  for (let i = 0; i < field.length; i += 1) {
    for (let j = 0; j < field[i].length; j += 1) {
      if (ships.every(val => val[1] === 0) && field[i][j] === 1) return false;
      if (!visited[`(${i},${j})`] && field[i][j] === 1) {
        if (!findShip(i, j, field, visited, ships)) return false;
      }
    }
  }
  return ships.every(val => val[1] === 0);
}