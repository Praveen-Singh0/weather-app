const apikey = "79ee7cd3ec794b0b50649348febfd65b";

const a = document.getElementById("h1");
const b = document.getElementById("temp");
const c = document.getElementById("immg");
const main = document.getElementById("main");
const form = document.getElementById("search");
const input = document.getElementById("input");


const date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();





const API = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getWeatherByLocation(city) {
    const resp = await fetch(API(city), { origin: "cors" });
    const respData = await resp.json();
  
    console.log(respData);
  
    getData(respData);
}
function getData(data){
  
  var tt = data.main.temp - 273.15;
  var td = data.main.temp_min - 273.15;
  
  // console.log(tt.toFixed(2));
  
  const we = document.createElement("div");  
  we.innerHTML = `<div class = "head">
    <h4>${day}-${month}-${year}</h4>
    <h1 id="h1">${data.name}</h1>
     </div>
    <div class="display" id="immg" >
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        <div class="temp">
        <h2 id="temp"> temp : ${tt.toFixed(2)} C </h2>
        <h2 class="h">Min : ${td.toFixed(2)} C</h2>
        <div class="tempchild">
          <span id="dis">Wind : ${data.wind.speed}</span>
          <span>${data.weather[0].description} Today</span>
          </div>
      </div>
    </div>
  <div class="days">
    <div>Sunday
    <div> <i class="fa-solid fa-cloud"></i> </div>
    </div>
    <div>monday
    <div> <i class="fa-solid fa-bolt"></i> </div>
    </div>
    <div>tuesday
    <div> <i class="fa-solid fa-sun"></i> </div></div>
    <div>wednsday 
    <div> <i class="fa-solid fa-wind"></i> </div></div>
    <div>thrusday
    <div> <i class="fa-solid fa-sun"></i> </div>
    </div>
    <div>friday 
    <div> <i class="fa-solid fa-sun"></i> </div> 
    </div>
    </div>`;
 
  main.appendChild(we);
  
}

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  
  const city = input.value;
  if(city){
    
    getWeatherByLocation(city);
  }
  input.value = "";
});