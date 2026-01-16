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