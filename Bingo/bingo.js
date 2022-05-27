// For this game of BINGO, you will receive a single array of 10
// numbers from 1 to 26 as an input.Duplicate numbers within the array
// are possible.

// Each number corresponds to their alphabetical order letter
//   (e.g. 1 = A. 2 = B, etc).Write a function where you will win the
// game if your numbers can spell "BINGO".They do not need to be in the
// right order in the input array.Otherwise you will lose.Your outputs
// should be "WIN" or "LOSE" respectively.
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let bingoLetters = ["b", "i", "n", "g", "o"];

function bingo(a) {
  let answerArray = [];
  // loop through argument array

  a.forEach((number) => {
    // console.log(alphabet[number - 1]);
    answerArray.push(alphabet[number - 1]);
  });

  let solution = bingoLetters.every((letter) => {
    return answerArray.includes(letter);
  });
  
  if (solution) {
    return "WIN";
  } else {
    return "LOSE";
  }
  // check the alphabet array against the number in the loop -1

  // if yes return WIN, else return LOSE
}

bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10]);
