/*
Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

For example:

nextSmaller(21) == 12
nextSmaller(531) == 513
nextSmaller(2071) == 2017
Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

nextSmaller(9) == -1
nextSmaller(111) == -1
nextSmaller(135) == -1
nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
some tests will include very large numbers.
test data only employs positive integers.
*/


/////// SOLUTION /////////////

function permutations(string) {
  var arr = string.split(''), tmp = arr.slice(), heads = [], out = [];
  if(string.length == 1) return [string];
  arr.forEach(function(v, i, arr) {
    if(heads.indexOf(v) == -1) {
      heads.push(v);
      tmp.splice(tmp.indexOf(v), 1);
      permutations(tmp.join('')).forEach(function(w) {out.push(v + w);});
      tmp.push(v);
    }
  });
  return out;
}
function nextSmaller(n) {
  if(n <10) {
  return -1
  }
   var numberToString = n.toString();
   var array = permutations(numberToString)
   for (var i = 0;i <array.length;i++) {
   array[i] = Number(array[i])
   }
   array.sort()
   var index = array.indexOf(n)
   if(index-1>=0 &&array[index].toString().length ==array[index-1].toString().length &&array[index]>array[index-1]) {
   return array[index-1]} else {
   return -1   }
   
}