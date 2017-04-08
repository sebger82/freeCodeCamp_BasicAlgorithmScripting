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
    if (str.search(target) > 0){
      if( str.length - target.length == str.search(target)){
          return true;
      } else {
        return false;
      }
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");

//Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  var concatArr = [];
  for ( var i = 1; i <= num; i++) {
    concatArr = concatArr.concat(str);
  }
  return concatArr.join('');
}
repeatStringNumTimes("abc", 3);

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending. Note that inserting the three dots to the end will add to the string length. However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

function truncateString(str, num) {
if (str.length <= num) {
  return str;
} else if (str.length > num && num > 3){
  var newString1 = str.slice(0, (num - 3));
  newString1 += '...';
  return newString1;
} else {
  var newString2 = str.slice(0, num);
  newString2 += '...';
  return newString2;
}
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
truncateString("Absolutely Longer", 2);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
truncateString("A-", 1);

//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.


function chunkArrayInGroups(arr, size) {
var baza = [];
  for (i=1; i <= (Math.ceil(arr.length / size)); i++) {
    var nowa = arr.slice((size*i-size), (size*i));
    baza.push(nowa);
  }
  return baza;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
