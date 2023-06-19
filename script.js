let data = []

const fetchData = async() => {
    await fetch("https://eldenring.fanapis.com/api/items")
    .then((response) => response.json())
    .then((results => {
        let arrayOfData = results.data
        console.log(arrayOfData)
        arrayOfData.forEach(item => {
            data.push(item)
        });
    }))
    .catch( error => console.error(error))
}

fetchData()

const display = async() => {
    await fetchData()
    console.log(data.length)
}

display()
