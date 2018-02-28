// adding an event listener to the form

var submitButton = document.getElementById('submitButton')
submitButton.addEventListener('click', validateForm)

// validating form here

function validateForm() {
	var checkFirstName = document.getElementById('firstName');
	var checkLastName = document.getElementById('lastName');
	var checkEmail = document.getElementById('email');
	var checkDate = document.getElementById('dateOptions');
	var checkInfo = document.getElementById('infoInput');

	if (checkFirstName.value == "" || checkLastName.value == "" || checkEmail.value == "" || checkDate.value == "" || checkInfo.value == "") {
		alert('Please enter all fields')

	}else{
		alert('Login successful')
	}
}

// changing the text of the page title

var changeText = document.getElementById('pageTitle');

setInterval(function() {
	changeText.textContent;

changeText.textContent = "We'd love to work with you!";
}, 2000);

// placing focus on every input for the form with an event listener

var checkFirstName = document.getElementById('firstName');
var checkLastName = document.getElementById('lastName');
var checkEmail = document.getElementById('email');
var checkDate = document.getElementById('dateOptions');
var checkInfo = document.getElementById('infoInput');


firstName.addEventListener('focus', inputFocus);
lastName.addEventListener('focus', inputFocus);
email.addEventListener('focus', inputFocus);
dateOptions.addEventListener('focus', inputFocus);
infoInput.addEventListener('focus', inputFocus);


function inputFocus() {
	document.getElementById('firstName').style.backgroundColor = "red";
	document.getElementById('lastName').style.backgroundColor = "red";
	document.getElementById('email').style.backgroundColor = "red";
    document.getElementById('infoInput').style.backgroundColor = "red";
    document.getElementById('dateOptions').style.backgroundColor = "red";
 
}