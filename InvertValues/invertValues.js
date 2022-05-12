// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.
// function add(a, b) {

// }

function absValue(num) {
  return Math.abs(num);
}

function invert(array) {
  let newArray = [];
  array.forEach((number) => {
    if (number > 0) {
      newArray.push(number - absValue(number) * 2);
    } else if (number < 0) {
      newArray.push(number + absValue(number) * 2);
    } else {
      if (number === 0) {
        newArray.push(-0);
      }
    }
  });
  return newArray;
}

invert([1, 2, 3, 4, 5]);
invert([1, -2, 3, -4, 5]);
invert([]);
invert([0]);
