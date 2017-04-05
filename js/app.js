//Reverse the provided string.

function reverseString(str) {
  var strRev = str.split('').reverse().join('');
  return strRev;
}

reverseString("hello");
reverseString("Howdy");
reverseString("Greetings from Earth");

//Return the factorial of the provided integer.

function factorialize(num) {
  n = 1;
  for (var i=1; i <= num; i++) {
    n = n * i;
  }
  return n;
}

factorialize(5);

//Return true if the given string is a palindrome. Otherwise, return false.