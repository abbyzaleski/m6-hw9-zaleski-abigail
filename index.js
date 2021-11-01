var btn = document.querySelector('button')
var formEl = document.querySelector('form')
var inputEl = document.querySelector('input')
var weatherEl = document.getElementById('weather')

formEl.onsubmit = function(e) {
    // console.log('clicked')
    e.preventDefault()
    var query = inputEl.value
    fetch('https://api.openweathermap.org/data/2.5/weather?appid=6232ea44ad23977eea2bad98d28a42f8&units=imperial&q=' + query)
    .then(function(res) {
        return res.json()
    })
    .then(function(res) {
        renderWeather(res)
        console.log(res)
    })
}

function renderWeather(weatherObj) {

    // Name of Searched City and Country
    weatherEl.innerHTML = ""
    var name = document.createElement('h2')
    var country = document.createElement('h2')
    name.textContent = weatherObj.name + "" + ", " + weatherObj.sys.country + ""
    weatherEl.appendChild(name)
    weatherEl.appendChild(country)

    // Description of Current Weather
    var description = document.createElement('h3')
    var weather = document.createElement('h3')
    description.textContent = weatherObj.weather[0].description + ""
    weatherEl.appendChild(description)
    weatherEl.appendChild(weather)

    // Icon Image for Current Weather
    var icon = document.createElement('img')
    icon.src = weatherObj.weather[0].icon + "https://openweathermap.org/img/w/${this.props.icon}.png"
    weatherEl.appendChild(icon)

    // Current Temperature
    var temp = document.createElement('h4')
    temp.textContent = "Temperature: " + weatherObj.main.temp
    weatherEl.appendChild(temp)

    // Feels Like Temperature
    var feelsLike = document.createElement('h4')
    feelsLike.textContent = "Feels Like: " + weatherObj.main.feels_like 
    weatherEl.appendChild(feelsLike)

}


