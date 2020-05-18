/*
A Hamming number is a positive integer of the form 2i3j5k, for some non-negative integers i, j, and k.

Write a function that computes the nth smallest Hamming number.

Specifically:

The first smallest Hamming number is 1 = 203050
The second smallest Hamming number is 2 = 213050
The third smallest Hamming number is 3 = 203150
The fourth smallest Hamming number is 4 = 223050
The fifth smallest Hamming number is 5 = 203051
The 20 smallest Hamming numbers are given in example test fixture.

Your code should be able to compute all of the smallest 5,000 (Clojure: 2000) Hamming numbers without timing out.
*/



//////////   SOLUTION     ///////////

function isPrime(n)
{

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
function convertPrimes(number) {
	var result = []
	var start =2;
	while(number>1) {
		if(number %start ==0 && isPrime(start)) {
			if(!result.includes(start)) {
				result.push(start)
			}
			number = number /start
		} else {
			start++
		}
	}
	if(!result.includes(2)&&start<=5) {
		result.push(2)
	}
	if(!result.includes(3)&&start<=5) {
		result.push(3)
	}
	if(!result.includes(5)&&start<=5) {
		result.push(5)
	}
	return result.sort().join('')

}
function hamming (n) {
  // TODO: Program me
  if(n == 1) {
  return 1
  }
  var count = 1;
  var result = 1
  while(count <=n) {
  result++
  if (convertPrimes(result) ==="235") {
  count++
  if(count == n) {
  return result
  }
  }
  }
}