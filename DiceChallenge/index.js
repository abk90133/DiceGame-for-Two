

var randomnumber1 = Math.floor(Math.random() * 6)+ 1;
var randomdiceimage = "dice" + randomnumber1 + ".png";
var randomImageSource = "Images/" + randomdiceimage;
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);
//Here we mention the attribute we want to change and the attribute we want to change it to

var randomnumber2 = Math.floor(Math.random() * 6)+ 1;
var randomImageSource2 = "Images/dice" + randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins 😎";
}
else if (randomnumber1 < randomnumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins 😎";
}
else {
  document.querySelector("h1").innerHTML = "It's a Draw 😎";
}
