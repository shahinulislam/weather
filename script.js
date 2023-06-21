const submit = document.getElementById('submit')
submit.addEventListener('click', function(){
    const inputBtn = document.getElementById('inputCity').value;
    fetch(`https://api.weatherapi.com/v1/current.json?key=d6a5a587d9f2465fb9161231232106&q=${inputBtn}&aqi=no`)
    .then(response => response.json())
    .then(data => {
        const cityName = data.location.name;
        const temp = data.current.temp_c;
        const description = data.current.condition.text;
        const icon = data.current.condition.icon;
        const county = data.location.country;
        const hum = data.current.humidity;
        
        document.getElementById('city').innerHTML = "City Name: "+ cityName;
        document.getElementById('temp').innerHTML = "Temperature: "+ temp+"&deg;C";
        document.getElementById('des').innerHTML = "Weather Condition: "+ description;
        document.getElementById('country').innerHTML = "Country: "+county;
        // document.getElementById('icon').innerHTML = icon;
        document.getElementById('hum').innerHTML = "Current Humidity: "+hum+"%";
    })
    .catch(res => alert("Please Enter Right City Name"))
})