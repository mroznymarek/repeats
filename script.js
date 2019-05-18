
const makePromise = () => (
    new Promise((resolve, reject) => {
  
      const number = Math.random()
  
      if (number < 0.5) {
        resolve(number)
      } else {
        reject(number)
      }
  
    })
  )
  
  makePromise()
    .then(resolvedValue => console.log(resolvedValue))
    .catch(rejectedValue => console.error(rejectedValue))
    .finally(() => console.log('Randomized!'))
  
  console.log('Only numbers < 0.5 are resolved!')