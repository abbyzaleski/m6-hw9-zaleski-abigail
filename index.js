var btn = document.querySelector('button')
var forecastE1 = document.getElementById('forecast')

btn.onclick = function() {
    console.log('clicked')
    fetch("https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=82133d0b69b88c6cf71f71c9df46bd5f")
    .then(function(res) {
        return res.json()
    })
    .then(function(res) {
        console.log(res)
    })
}