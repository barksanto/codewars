console.log("hello")

const answer = {
  pos: 0,
  peak: 0,
}

function pickPeaks(arr) {
  //  return {pos:[],peaks:[]}
  function check() {
    if (answer.peak === 0) {
      answer.pos = []
      answer.peak = []
    }
    console.log(answer)
  }

  arr.forEach((num, index) => {
    if (num > answer.peak) {
      answer.pos = index
      answer.peak = num
      check()
    }
  })
}

// pickPeaks([1, 2, 3, 6, 4, 1, 2, 3, 2, 1])
// pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3])
pickPeaks([])
