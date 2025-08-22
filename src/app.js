import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  //write your code here
  document.getElementById("draw").addEventListener("click", function () {
  let arrNumber = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let arrSign = ['♠', '♥', '♦', '♣'];



  let randomCardLine = document.getElementById("randomCards");
  let cardCount = document.getElementById("cardCount");
  let desireCardCount = parseInt(cardCount.value);
  console.log(desireCardCount);
  
  randomCardLine.innerHTML = "";

 
  for (let i = 0; i < desireCardCount; i++) {

  const randomCardNumberIndex = Math.floor(Math.random()*arrNumber.length);
  const randomCardSignIndex= Math.floor(Math.random() * arrSign.length);
  // let cardValue = arrNumber[randomCardNumberIndex] + arrSign[randomCardSignIndex];
  let Element = document.createElement("div");
  Element.innerHTML = `
  <div class="card">
    <span class="top">${arrSign[randomCardSignIndex]}</span>
    <span class="center">${arrNumber[randomCardNumberIndex]}</span>
    <span class="bottom">${arrSign[randomCardSignIndex]}</span>
  </div>
`;
randomCardLine.appendChild(Element);
let cardDiv = Element.querySelector(".card");

if (arrSign[randomCardSignIndex] === "♥" || arrSign[randomCardSignIndex] === "♦") {
  cardDiv.classList.add("red");
}

  }


 


 
 

  });
}