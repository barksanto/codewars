// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// If number is present in b, remove it from a

// function arrayDiff(a, b) {
//   let answerArray = [];
//   a.forEach((number) => {
//     !b.includes(number) ? answerArray.push(number) : null;
//   });
//   return answerArray;
// }

const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz", i)
    } else if (i % 3 === 0) {
      console.log("Fizz", i)
    } else if (i % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(i)
    }
  }
}

fizzBuzz(15)
