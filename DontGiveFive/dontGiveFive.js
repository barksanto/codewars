function dontGiveMeFive(start, end) {
  let noFives = [];
  for (i = start; i <= end; i++) {
    !i.toString().includes(5) ? noFives.push(i) : null;
  }
  console.log(noFives.length);
  return noFives.length;
}

dontGiveMeFive(1, 9);
dontGiveMeFive(4, 17);
