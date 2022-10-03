const fetchData = () => {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      res("Done!")
    }, 2000)
  })
  return promise
}

setTimeout(() => {
  console.log("Timer is done")
  fetchData().then((text) => {
    console.log(text)
  })
}, 2000)

// console.log("hello")
// console.log("hiii")
