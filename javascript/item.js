let params = new URL(document.location).searchParams
const id = params.get("id")

console.log(id)

let data = []

const fetchData = async() => {
    await fetch("https://eldenring.fanapis.com/api/classes/" + id)
    .then((response) => response.json())
    .then((response => {
        console.log(response.data)
        data.push(response.data)
    }))
    .catch( error => console.error(error))
}

fetchData()

const itemsDisplay = async() => {
    await fetchData()

    const dataDisplayed = data[0]
    console.log(dataDisplayed)

    document.getElementById("name").innerText = `${dataDisplayed.name}`
    document.getElementById("image").innerHTML = `<img src="${dataDisplayed.image}" alt="${dataDisplayed.name} "/>`
    document.getElementById("description").innerText = `${dataDisplayed.description}`

    console.log(dataDisplayed.stats)
    document.getElementById("stats").innerHTML = `
        <table class="table">
            <tr>
                <th class="cell">level</th>
                <th class="cell">vigor</th>
                <th class="cell">mind</th>
                <th class="cell">endurance</th>
                <th class="cell">strength</th>
                <th class="cell">dexterity</th>
                <th class="cell">intelligence</th>
                <th class="cell">faith</th>
                <th class="cell">arcane</th>
            </tr>
            <tr>
                <td class="cell">${dataDisplayed.stats.level}</td>
                <td class="cell">${dataDisplayed.stats.vigor}</td>
                <td class="cell">${dataDisplayed.stats.mind}</td>
                <td class="cell">${dataDisplayed.stats.endurance}</td>
                <td class="cell">${dataDisplayed.stats.strength}</td>
                <td class="cell">${dataDisplayed.stats.dexterity}</td>
                <td class="cell">${dataDisplayed.stats.intelligence}</td>
                <td class="cell">${dataDisplayed.stats.faith}</td>
                <td class="cell">${dataDisplayed.stats.arcane}</td>
            </tr>
        </table>
    `

}

itemsDisplay()
