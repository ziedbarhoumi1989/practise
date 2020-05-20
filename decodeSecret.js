/*
General Patron is faced with a problem , his intelligence has intercepted some secret messages from the enemy but they are all encrypted. Those messages are crucial to getting the jump on the enemy and winning the war. Luckily intelligence also captured an encoding device as well. However even the smartest programmers weren't able to crack it though. So the general is asking you , his most odd but brilliant programmer.

You can call the encoder like this.

console.log (device.encode ('What the hell')) ;
Our cryptoanalysts kept poking at it and found some interesting patterns.

console.log (device.encode ('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')) ;
console.log (device.encode ('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb')) ;  
console.log (device.encode ('!@#$%^&*()_+-')) ;
console.log ('abcdefghijklmnopqrstuvwxyz') ;
console.log ('abcdefghijklmnopqrstuvwxyz'.split ('').map (function (a) {
  return device.encode (a) ;
}).join ('')) ;
console.log ('abcdefghijklmnopqrstuvwxyz'.split ('').map (function (a) {
  return device.encode ('_'+a)[1] ;
}).join ('')) ;
console.log ('abcdefghijklmnopqrstuvwxyz'.split ('').map (function (a) {
  return device.encode ('__'+a)[2] ;
}).join ('')) ;
We think if you keep on this trail you should be able to crack the code! You are expected to fill in the
*/


//////   SOLUTION     ///////


console.log (device.encode ('What is this ?')) ;
// device.decode = function (w) {
//   return w ; 
// }
let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz,.? -';
device.decode = function (w) {
  let res = '', dic = {};
  for (let j = 0; j < letters.length; j++){
    let temp = '';
    for (let i = 0; i < w.length; i++)
      temp += letters[j];
    dic[device.encode(temp)] = letters[j];
  }
  for (let i = 0; i < w.length; i++)
  {
    for (let k in dic)
    {
      if (k[i] == w[i])
        res += dic[k];
    }
  }
  return res; 
}