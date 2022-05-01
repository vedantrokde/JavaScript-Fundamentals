function onClickMe() {
	// alert("Hey I was click!");
	document.getElementById("form-legend").innerHTML = "Login Form";

	var paras = document.getElementsByTagName("p");
	for (var i = 0; i < paras.length; i++) {
		paras[i].style.fontSize = 9;
		paras[i].style.fontWeight = "bold";
	}

	var quotes = document.getElementsByClassName("quote");
	for (var i = 0; i < quotes.length; i++) {
		quotes[i].style.color = "red";
		quotes[i].style.fontStyle = "italic";
	}
}

function setRule() {
	document.getElementById("title").style.color = "red";
}

function resetRule() {
	document.getElementById("title").style.color = "black";
}

function onSubmit() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var mobile = document.getElementById("mobile").value;
	var country = document.getElementById("country");
	var male = document.getElementById("male");
	var female = document.getElementById("female");

	var validated = false;
	/* using basic string validation */
	// if (name.trim() === "" || name.length < 3 || name.length > 50)
	// 	alert("Invalid name entered");
	// else if (email.trim() === "" || email.length < 3 || email.length > 50)
	// 	alert("Invalid email entered");
	// else if (
	// 	password.trim() === "" ||
	// 	password.length < 6 ||
	// 	password.length > 50
	// )
	// 	alert("Invalid password entered");
	// else if (mobile.trim() === "" || mobile.length < 10 || mobile.length > 15)
	// 	alert("Invalid mobile entered");

	/* using regex validation */
	const namePattern = /^[a-zA-Z\s]{3,50}$/;
	const emailPattern = /^([a-z0-9\.-_]+)@([a-z0-9\.-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
	const passPattern = /^.{3,50}$/;
	const mobilePattern = /^[789][\d]{9}$/;

	if (!namePattern.test(name)) alert("Invalid name entered");
	else if (!emailPattern.test(email)) alert("Invalid email entered");
	else if (!passPattern.test(pass)) alert("Invalid password entered");
	else if (!mobilePattern.test(mobile)) alert("Invalid mobile entered");
	else if (!(male.checked || female.checked)) alert("Select your sex");
	else if (country.options[country.selectedIndex].value === "Select country")
		alert("Select your country");
	else validated = true;

	return validated;
}

function printNotice() {
	document.getElementById('quotes').innerHTML = "<h2 style='color: red;'>Your time to read text has elapsed.</h2>";
}

function popupNotice() {
	document.getElementById('quotes').innerHTML += "<p>Your are stuck in interval of routine.</p>";
}

function fadeIn() {
	var img = document.getElementById('pic');
	const fadeInIntr = setInterval(() => {
		opacity = Number(window.getComputedStyle(img).getPropertyValue('opacity'));
		if (opacity<1) {
			opacity += 0.1;
		} else clearInterval(fadeInIntr);
		img.style.opacity = opacity;
	}, 20);	
}

function fadeOut() {
	var img = document.getElementById('pic');
	const fadeOutIntr = setInterval(() => {
		opacity = Number(window.getComputedStyle(img).getPropertyValue('opacity'));
		if (opacity>0) {
			opacity -= 0.1;
		} else clearInterval(fadeOutIntr);
		img.style.opacity = opacity;
	}, 20);
}

function zoomIn() {
	var img = document.getElementById('pic');
	var zoomInIntr = setInterval(() => {
		width = Number(window.getComputedStyle(img).getPropertyValue('width').substring(0, 3));
		if (width<250) {
			width += 10;
		} else clearInterval(zoomInIntr);
		img.style.width = width+'px';
	}, 10);
}

function zoomOut() {
	var img = document.getElementById('pic');
	var zoomOutIntr = setInterval(() => {
		width = Number(window.getComputedStyle(img).getPropertyValue('width').substring(0, 3));
		if (width>200) {
			width -= 10;
		} else clearInterval(zoomOutIntr);
		img.style.width = width+'px';
	}, 10);
}
