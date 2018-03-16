var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
var myImage = document.querySelector('img');

function setUserName() {
    var myName = prompt('Please enter your name.', '');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    if(myName === null || myName === '') {
        setUserName();
    }
}

if(!localStorage.getItem('name') || localStorage.getItem('name') === 'null') {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/vintages.jpg') {
      myImage.setAttribute ('src','images/blank.jpg');
    } else {
      myImage.setAttribute ('src','images/vintages.jpg');
    }
}

myButton.onclick = function() {
  setUserName();
}