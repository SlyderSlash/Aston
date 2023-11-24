const weatherAPIKey = '39b22adfc8928a19036080e1688e4e3cb9d6424b96eced73430d78933fbb7fa6' //Clé API

const data = [
    {name : 'Sandrine'}, 
    {firstname : 'Teddy'},
    {lastname : 'Remy'}, 
    {name : 'Pape'}, 
    {name : 'Olivier'}
]

const getLocation = () => {
  // Récupération de la longitude et latitude
  console.log(1)
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log('Here we are')
      console.log(position.coords)
      getWeather(position?.coords?.longitude, position?.coords?.latitude)
      console.log('Finish')
      
  }, (err) => {
      const errAlert = document.getElementById('errPosition')
      errAlert.style.visibility = 'visible'
      console.error(err)
  })
}
getLocation()

const getWeather = (lon, lat) => {
  if(lon && lat){
    fetch(`https://api.meteo-concept.com/api/ephemeride/0?token=${weatherAPIKey}`, {
      method : 'GET',
      headers: {
         "Content-Type": "application/json"
      }
    })
    .then(res => {
      if(res.ok){
        res.json()
            .then(res => {
                console.log(res)
                // On récupère l'élément container
                const container = document.getElementById("apiContainer")
                // on créer un élément
                const divCard = document.createElement('div')
                // On intègre le code de la card
                divCard.innerHTML = `
                    <div class="col-md-4">
                        <div class="card">
                            <img src="https://placehold.co/600x400" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${res.city.name}</h5>
                                <p class="card-text">Le soleil se lève à ${res.ephemeride.sunrise}</p>
                                <a href="#" class="btn btn-primary">${res.city.cp}</a>
                            </div>
                        </div>
                    </div>
                `
                container.append(divCard)
            })
            .catch(err => {
                console.error(err)
            })
      }
    })
    .catch(err => {
      console.error(err)
      const errAlert = document.getElementById('errPosition')
      errAlert.style.visibility = 'visible'
    })
  }
  else {
    const errAlert = document.getElementById('errPosition')
    errAlert.style.visibility = 'visible'
  }
  // APPEL API
  // Conversion en JSON
  // Extraction des données voulues
}

const cardMap = data.map(e => {
        const htmlElement = document.createElement('div')
        htmlElement.innerHTML = `
        <div class="col-md-4">
            <div class="card">
                <img src="https://placehold.co/600x400" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${Object.keys(e)[0]} ${e.name}</h5>
                </div>
            </div>
        </div>
        `
        return htmlElement
        
}
)

const container = document.getElementById("apiContainer")
container.append(...cardMap)
/*
container.append(cardMap[0])
container.append(cardMap[1])
container.append(cardMap[2])
*/
//....