/*
Given an array of positive or negative integers

I= [i1,..,in]

you have to produce a sorted array P of the form

[ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java, C#, C, C++ and as an array of arrays in other languages.

Example:

I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]
[2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

Notes:

It can happen that a sum is 0 if some numbers are negative!
Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.
*/





///// SOLUTION /////////////
function isPrime(n) { 
  	if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
  	}
function sumOfDivided(lst) {
  //your code
  

  
  	 
  function primeFactors(n) {
  var result = []
  n=Math.abs(n)
  var i = 2
  while(n>0) {
  if(isPrime(i) && n % i ==0) {
  result.push(i)
  n= n%i
  console.log(i)
  }
  i++
  }
  return result
}
  var primes = []
  var result = []
  for(var j=0;j<lst.length;j++) {
  primes.push(primeFactors(lst[i]))
  } 
  lst= lst.flat().filter((item,index)=>  lst.indexOf(item) ===index).sort()
  for(var p of primes) {
  var sum = 0
  for(var j=0;j<lst.length;j++) {
  if( lst[j] % p ===0) {
  sum +=lst[j]
  }
  }
  result.push([p,sum])
  }
  return result
}
