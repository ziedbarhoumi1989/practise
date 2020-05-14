/*
Given a 2D array and a number of generations, compute n timesteps of Conway's Game of Life.

The rules of the game are:

Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
Any live cell with more than three live neighbours dies, as if by overcrowding.
Any live cell with two or three live neighbours lives on to the next generation.
Any dead cell with exactly three live neighbours becomes a live cell.
Each cell's neighborhood is the 8 cells immediately around it (i.e. Moore Neighborhood). The universe is infinite in both the x and y dimensions and all cells are initially dead - except for those specified in the arguments. The return value should be a 2d array cropped around all of the living cells. (If there are no living cells, then return [[]].)

For illustration purposes, 0 and 1 will be represented as ░░ and ▓▓ blocks respectively (PHP, C: plain black and white squares). You can take advantage of the htmlize function to get a text representation of the universe, e.g.:

console.log(htmlize(cells));
*/




// solution/////////////
  function cropped(cells){
    /*  In a grid with (0,0) as top left:
        leftmost: x val closest to 0
        rightmost: x val furthest from 0
        uppermost: y val closest to 0
        lowermost: y val furthest from 0  */
        
       leftmost = cells[0].length, rightmost = 0, uppermost = cells.length, lowermost =0;
      for (var i = 0; i < cells.length; i++)
          for (var j = 0; j < cells[i].length; j++)
              if (cells[i][j] == 1){
                  if (i < uppermost)
                      uppermost = i;
                  if (i > lowermost)
                      lowermost = i;
                  if (j < leftmost)
                      leftmost = j;
                  if (j > rightmost)
                      rightmost = j;
              }
        
       cropped = [];  
      for (var i = uppermost; i <= lowermost; i++)
          for (var j = leftmost; j <= rightmost; j++)
              cropped[i - uppermost][j-leftmost] = cells[i][j];
      return cropped;
  }
  function getGeneration( cells, generations) {

    if ( generations < 1)  //base
        return cropped(cells);
        
    var resized = []; //scope of universe expands 1 lvl ring outward
      
    for (var i = 0; i < cells.length; i++)
        for (var j = 0; j < cells[i].length; j++)
            resized[i+1][j+1] = cells[i][j];            //put old universe at center of new universe
      
      
    var nextgen = [];  
    var cell = 0;
    var weight = 0;
    var x = 0 ;
    var y = 0;
    var endx = 0;
    var endy = 0;
    var searchabove = false;var searchbelow = false;var searchleft = false; var searchright = false;
    
    for (var i = 0; i < resized.length; i++){
      if (i-1 >= 0) searchabove = true; else searchabove = false;
      if (i + 1 < resized.length) searchbelow = true; else searchbelow = false;
        
      for (var j = 0; j < resized[i].length; j++){
        
        cell = resized[i][j];
        if (j-1 >= 0) searchleft = true; else searchleft = false;
        if (j+1 < resized[i].length) searchright = true; else searchright = false;

        weight = 0;
        if (searchabove) x = i - 1; else x = i;
        if (searchbelow) endx = i + 1; else endx = i;
        if (searchleft) y = j - 1; else y = j;
        if (searchright) endy = j + 1; else endy = j;

        for (;x <= endx; x++)
            for (var p = y; p <= endy; p++)  //p reset to = y on every iter of x loop
                weight += resized[x][p];
            
        weight -= cell;  //weight is num of live neighbors (so remove value of self)

        if (cell == 1 && (weight < 2 || weight > 3))
          nextgen[i][j] = 0;
        else if (cell == 0 && weight == 3)
          nextgen[i][j] = 1;
        else
          nextgen[i][j] = cell;
      }
    }
    nextgen = cropped(nextgen); //crop array around furthest living cells
    return  getGeneration(nextgen, generations-1); //recursion to start next gen cycle
  }