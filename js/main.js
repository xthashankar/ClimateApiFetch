let TOKKEN='50fbc4a3c3710837144c3ed1585bc269'
let LOCATION='KATHMANDU'
let URL='https://api.openweathermap.org/data/2.5/weather?q='+LOCATION+'&appid='+TOKKEN
let CONVERT_DEGREE=273.15

let loc=document.getElementById('Location');
let image=document.getElementById('image');
let temp=document.getElementById('temperature');
let climate=document.getElementById('season');
let type=document.getElementById('climatetype');
let pre=document.getElementById('pressure');
let wind=document.getElementById('wind');
let humidity=document.getElementById('humidity')
// let text = document.createTextNode("Pressure:");
let icon;
fetch(URL)
.then(function(response){
    return response.json()

})
.then(function(climatedata){
    loc.innerHTML=climatedata.name;
    icon=climatedata.weather[0].icon
    image.src='https://openweathermap.org/img/wn/'+icon+'@2x.png';
    temp.innerHTML=Math.round(climatedata.main.temp-CONVERT_DEGREE);
    climate.innerHTML=climatedata.weather[0].main;
    type.innerHTML='"'+climatedata.weather[0].description+'"';
    pre.innerHTML='Pressure: '+'"'+climatedata.main.pressure+'"';
    wind.innerHTML='wind speed: '+'"'+climatedata.wind.speed+'"';
    humidity.innerHTML='Humidity:'+'"'+climatedata.main.humidity+'"';
})

