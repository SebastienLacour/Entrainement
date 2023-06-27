let data = []
let data1 = []
let data2 = []
let data3 = []
let data4 = []

const fetchData = async() => {
    await fetch("https://eldenring.fanapis.com/api/items?limit=100")
    .then(response => response.json())
    .then(json => {
        data.push(json.data)
        console.log(data)
    })
    .catch(error => console.error(error))
}

const fetchDataOne = async() => {
    await fetch("https://eldenring.fanapis.com/api/items?limit=100&page=1")
    .then(response => response.json())
    .then(json => {
        data.push(json.data)
        console.log(data)
    })
    .catch(error => console.error(error))
}

const fetchDataTwo = async() => {
    await fetch("https://eldenring.fanapis.com/api/items?limit=100&page=2")
    .then(response => response.json())
    .then(json => {
        data.push(json.data)
        console.log(data)
    })
    .catch(error => console.error(error))
}

const fetchDataThree = async() => {
    await fetch("https://eldenring.fanapis.com/api/items?limit=100&page=3")
    .then(response => response.json())
    .then(json => {
        data.push(json.data)
        console.log(data)
    })
    .catch(error => console.error(error))
}

const fetchDataFour = async() => {
    await fetch("https://eldenring.fanapis.com/api/items?limit=100&page=4")
    .then(response => response.json())
    .then(json => {
        data.push(json.data)
        console.log(data)
    })
    .catch(error => console.error(error))
}



let objectTypes = []

const getObjectType = async() => {
    await fetchData()
    await fetchDataOne()
    await fetchDataTwo()
    await fetchDataThree()
    
    let reelData = data[0].concat(data[1]).concat(data[2]).concat(data[3])
    console.log(reelData)

    console.log(reelData.find(el => el.type === "Str A Dex C") )
    //On créée un nouveau tableau avec les types d'objets
    //tout en supprimant les doublons
    objectTypes = [... new Set(reelData.map( item => item.type.trim()))]
    console.log(objectTypes)
}

const dataDisplayed = async() => {
    await getObjectType()
    console.log(objectTypes)

    const textZone = document.getElementById("objectTypes")

    objectTypes.forEach(type => {
        const div = document.createElement("div")
        div.className = "content"

        const name = document.createElement("h2")
        name.innerText = type

        div.appendChild(name)
        textZone.appendChild(div)
    })

}

dataDisplayed()