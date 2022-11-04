const regularFetch = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err))
}

// regularFetch()

// Async/Await API Call

async function asyncApiCall() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    // console.log(response.ok)
    const data = await response.json()
    // console.log(data)
    return data
  } catch (err) {
    console.log(err)
  }
}

// Async functions return PROMISES - so we need to use .then() to get the data
const data = asyncApiCall().then((data) => console.log(data))
console.log(data) // Promise { <pending> } - because async functions return promises - so we need to use .then() to get the data
