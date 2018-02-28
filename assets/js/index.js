// adding an event listener
// create a variable to be stored in memory

var submitButton = document.getElementById('submitButton')
var usernameInputClass = document.getElementById('usernameInput').classList;
var passwordInputClass = document.getElementById('passwordInput').classList;

var usernameInput = document.getElementById('usernameInput');
usernameInput.addEventListener('change', validateForm)
submitButton.addEventListener('click', validateForm)

// form validation here.
function validateForm() {
	var usernameButton = document.getElementById('usernameInput');
	var passwordButton = document.getElementById('passwordInput');

	if (usernameButton.value == "" || passwordButton.value == ""){
		usernameInputClass.remove('is-danger');
		passwordInputClass.remove('is-danger');
		usernameInputClass.add('is-primary');
		passwordInputClass.add('is-primary');

	}else{
		usernameInputClass.remove('is-danger');
		passwordInputClass.remove('is-danger');
		usernameInputClass.add('is-success');
		passwordInputClass.add('is-success');
		alert("Login successful")
	}	
}
// form validation ends here

// change color of h1 tag.

var colorText = ['darkcyan', 'indianred', 'lightgrey', 'PaleVioletRed','coral', 'fuchsia', 'steelblue', 'deepskyblue']
var text = document.getElementById('colorChange');
var selectRandomly = function(colors) {
	var color = Math.floor(Math.random() * colors.length );
	return colors[color];
}

// interval is set to the function
setInterval(function(){
	console.log('Changing color');
	text.style.color = selectRandomly(colorText);
},3000);

