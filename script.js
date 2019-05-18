function wait() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(
        () => resolve(),
        1000
      )
    })
  
    return promise
  }
  
  wait()
    .then(() => console.log(1))
    .then(() => wait())
    .then(() => console.log(2))
    .then(() => wait())
    .then(() => console.log(3))
  