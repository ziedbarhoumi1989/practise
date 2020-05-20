/*
ask
Give you an array ```nums```:
```
[1,2,3,4,5] ```

Your task is to return whether an increasing subsequence of length 3 exists or not in the array.

If there exists ```i, j, k``` such that ```nums[i] < nums[j] < nums[k]``` and ```0 ≤ i < j < k ≤ n-1```, return ```true```. 

If not, return ```false```.

```i,j,k``` can be continuous or discontinuous.

Because kata has a large data test, so your code should run within 8000ms.
Some examples:
```
increasingNumbers([1,2,3,4,5])  should return true
increasingNumbers([5,1,5,5,2,5,4])  should return true
increasingNumbers([1,2,3,1,2,1])  should return true
increasingNumbers([5,4,3,2,1])  should return false
increasingNumbers([1,1,1,1,1])  should return false
```
*/


///////solution /////


function increasingNumbers(nums) {
  //coding here...
  for(var i= 0;i<nums.length;i++) {
  var result= nums.slice(i).filter((item,j)=> item>nums[i])
  if(result.length>0 &&result[0]<result[1]){
  return true
  }
  }
  return false
  

}
