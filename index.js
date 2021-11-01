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
    weatherEl.innerHTML = ""
    var name = document.createElement('h2')
    var country = document.createElement('h2')
    name.textContent = weatherObj.name + "" + ", " + weatherObj.sys.country + ""
    weatherEl.appendChild(name)
    weatherEl.appendChild(country)
}