/*
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter needs to be converted to its ASCII code.
The second letter needs to be switched with the last letter
Keepin' it simple: There are no special characters in input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

/////////     SOLUTION     //////

var encryptThis = function(text) {
  // Implement me! :)
  return text.split(" ").map(word=>{var result = ''
  if(word.length>2)
  result +=word.charCodeAt(0)+word[word.length-1]+word.slice(2,word.length-1)+word[1]
  else if (word.length===2) result = word.charCodeAt(0) + word[1]
  else result = word.charCodeAt(0)
  return result
  }).join(' ')
}