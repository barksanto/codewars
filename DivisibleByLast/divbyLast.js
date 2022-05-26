// Take a number and check each digit if it is divisible by t
// he digit on its left checked and return an array of booleans.

// The booleans should always start with false becase there
// is no digit before the first one.

// Examples
// 73312        => [false, false, true, false, true]
// 2026         => [false, true, false, true]
// 635          => [false, false, false]
// *** Remember 0 is evenly divisible by all integers but not the other way around ***

function divisibleByLast(n) {
  // TODO
  let answer = [];
  let splitArray = n.toString().split("");

  splitArray.forEach((number, index) => {
    if (index === 0) {
      answer.push(false);
    } else if (number == 0) {
      answer.push(true);
    } else {
      if (number % splitArray[index - 1] === 0) {
        answer.push(true);
      } else {
        answer.push(false);
      }
      
    }
  });
  console.log(answer);
  return answer;
}

// divisibleByLast(73312); //[false, false, true, false, true]);
// divisibleByLast(2026); // [false, true, false, true]);
// divisibleByLast(635); // [false, false, false]);
divisibleByLast(1337); // [false, true, true, false]);
