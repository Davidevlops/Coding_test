// The goal of this exercise is to convert a string to a new string where each
// character in the new string is "(" if that character appears only once in the original string, or ")"
// if that character appears more than once in the original string. Ignore capitalization when determining if a
// character is a duplicate.

function duplicateEncode(word) {
  // ...
  let wordToLowerCase = word.toLowerCase();
  let countKeeper = {};
  for (let i = 0; i <= wordToLowerCase.length - 1; i++) {
    if (isNaN(countKeeper[wordToLowerCase[i]])) {
      countKeeper[wordToLowerCase[i]] = 0;
    }
    countKeeper[wordToLowerCase[i]]++;
  }
  let finalAnswer = ``;
  for (let i = 0; i <= wordToLowerCase.length - 1; i++) {
    finalAnswer += countKeeper[wordToLowerCase[i]] > 1 ? ")" : "(";
  }
  return finalAnswer;
}
console.log(duplicateEncode("edueu"));


function findErrors(nums) {
  const duplicates = nums.filter((num, index) => nums.indexOf(num) !== index);
  const missingNumbers = nums.reduce((acc, num, index) => {
    if (!nums.includes(index)) {
      acc.push(index);
    }
    return acc;
  }, []);
  return [...duplicates, ...missingNumbers];
}


console.log(findErrors([1, 2, 3, 3, 5]));
