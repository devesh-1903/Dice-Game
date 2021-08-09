var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;
// images/dice6.png
var randomImage="images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",randomImage);

var randomNumber2=Math.random()*6;
randomNumber2=Math.floor(randomNumber2)+1;

var randomImage2="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",randomImage2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player1 Wins🚩";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player2 Wins🚩"
}
else{
    document.querySelector("h1").innerHTML="Draw";
}