function high(x) {
  // reference alphabet
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  // separate each sentence into an array of words
  const words = x.split(" ");
  let result = words[0];
  let maxScore = 0;

  words.forEach((word) => {
    let score = 0;

    for (var i = 0; i < word.length; i++) {
      score += alphabet.indexOf(word[i]) + 1;
    }

    if (score > maxScore) {
      maxScore = score;
      result = word; //change values if next word is higher score
    }
  });
  console.log(result);
  return result;
}
high("man i need a taxi up to ubud");
high("what time are we climbing up the volcano");
// high("take me to semynak");
// high("aa b");
