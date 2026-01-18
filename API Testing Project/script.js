async function checkEmailValidity(event) {
	event.preventDefault();
	console.log("hello");

	const email = document.getElementById("email").value;
	if(!email){
		alert("Please enter a email address.");
		return;
	}

	const url = "https://emailreputation.abstractapi.com/v1/";
	const api_key = "82f9d6626e9d400992b090545835d268";

	try{
		const response = await fetch(`${url}?api_key=${api_key}&email=${email}`);
		const data = await response.json();
		console.log(data);
		const p1 = document.getElementById("status");
		if(data.email_deliverability.status==='deliverable'){
			p1.innerText = "Valid Email Address";
			console.log("success");
		}
		else{
			p1.innerText = "Invalid Email Address";
		}

	}catch(err){
		console.log(err);
		alert(err);
	}
}

async function checkWeather(event) {
	if(event) event.preventDefault();
    const apiKey = "d55933b57094e92b620ef61c90511ebc";
    const cityName = document.getElementById("city").value;
    const resultDiv = document.getElementById("status-div2");
    const oldStatus = document.getElementById("status2");

    if (!cityName) {
        alert("Please enter a city name");
        return;
    }
    console.log(cityName);

    oldStatus.innerText = "Searching...";
    oldStatus.style.display = "block";
    resultDiv.style.display = "none";  

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        oldStatus.style.display = "none";

        if (data.cod === "404") {
            resultDiv.innerHTML = `<p style="color:red;">City not found. Please try again.</p>`;
        } else {
            resultDiv.innerHTML = `
                <h3>Weather in ${data.name}, ${data.sys.country}</h3>
                <p><b>Temperature:</b> ${data.main.temp}°C</p>
                <p><b>Condition:</b> ${data.weather[0].description}</p>
                <p><b>Humidity:</b> ${data.main.humidity}%</p>
            `;
            resultDiv.style.display = "block";
        }
    } catch (error) {
        console.error("Error fetching weather:", error);
        oldStatus.innerText = "Error loading data.";
    }
}