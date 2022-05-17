// task is to create a function that turns a string into a
// Mexican Wave.You will be passed a string and you must
// return that string in an array where an uppercase
//  letter is a person standing up.

// RULES
// 1.  The input string will always be lower case
// but maybe empty.

//  2.  If the character in the string is whitespace then
//   pass over it as if it was an empty seat

function wave(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ")
      result.push(
        str
          .split("")
          .fill(str[i].toUpperCase(), i, i + 1)
          .join("")
      );
  }
  console.log(result);
  return result;
}

wave("hello");
// wave("codewars");
