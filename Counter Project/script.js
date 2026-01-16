let value = 0;
let level = 0;
function increase(){
	if(level == 10){
		const errorEl = document.getElementById("error");
		errorEl.textContent = "You've completed once! Please reset.";
		errorEl.style.backgroundColor = "#d1fae5"; 
		errorEl.style.color = "#065f46";          
		errorEl.style.padding = "10px";
		errorEl.style.borderRadius = "5px";
		return;
	}
	value++;
	if(value % 10 == 0){
		level++;
		document.getElementById("level").innerHTML = `Level : ${level}`;
	}
	resetError();
	document.getElementById("counter").textContent = value % 10;
}

function reset(){
	value = 0;
	level = 0;
	resetError();
	document.getElementById("counter").textContent = value;
	document.getElementById("level").innerHTML = `Level : ${level}`;
}

function decrease(){
	if(value % 10 == 0){
		const errorEl = document.getElementById("error");
		errorEl.textContent = "You can't decrease level.";
		errorEl.style.backgroundColor = "#fee2e2"; 
		errorEl.style.color = "#991b1b";          
		errorEl.style.padding = "10px";
		errorEl.style.borderRadius = "5px";
		return;
	}
	
	value--;
	document.getElementById("counter").textContent = value % 10;
}

function resetError(){
	const errorEl = document.getElementById("error");
	errorEl.textContent = "";
	errorEl.removeAttribute("style");
	return;
}