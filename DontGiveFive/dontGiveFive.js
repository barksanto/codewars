function dontGiveMeFive(start, end) {
  let noFives = [];

  for (i = start; i <= end; i++) {
    noFives.push(i);
  }
  console.log(noFives);
}

dontGiveMeFive(1, 9);
dontGiveMeFive(4, 17);
