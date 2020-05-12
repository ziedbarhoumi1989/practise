/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/
function rot13(message){
  //your code here
  var codeA = "A".charCodeAt(0);
var codeN = "N".charCodeAt(0);
var codeZ = "Z".charCodeAt(0);
var newArr = [];

for(var i =0; i<message.length; i++){
    var code = message.toUpperCase().charCodeAt(i);
    if(code>=codeA && code<=codeZ){
        if(code>=codeN)
            newArr.push(String.fromCharCode(message.charCodeAt(i)-13));
        else
            newArr.push(String.fromCharCode(message.charCodeAt(i)+13));
    }else{
        newArr.push(message[i]);}
    }
     return newArr.join("");
}