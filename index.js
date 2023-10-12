function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = word.split('').reverse().join('');
  return reversedWord === word;
}

/* 
  Add your pseudocode here
  reverse  === word
*/

/*
  Add written explanation of your solution here
  1- convert string to array using split("") method.
  2- then reverse all characters using reverse() method.
  3- then joined all characters after reverse them.
  4- then check if reversed word equal and the same the word before reversed. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
