Math.round = function (number) {
  return number - parseInt(number) >= 0.5
    ? parseInt(number) + 1
    : parseInt(number)
}

Math.ceil = function (number) {
  return parseInt(number) === number ? number : parseInt(number) + 1
}

Math.floor = function (number) {
  return parseInt(number)
}

Math.round(0.4)
Math.round(0.5)
