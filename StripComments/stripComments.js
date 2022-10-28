function solution(input, markers) {
  // split input
  // console.log(input)
  const indexOfMarker = input.indexOf(markers[0]) // index of marker

  // // console.log(indexOfMarker)
  let modifiedString = input.substring(0, indexOfMarker)
  console.log(modifiedString.trim())

  // delete all elements
}

solution("apples, pears # and bananas", "#")

// console.log("apple".substring(0, 3))
