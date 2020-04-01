const searchElement = document.querySelector('[data-city-search]')
const searchBox = new google.maps.places.SearchBox(searchElement)
searchBox.addListener('places_changed', () => {
  const place = searchBox.getPlaces()[0]
  if (place == null) return
  const latitude = place.geometry.location.lat()
  const longitude = place.geometry.location.lng()
  fetch('/weather', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      latitude: latitude,
      longitude: longitude
    })
  })
  .then(res => res.json())
.then(data => {
    console.log(data);
    setWeatherData(data, place.formatted_address)
})
})

const icon = new Skycons({ color: '#222'})
const locationElement = document.querySelector('[data-location]')
const statusElement = document.querySelector('[data-status]')
const summaryElement = document.querySelector('[data-summary]')
const temperatureElement = document.querySelector('[data-temperature]')
const precipitationElement = document.querySelector('[data-precipitation]')
const windElement = document.querySelector('[data-wind]')
icon.set('icon', 'clear-day');
icon.play();

function setWeatherData(data, place){
    const currently = data.currently;
    const summary = data.daily.summary;
    locationElement.textContent = place;
    statusElement.textContent = currently.summary;
    summaryElement.textContent = summary;
    temperatureElement.textContent = currently.temperature.toFixed(1)+'°F';
    precipitationElement.textContent = `${currently.precipProbability * 100}%`;
    windElement.textContent = windDirection(currently.windBearing) + " " + currently.windSpeed.toFixed(0) + ' mph';
    icon.set('icon', currently.icon);
    icon.play();
}

function windDirection(num){
    const val = parseInt((num/22.5)+.5)
    const arr=["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"]
    return arr[(val % 16)];
}