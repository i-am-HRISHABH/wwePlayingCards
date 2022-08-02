"use strict";

const rankbtn = document.querySelector("#rank");
const heightbtn = document.querySelector("#height");
const weightbtn = document.querySelector("#weight");
const experiencebtn = document.querySelector("#experience");
const fightbtn = document.querySelector("#fight");
const wrestlerimage = document.querySelector(".cardStack1");
const shufflebtn = document.querySelector("#shuffle-button");
const wrestlerdetail = document.querySelectorAll(".mainAttribute");
const computerWrestlerImage = document.querySelector(".cardStack1C");
const userCallSection = document.querySelector(".userCall");
const compCallSection = document.querySelector(".compCall");
const gobtn = document.querySelector(".go");
const hidingCard = document.querySelector(".cardStack4C");
const checkbtn = document.querySelector(".check");
const userScore = document.querySelector("#userScore");
const userCardLeft = document.querySelector("#userCard");
const compScore = document.querySelector("#compScore");
const compCardLeft = document.querySelector("#compCard");

const rank = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const height = [
  6.3, 6.4, 5.11, 5.8, 6.2, 6.5, 6.1, 6.11, 6.5, 5.7, 7.0, 6.3, 7.1, 5.1, 7.2,
  6.3, 6.1, 6.4, 5.8, 6.1,
];
const weight = [
  270, 285, 150, 155, 280, 287, 250, 299, 265, 165, 325, 245, 420, 240, 330,
  370, 210, 270, 135, 239,
];
const experience = [
  3, 5, 3, 2.5, 4.5, 4, 5, 5, 5, 5, 5, 4.5, 4.5, 3, 4.5, 4.5, 4, 4, 3, 3.5,
];
const fight = [
  180, 250, 210, 60, 212, 165, 450, 500, 480, 390, 516, 465, 385, 111, 170, 290,
  434, 235, 198, 229,
];

const images = [
  "./images/tribalChief.jpg",
  "./images/beast.jpg",
  "./images/charlotte.jpg",
  "./images/rondarousey.jpg",
  "./images/bobby.jpg",
  "./images/drew.jpg",
  "./images/johncena.jfif",
  "./images/undertaker.jpg",
  "./images/ortan.jpg",
  "./images/rey.jpg",
  "./images/kane.jpg",
  "./images/edge.jpg",
  "./images/bigshow.jpg",
  "./images/ajstyle.png",
  "./images/khali.jpg",
  "./images/markhenry.jpg",
  "./images/kofi.jpg",
  "./images/sheamus.jpg",
  "./images/sb.jpg",
  "./images/miz.jpg",
];

var userPoint = 0; //users points
var compPoint = 0; // computers points
let user = []; // users card stack
let computer = []; // computers card stack
const cards = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
]; //ranks duplicate array used to ditribute cards.
let i = 20; //iterable used in distribute function.

var myCard = 1; //users to card
var compCallValue;
var userCalValue;
var compCard = 3; //computers top card

//function to check result.
function CheckResult() {
  if (userCalValue) {
    // compCallSection.innerHTML = `${compCallValue}`;
    compCallValue = Number(compCallValue);
    userCalValue = Number(userCalValue);
    //---checking result----
    console.log(
      "userValue: " + userCalValue + "and it's type: " + typeof userCalValue
    );
    console.log(
      "compValue: " + compCallValue + "and it's type: " + typeof compCallValue
    );
    if (userCalValue > compCallValue) {
      userPoint++;
      console.log("you win");
    } else if (userCalValue < compCallValue) {
      compPoint++;
      console.log("You loose");
    } else {
      console.log("Clash bitch");
    }
    //reducing myCard and updating topCards
    myCard--;
    compCard--;
    setFrontCard(user[myCard]);
    setFrontCardComputer(computer[compCard]);
    //set score and card left value
    userScore.innerHTML = userPoint;
    userCardLeft.innerHTML = myCard;
    compScore.innerHTML = compPoint;
    compCardLeft.innerHTML = compCard;
    //setting call values to default
    userCallSection.innerHTML = "?";
    compCallSection.innerHTML = "?";
    compCallValue = undefined;
    userCalValue = undefined;
    //hide go button
    gobtn.classList.add("revealCard");
  } else {
    alert("Enter your Attribute call first!");
  }
}

//setting the user top card.
function setFrontCard(idx) {
  idx--;
  rankbtn.innerHTML = `RANK<span class="mainAttribute"> #${rank[idx]}</span>`;
  heightbtn.innerHTML = `HEIGHT <span class="mainAttribute">${height[idx]}</span> ft`;
  weightbtn.innerHTML = `WEIGHT <span class="mainAttribute"> ${weight[idx]}</span> lbs`;
  experiencebtn.innerHTML = `EXPERIENCE <span class="mainAttribute"> ${experience[idx]}</span>`;
  fightbtn.innerHTML = `FIGHT <span class="mainAttribute"> ${fight[idx]}</span>`;
  wrestlerimage.style.background = `url(${images[idx]})`;
  wrestlerimage.style.backgroundSize = "cover";
}
//setting the computer top card.
function setFrontCardComputer(idx) {
  idx--;
  computerWrestlerImage.style.background = `url(${images[idx]})`;
  computerWrestlerImage.style.backgroundSize = "cover";
  hidingCard.classList.remove("revealCard");
}
//tooggle the hideCard for computer
function revealComputer() {
  if (userCalValue) {
    compCallSection.innerHTML =
      compCallValue < 0 ? `${-1 * compCallValue}` : compCallValue;
    hidingCard.classList.add("revealCard");
    gobtn.classList.remove("revealCard");
  } else {
    alert(
      "No cheating allowed! please enter you bid before revealing the opponent."
    );
  }
}

function distribute() {
  while (i > 0) {
    let index = Math.floor(Math.random() * i);
    if (i % 2 == 0) {
      user.push(cards[index]);
    } else {
      computer.push(cards[index]);
    }
    let temp = cards[index];
    cards[index] = cards[cards.length - 1];
    cards[cards.length - 1] = temp;
    cards.pop();
    i--;
  }
  myCard = 9;
  compCard = 9;
  setFrontCard(user[myCard]);
  setFrontCardComputer(computer[compCard]);
  //set score and cardsleft values
  userScore.innerHTML = userPoint;
  userCardLeft.innerHTML = myCard;
  compScore.innerHTML = compPoint;
  compCardLeft.innerHTML = compCard;
  userScore;
  console.log(user);
  console.log(computer);
}

// function shuffle() {
//   let index = Math.floor(Math.random() * 20);
//   rankbtn.innerHTML = `RANK #${rank[index]}`;
//   heightbtn.innerHTML = `HEIGHT ${height[index]} ft`;
//   weightbtn.innerHTML = `WEIGHT ${weight[index]} lbs`;
//   experiencebtn.innerHTML = `EXPERIENCE ${experience[index]}`;
//   fightbtn.innerHTML = `FIGHT ${fight[index]}`;
//   wrestlerimage.style.background = `url(${images[index]})`;
//   wrestlerimage.style.backgroundSize = "cover";
//   wrestlerdetail.style.color = "black";
//   wrestlerdetail.style.fontsize = "1.5em";
//   wrestlerdetail.style.fontweight = "bold";
// }

shufflebtn.addEventListener("click", distribute);

//on the spot functions to get call value and set them on button clicks.
rankbtn.addEventListener("click", function () {
  if (userCalValue == undefined) {
    userCallSection.innerHTML = `${rank[user[myCard] - 1]}`;
    userCalValue = `${rank[user[myCard] - 1]}`;
    userCalValue = -1 * Number(userCalValue);
    compCallValue = `${rank[computer[compCard] - 1]}`;
    compCallValue = -1 * Number(compCallValue);
  }
});
heightbtn.addEventListener("click", function () {
  if (userCalValue == undefined) {
    userCallSection.innerHTML = `${height[user[myCard] - 1]}`;
    userCalValue = `${height[user[myCard] - 1]}`;
    compCallValue = `${height[computer[compCard] - 1]}`;
  }
});
weightbtn.addEventListener("click", function () {
  if (userCalValue == undefined) {
    userCallSection.innerHTML = `${weight[user[myCard] - 1]}`;
    userCalValue = `${weight[user[myCard] - 1]}`;
    compCallValue = `${weight[computer[compCard] - 1]}`;
  }
});
experiencebtn.addEventListener("click", function () {
  if (userCalValue == undefined) {
    userCallSection.innerHTML = `${experience[user[myCard] - 1]}`;
    userCalValue = `${experience[user[myCard] - 1]}`;
    compCallValue = `${experience[computer[compCard] - 1]}`;
  }
});
fightbtn.addEventListener("click", function () {
  if (userCalValue == undefined) {
    userCallSection.innerHTML = `${fight[user[myCard] - 1]}`;
    userCalValue = `${fight[user[myCard] - 1]}`;
    compCallValue = `${fight[computer[compCard] - 1]}`;
  }
});
//adding checkResult function to go button
gobtn.addEventListener("click", function () {
  CheckResult();
});

//adding wrestlerrvealing function to check button
checkbtn.addEventListener("click", revealComputer);
