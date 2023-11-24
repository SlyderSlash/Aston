const weatherAPIKey = '39b22adfc8928a19036080e1688e4e3cb9d6424b96eced73430d78933fbb7fa6' //Clé API

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