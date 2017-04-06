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

function palindrome(str) {
  
  var srtingBefore = str.replace(/[^a-z0-9]+/gi,'').toLowerCase();
  var stringAfter = srtingBefore.split('').reverse().join('');

  if (srtingBefore === stringAfter) {
     return true;
  } else {
    return false;
  }
}

palindrome("eye");
palindrome("five|\_/|four");

//Find the Longest Word in a String

function findLongestWord(str) {
  var stringArray = str.split(' ');
  var stringLength = stringArray[0].length;
  for (var i=0; i < stringArray.length; i++) {
    if (stringArray[i].length > stringLength) {
      stringLength = stringArray[i].length;
    }
  }
return stringLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

//Return the provided string with the first letter of each word capitalized.

function titleCase(str) {
  
  var divString = str.toLowerCase().split(' ');
  for (var i = 0; i < divString.length; i++){
    divString[i] = divString[i].charAt(0).toUpperCase() + divString[i].substring(1);
  }
  return divString.join(' ');
}

titleCase("I'm a little tea pot");

//Return an array consisting of the largest number from each provided sub-array. 

function largestOfFour(arr) {

  var largestArr = [];
  
  for (var i=0; i < arr.length; i++) {
      var largestNumber = 0;
    for (var z = 0; z < arr[i].length; z++){
      if (arr[i][z] > largestNumber) {
        largestNumber = arr[i][z];
      }
      largestArr[i] = largestNumber;
    }
  }
  
  return largestArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {
     var temp = str.split(' ');
  console.log(temp);

    if (temp.pop() == target){
      return true;
    
  } else {
    return false;
  }
 
}

confirmEnding("Bastian", "n");