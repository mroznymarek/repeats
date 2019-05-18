const fetchURL = url => (
    fetch(url)
        .then(response => response.json())
)

fetchURL('https://randomuser.me/api')
    .then(resolvedValue => console.log(resolvedValue))

fetchURL('https://randomuser.me/api?results=10')
    .then(resolvedValue => console.log(resolvedValue))
