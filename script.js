// An array of numbers representing estimated temperatures for the next 5 days
// let weather_temps = [35,37,20,65,75];

// Cold, Mild, Hot weather categories
let weather_category;

// Blue for cold, gray for mild, and red for hot
let temp_color;

// For creating a new div for each day
let element;

// Generate 5 random numbers between 0 and 100
let weather_temps = [];

 // This is a built in function that lets you get todays date.
let day = new Date();

// Set a container equal to the div container for the new weather cards
let weather_card_container = document.querySelector("#card_container");

// Forecast date variable
let forecast_date;

// Change the color based on where the temperature falls
function check_temps(weather_temps_curr) {
    day = new Date();

    weather_card_container.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        weather_temps_curr[i] = Math.floor(Math.random() * 101);
    }


    // Need to create a new div card for each temp value in the weather temps list
    for (let temp of weather_temps_curr) {
        
        element = document.createElement("div");
        
        // Check what the temp value is and set the background color and weather category
        if(temp <= 60) {
            weather_category = "Cold";
            temp_color = "lightblue";
        } else if(temp <= 70) {
            weather_category = "Mild";
            temp_color = "lightgray";
        } else {
            weather_category = "Hot";
            temp_color = "orange";
        }

        forecast_date = day;
        
        forecast_date.setDate(day.getDate() + 1);

        forecast_date = forecast_date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
        });

        // Set the text of the new div to the weather category value
        element.innerText = forecast_date + "\n" + weather_category + ": " + temp + " degrees";

        // Set the background color and other styling elements of the new div to the temp color, etc.
        element.style.backgroundColor = temp_color;
        element.style.borderRadius = "12px";
        element.style.width = "160px";
        element.style.height = "100px";
        element.style.fontSize = "20px";
        element.style.marginTop = "10px";
        element.style.marginBottom = "10px";
        element.style.display = "flex";
        element.style.justifyContent = "center";
        element.style.padding = "20px";
        element.style.fontFamily = "sans-serif";
        // element.style.alignItems = "center";


        // Append the new element to the card list
        weather_card_container.appendChild(element);

    }

    console.log(forecast_date);
}

// Had to put the addEventListener into a function?
// Even though the click event doesn't occur on load
check_weather.addEventListener("click", function() {
    check_temps(weather_temps);
});

