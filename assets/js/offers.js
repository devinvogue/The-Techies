// changing the text of the pageTitle by creating a function to randomly select the colors for the text

var changeText = ["Because you are special", "Hello, most cherished client", "Hello,there!"]
var myTitle = document.getElementById('pageTitle');
var selectRandom = function(change) {
	var phrase = Math.floor(Math.random() * change.length );
	return change[phrase];
}

setInterval(function() {
	console.log('changeText');
    myTitle.innerHTML = selectRandom(changeText);
}, 3000);


/*var changeText = document.getElementById('pageTitle');

setInterval(function() {
	changeText.textContent;

changeText.textContent = "Because we care!";
}, 2000);
*/

