const promise = new Promise((resolve, reject) => {
    setTimeout(
        () => resolve(),
        1000
    )
})

promise
    .then(() => console.log(1))

promise
    .then(() => console.log(2))
