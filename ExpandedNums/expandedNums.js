function expandedForm(num) {
  let multiple = 10;
  let answerArray = [];

  while (num > 1) {
    let remainder = num % multiple;
    if (remainder > 0) {
      answerArray.unshift(remainder);
    }
    num -= remainder;
    multiple = multiple * 10;
  }
  console.log(answerArray);
  return answerArray.join(" + ");
}

expandedForm(12);
expandedForm(42);
expandedForm(70304);
