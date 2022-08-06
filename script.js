"use strict";

const rankbtn = document.querySelector("#rank");
const heightbtn = document.querySelector("#height");
const weightbtn = document.querySelector("#weight");
const experiencebtn = document.querySelector("#experience");
const fightbtn = document.querySelector("#fight");
const beltbtn = document.querySelector("#belts");
const wrestlername = document.querySelector(".name");
const cwrestlername = document.querySelector(".cname");
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
const resultWindow = document.querySelector(".resultWindow");
const endScore = document.querySelector("#endScore");

const wrestler = [
  {
    name: "Roman Reigns",
    rank: 1,
    height: 190,
    weight: 120,
    belts: 7,
    fight: 1343,
    image: "./images/tribalChief.jpg",
    experience: 12,
  },
  {
    name: "Brock lesnar",
    rank: 2,
    height: 193,
    weight: 130,
    belts: 10,
    fight: 421,
    image: "./images/beast.jpg",
    experience: 16,
  },
  {
    name: "Charlotte Flair",
    rank: 3,
    height: 178,
    weight: 65,
    belts: 16,
    fight: 999,
    image: "./images/charlotte.jpg",
    experience: 10,
  },
  {
    name: "ronda rousey",
    rank: 4,
    height: 170,
    weight: 61,
    belts: 2,
    fight: 104,
    image: "./images/rondarousey.jpg",
    experience: 3,
  },
  {
    name: "Bobby lashley",
    rank: 5,
    height: 191,
    weight: 124,
    belts: 7,
    fight: 359,
    image: "./images/bobby.jpg",
    experience: 7,
  },
  {
    name: "Drew mcintyre",
    rank: 6,
    height: 196,
    weight: 120,
    belts: 6,
    fight: 1420,
    image: "./images/drew.jpg",
    experience: 13,
  },
  {
    name: "john Cena",
    rank: 7,
    height: 185,
    weight: 114,
    belts: 25,
    fight: 2266,
    image: "./images/johncena.jfif",
    experience: 21,
  },
  {
    name: "The UnderTaker",
    rank: 8,
    height: 208,
    weight: 140,
    belts: 14,
    fight: 2353,
    image: "./images/undertaker.jpg",
    experience: 30,
  },
  {
    name: "Triple H",
    rank: 9,
    height: 193,
    weight: 116,
    belts: 24,
    fight: 1920,
    image: "./images/tripleh.jpg",
    experience: 24,
  },
  {
    name: "Randy Orton",
    rank: 10,
    height: 196,
    weight: 113,
    belts: 20,
    fight: 2384,
    image: "./images/ortan.jpg",
    experience: 21,
  },
  {
    name: "The rock",
    rank: 11,
    height: 196,
    weight: 118,
    belts: 17,
    fight: 854,
    image: "./images/rock.jpg",
    experience: 13,
  },
  {
    name: "Rey Mysterio",
    rank: 12,
    height: 168,
    weight: 79,
    belts: 15,
    fight: 1432,
    image: "./images/rey.jpg",
    experience: 17,
  },
  {
    name: "Kane",
    rank: 13,
    height: 213,
    weight: 147,
    belts: 17,
    fight: 2945,
    image: "./images/kane.jpg",
    experience: 24,
  },
  {
    name: "Edge",
    rank: 14,
    height: 196,
    weight: 109,
    belts: 30,
    fight: 1650,
    image: "./images/edge.jpg",
    experience: 18,
  },
  {
    name: "Big Show",
    rank: 15,
    height: 213,
    weight: 174,
    belts: 19,
    fight: 2238,
    image: "./images/bigshow.jpg",
    experience: 19,
  },
  {
    name: "Seth Rollins",
    rank: 16,
    height: 185,
    weight: 98,
    belts: 14,
    fight: 1484,
    image: "./images/seth.jpg",
    experience: 11,
  },
  {
    name: "AJ Styles",
    rank: 17,
    height: 180,
    weight: 99,
    belts: 7,
    fight: 808,
    image: "./images/ajstyle.png",
    experience: 8,
  },
  {
    name: "Khali",
    rank: 18,
    height: 216,
    weight: 157,
    belts: 14,
    fight: 658,
    image: "./images/khali.jpg",
    experience: 9,
  },
  {
    name: "Mark Henry",
    rank: 19,
    height: 193,
    weight: 163,
    belts: 2,
    fight: 1433,
    image: "./images/markhenry.jpg",
    experience: 21,
  },
  {
    name: "Kofi Kingstone",
    rank: 20,
    height: 183,
    weight: 96,
    belts: 21,
    fight: 2135,
    image: "./images/kofi.jpg",
    experience: 16,
  },
  {
    name: "sheamus",
    rank: 21,
    height: 191,
    weight: 121,
    belts: 12,
    fight: 1936,
    image: "./images/sheamus.jpg",
    experience: 15,
  },
  {
    name: "Dolph Ziggler",
    rank: 22,
    height: 183,
    weight: 99,
    belts: 15,
    fight: 2098,
    image: "./images/ziggler.png",
    experience: 17,
  },
  {
    name: "Sasha Banks",
    rank: 23,
    height: 165,
    weight: 52,
    belts: 10,
    fight: 917,
    image: "./images/sb.jpg",
    experience: 10,
  },
  {
    name: "The Miz",
    rank: 24,
    height: 185,
    weight: 100,
    belts: 20,
    fight: 2029,
    image: "./images/miz.jpg",
    experience: 18,
  },
  {
    name: "Jinder Mahal",
    rank: 25,
    height: 196,
    weight: 108,
    belts: 3,
    fight: 901,
    image: "./images/jinder.jpg",
    experience: 10,
  },
  {
    name: "Kevin owens",
    rank: 26,
    height: 180,
    weight: 120,
    belts: 7,
    fight: 813,
    image: "./images/kevinowens.jpg",
    experience: 8,
  },
  {
    name: "Zalina Vega",
    rank: 27,
    height: 154,
    weight: 50,
    belts: 1,
    fight: 128,
    image: "./images/zelina.jpg",
    experience: 6,
  },
  {
    name: "Nikki Bella",
    rank: 28,
    height: 168,
    weight: 57,
    belts: 2,
    fight: 600,
    image: "./images/nikkibella.jpg",
    experience: 11,
  },
  {
    name: "Shawn Michelle",
    rank: 29,
    height: 185,
    weight: 98,
    belts: 14,
    fight: 1913,
    image: "./images/shawn.jpg",
    experience: 21,
  },
  {
    name: "shinsuke Nakamura",
    rank: 30,
    height: 188,
    weight: 100,
    belts: 14,
    fight: 7,
    image: "./images/nakamura.jpg",
    experience: 7,
  },
  {
    name: "Batista",
    rank: 31,
    height: 194,
    weight: 128,
    belts: 10,
    fight: 979,
    image: "./images/batista.jpg",
    experience: 12,
  },
  {
    name: "Alexa Bliss",
    rank: 32,
    height: 155,
    weight: 47,
    belts: 8,
    fight: 617,
    image: "./images/alexabliss.jpg",
    experience: 10,
  },
  {
    name: "Beth Phoenix",
    rank: 33,
    height: 171,
    weight: 70,
    belts: 4,
    fight: 667,
    image: "./images/bethphoenix.jpg",
    experience: 11,
  },
  {
    name: "Goldberg",
    rank: 34,
    height: 193,
    weight: 128,
    belts: 5,
    fight: 64,
    image: "./images/goldberg.png",
    experience: 8,
  },
  {
    name: "Matt riddle",
    rank: 35,
    height: 188,
    weight: 98,
    belts: 4,
    fight: 434,
    image: "./images/riddle.jpg",
    experience: 5,
  },
  {
    name: "Stone cold",
    rank: 36,
    height: 188,
    weight: 116,
    belts: 12,
    fight: 755,
    image: "./images/stonecold.jpg",
    experience: 10,
  },
  {
    name: "Becky Lynch",
    rank: 37,
    height: 168,
    weight: 59,
    belts: 6,
    fight: 859,
    image: "./images/becky.jpg",
    experience: 10,
  },
  {
    name: "Tamina Snuka",
    rank: 38,
    height: 175,
    weight: 78,
    belts: 2,
    fight: 626,
    image: "./images/tamina.jpg",
    experience: 13,
  },
  {
    name: "Jimmy uso",
    rank: 39,
    height: 188,
    weight: 108,
    belts: 8,
    fight: 1381,
    image: "./images/jimmy.jpg",
    experience: 13,
  },
  {
    name: "Jey uso",
    rank: 40,
    height: 187,
    weight: 107,
    belts: 8,
    fight: 1355,
    image: "./images/jay.jfif",
    experience: 13,
  },
];

var userPoint = 0; //users points
var compPoint = 0; // computers points
let user = []; // users card stack
let computer = []; // computers card stack
var myCard = 0; //users top card
var compCallValue;
var userCalValue;
var compCard = 0; //computers top card
const wrestleManiaSong = new Audio("./sounds/WrittenInTheStars.mp3");
const revealsound = new Audio("./sounds/reveal.wav");
const selectSound = new Audio("./sounds/select.wav");
const WWEbellSound = new Audio("./sounds/WWEBell.mp3");

const hoverSound = new Audio("./sounds/attributeHover.wav");
const playHoverSound = () => {
  hoverSound.play();
};

//function to check game is over and diplay result screen
const GameOver = () => {
  resultWindow.classList.remove("revealCard");
  endScore.innerHTML = `${userPoint}`;
};

//function to check result.
function CheckResult() {
  if (userCalValue) {
    WWEbellSound.play();
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
    //set score and card left value
    userScore.innerHTML = userPoint;
    userCardLeft.innerHTML = myCard;
    compScore.innerHTML = compPoint;
    compCardLeft.innerHTML = compCard;
    //reducing myCard and updating topCards
    myCard--;
    compCard--;
    //checking the value of card and showing resultScreen
    if (myCard < 0) {
      GameOver();
    } else {
      setFrontCard(user[myCard]);
      setFrontCardComputer(computer[compCard]);
    }
    //setting call values to default
    cwrestlername.innerHTML = "?";
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
  wrestlername.innerHTML = `${wrestler[idx].name}`;
  rankbtn.innerHTML = `RANK<span class="mainAttribute"> #${wrestler[idx].rank}</span>`;
  heightbtn.innerHTML = `HEIGHT <span class="mainAttribute">${wrestler[idx].height}</span> cm`;
  weightbtn.innerHTML = `WEIGHT <span class="mainAttribute"> ${wrestler[idx].weight}</span> kg`;
  experiencebtn.innerHTML = `EXPERIENCE <span class="mainAttribute"> ${wrestler[idx].experience}</span>`;
  fightbtn.innerHTML = `FIGHT <span class="mainAttribute"> ${wrestler[idx].fight}</span>`;
  beltbtn.innerHTML = `BELTS <span class="mainAttribute"> ${wrestler[idx].belts}</span>`;
  wrestlerimage.style.background = `url(${wrestler[idx].image})`;
  wrestlerimage.style.backgroundSize = "cover";
}
//setting the computer top card.
function setFrontCardComputer(idx) {
  idx--;
  computerWrestlerImage.style.background = `url(${wrestler[idx].image})`;
  computerWrestlerImage.style.backgroundSize = "cover";
  hidingCard.classList.remove("revealCard");
}
//tooggle the hideCard for computer
function revealComputer() {
  if (userCalValue) {
    selectSound.play();
    revealsound.play();
    cwrestlername.innerHTML = `${wrestler[computer[compCard] - 1].name}`;
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

let i = 40; //iterable used in distribute function.
var cards = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
]; //ranks duplicate array used to ditribute cards.
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
  myCard = 19;
  compCard = 19;
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

shufflebtn.addEventListener("click", function () {
  // wrestleManiaSong.play();
  distribute();
  shufflebtn.classList.add("revealCard");
});

//on the spot functions to get call value and set them on button clicks.
rankbtn.addEventListener("click", function () {
  if (userCalValue == undefined) {
    selectSound.play();
    userCallSection.innerHTML = `${wrestler[user[myCard] - 1].rank}`;
    userCalValue = `${wrestler[user[myCard] - 1].rank}`;
    userCalValue = -1 * Number(userCalValue);
    compCallValue = `${wrestler[computer[compCard] - 1].rank}`;
    compCallValue = -1 * Number(compCallValue);
  }
});
heightbtn.addEventListener("click", function () {
  if (userCalValue == undefined) {
    selectSound.play();
    userCallSection.innerHTML = `${wrestler[user[myCard] - 1].height}`;
    userCalValue = `${wrestler[user[myCard] - 1].height}`;
    compCallValue = `${wrestler[computer[compCard] - 1].height}`;
  }
});
weightbtn.addEventListener("click", function () {
  if (userCalValue == undefined) {
    selectSound.play();
    userCallSection.innerHTML = `${wrestler[user[myCard] - 1].weight}`;
    userCalValue = `${wrestler[user[myCard] - 1].weight}`;
    compCallValue = `${wrestler[computer[compCard] - 1].weight}`;
  }
});
experiencebtn.addEventListener("click", function () {
  if (userCalValue == undefined) {
    selectSound.play();
    userCallSection.innerHTML = `${wrestler[user[myCard] - 1].experience}`;
    userCalValue = `${wrestler[user[myCard] - 1].experience}`;
    compCallValue = `${wrestler[computer[compCard] - 1].experience}`;
  }
});
fightbtn.addEventListener("click", function () {
  if (userCalValue == undefined) {
    selectSound.play();
    userCallSection.innerHTML = `${wrestler[user[myCard] - 1].fight}`;
    userCalValue = `${wrestler[user[myCard] - 1].fight}`;
    compCallValue = `${wrestler[computer[compCard] - 1].fight}`;
  }
});
beltbtn.addEventListener("click", function () {
  if (userCalValue == undefined) {
    selectSound.play();
    userCallSection.innerHTML = `${wrestler[user[myCard] - 1].belts}`;
    userCalValue = `${wrestler[user[myCard] - 1].belts}`;
    compCallValue = `${wrestler[computer[compCard] - 1].belts}`;
  }
});
// rankbtn.addEventListener("hover", playHoverSound);
//adding checkResult function to go button
gobtn.addEventListener("click", function () {
  CheckResult();
});

//adding wrestlerrvealing function to check button
checkbtn.addEventListener("click", revealComputer);
