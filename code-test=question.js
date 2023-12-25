// Question 1 Given a rectangular matrix of characters, add a border of asterisks(*) to it.
// Example : For picture = ["abc", "ded"]the output should be
// solution(picture) = ["*****", "*abc*", "*ded*", "*****"]
function solution(picture) {
    let asterisks = "*"
    let arrayOfConcatenatedString = []
    let arrayOfRepeatedAsterisks = []
    let numbersOfCharactersToMakeARectangle
    numbersOfCharactersToMakeARectangle = parseInt(picture.map(x => x.length + 2))
    const repeatedAsterisks = asterisks.repeat(numbersOfCharactersToMakeARectangle)
    arrayOfRepeatedAsterisks.push(repeatedAsterisks)
    for (let kkk = 0; kkk < picture.length; kkk++) {
        if (picture[kkk].length < numbersOfCharactersToMakeARectangle) {
            let concatTheStrings = picture[kkk].concat(asterisks)
            concatTheStrings = asterisks + concatTheStrings.charAt(0) + concatTheStrings.slice(1)
            arrayOfConcatenatedString.push(concatTheStrings)
        }
    }

    return [...arrayOfRepeatedAsterisks, ...arrayOfConcatenatedString, ...arrayOfRepeatedAsterisks]
}


// function findErrors(nums) {
//     const duplicates = nums.filter((num, index) => nums.indexOf(num) !== index);
//     const missingNumbers = nums.reduce((acc, num, index) => {
//       if (!nums.includes(index)) {
//         acc.push(index);
//       }
//       return acc;
//     }, []);
//     return [...duplicates, ...missingNumbers];
//   }
  

console.log(findErrors([1, 2, 3, 3, 5]));