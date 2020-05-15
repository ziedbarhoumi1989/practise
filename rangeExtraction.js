/*
A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example ("12, 13, 15-17")
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-6,-3-1,3-5,7-11,14,15,17-20"
*/



//// SOLUTION  	////////////////////

function solution(list){
    let output = [];
    let workingRange = [];
    function convertToRange(array) {
      let str = `${Math.min(...array)}-${Math.max(...array)}`;
      return str;
    }
    let ranging = false;
    for (i = 0; i < list.length; i++) {
        if (list[i + 2] === list[i] + 2) {
            ranging = true;
        }
        if (list[i + 1] !== list[i] + 1) { //next number not sequence
            ranging = false;
            if (workingRange.length >= 1) { //if working range full
                workingRange.push(list[i]);
                output.push(convertToRange(workingRange));
                workingRange = [];
            }
            else { //if workingrange is empty
                output.push(String(list[i]));
            }
        }
        else { //next number is in sequence
            if (ranging) {
                workingRange.push(list[i]);
            }
            else {
                output.push(String(list[i]));
            }
        }
    }
    output = output.join(',');
    return output;
}
