const Countary_Name = document.getElementById("city_name");
const temperature = document.getElementById("temp");
const Humidity = document.getElementById("humidity");
const Wind_Speed = document.getElementById("wind_speed");
const Search_Btn = document.getElementById("search_Btn");
const Countary_Input = document.getElementById("Countary");
let Weather_Img_Location = document.querySelector(".weather_img img");
let error_msg = document.querySelector('.error_msg');

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&";

const apiKey = "53d142624ed45687a06913cfb54da2b6";

async function weather_data(city) {
  try {

    let response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);

    if(!response.ok){
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    let data = await response.json();

    console.log(data);
    Countary_Name.innerHTML = data.name;

    temperature.innerHTML = data.main.temp;

    Humidity.innerHTML = data.main.humidity;

    Wind_Speed.innerHTML = data.wind.speed;

    const Weather_Condition = data.weather[0].main;

    // Clouds

    if (Weather_Condition === "Clouds") {
      const Clouds_Weather_img = "images/clouds.png ";
      Weather_Img_Location.setAttribute("src", Clouds_Weather_img);
    }

    // Clear

    if (Weather_Condition === "Clear") {
      const Clear_Weather_img = "images/clear.png ";

      Weather_Img_Location.setAttribute("src", Clear_Weather_img);
    }

    // Drizzle

    if (Weather_Condition === "Drizzle") {
      const drizzle_Weather_img = "images/drizzle.png ";

      Weather_Img_Location.setAttribute("src", drizzle_Weather_img);
    }

    // Mist

    if (Weather_Condition === "Mist") {
      const Mist_Weather_img = "images/mist.png ";

      Weather_Img_Location.setAttribute("src", Mist_Weather_img);
    }

    // Rain

    if (Weather_Condition === "Rain") {
      const Rain_Weather_img = "images/rain.png ";

      Weather_Img_Location.setAttribute("src", Rain_Weather_img);
    }

    // Snow

    if (Weather_Condition === "Snow") {
      const Snow_Weather_img = "images/snow.png ";

      Weather_Img_Location.setAttribute("src", Snow_Weather_img);
    }
  } catch(error) {
    
    
    error_msg.style.display = 'block'

    error_msg.innerHTML = "Invaid City/Countary Name"
    alert(`City/Countary is invalid ${error}`)
  }
}

Search_Btn.addEventListener("click", () => {

  if(Countary_Input.value === ""){
    error_msg.style.display = 'block'

    error_msg.innerHTML = "Countary/City Name required";
    return;
  }else{
    error_msg.style.display = 'none'

  }
  weather_data(Countary_Input.value);
});
