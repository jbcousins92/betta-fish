var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/fish-image.png') {
	  myImage.setAttribute ('src', 'images/fish-image2.png')
	} else {
	  myImage.setAttribute ('src', 'images/fish-image.png');
	}
}



var myButton = document.querySelector('button');
var myHeading = document.querySelector ('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'A Short Guide to Caring for Your Betta, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name')
	myHeading.textContent = 'A Short Guide to Caring for Your Betta, ' + storedName
}

myButton.onclick = function() {
  setUserName();
}