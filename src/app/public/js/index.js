let applesDesc = document.getElementById("apples-data")
let orangesDesc = document.getElementById("oranges-data")

let container = document.getElementById("container")

let rcities = [
  "Milan",
  "Turin",
  "Innsbruck",
  "Achen",
  "London",
  "Delft",
  "New York",
  "Sidney",
  "Chicago"
]

fetch("http://localhost:3000/blockchain")
  .then(res => res.json())
  .then(res => {
    res.forEach(el => {
      let choosenCities = rcities.filter(el => Math.floor(Math.random() * 10) % 2 === 0)
      let amount = Math.floor(Math.random() * 28)
      container.innerHTML += `
      <div class="col s6">
          <div class="card">
          <div class="card-image">
          <img src="images/${el.data}.jpg">
          <span class="card-title">${el.data}</span>
        </div>
          <div class="card-content">
            <p id="apples-data">${el.timestamp}</p>
            <p>${choosenCities.join(' => ')}</p>
            <p>Available batches: ${amount}</p>
          </div>
          </div>
        </div>
      `
    })
  })

  setTimeout(() => {
    fetch("http://localhost:3000/blockchain")
  .then(res => res.json())
  .then(res => {
    container.innerHTML = ''
    res.forEach(el => {

      el.infos.split("|").forEach(infoEl => {

        let parts = infoEl.split("->")

        let index = parts[0]
        let element = parts[1]

        el[`${index}`] = element

      })

      console.log(el)

      container.innerHTML += `
      <div class="col s6">
          <div class="card">
          <div class="card-image">
          <img src="images/${el.data}.jpg">
          <span class="card-title">${el.data}</span>
        </div>
          <div class="card-content">
            <p id="apples-data">${el.timestamp}</p>
            <p>Origin: ${el.prov}</p>
            <p>Destinations: ${el.dests}</p>
            <p>Available batches: ${el.batch}</p>
          </div>
          </div>
        </div>
      `
    })
  })
  }, 100)