// @ts-ignore
let punchDamagePl1 = 5;
let punchDamagePl2 = 5;
let kickDamagePl1 = 10;
let kickDamagePl2 = 10;
let slapCount = 0;
let results = "";
let currentHealthPl1 = 0;
let currentHealthPl2 = 0;

//players 
let player1 = {
  name: "ORMARR",
  initialHealth: 100,

  slap: 1,
  punch: 5,
  kick: 10,
  hits: 0,
}
let player2 = {
  name: "REGINHARD",
  initialHealth: 100,
  slap: 1,
  punch: 5,
  kick: 10,
  hits: 0,
}


//player 1 health function 
function slap() {
  currentHealthPl1 == player1.initialHealth
  currentHealthPl1 -= player1.slap
  slapCount == player2.hits++
  draw()
}
slap()
console.log(currentHealthPl1)

function punchPl1() {
  punchDamagePl1 = player1.punch
  currentHealthPl1 -= punchDamagePl1
  slapCount == player2.hits++
  draw()

}

function kickPl1() {
  kickDamagePl1 = player1.kick
  currentHealthPl1 -= kickDamagePl1
  slapCount == player2.hits++
  draw()
}



//player 2 health function 
function slapPl2() {
  currentHealthPl2 -= player2.slap
  slapCount == player1.hits++
  draw()
}

function punchPl2() {
  punchDamagePl2 = player2.punch
  currentHealthPl2 -= punchDamagePl2
  slapCount == player1.hits++
  draw()
}

function kickPl2() {
  kickDamagePl2 = player2.kick
  currentHealthPl2 -= kickDamagePl2
  slapCount == player1.hits++
  draw()
}


//winner function 
function winner(currentHealthPl1, currentHealthPl2) {
  if (currentHealthPl1 <= 0) {
    results === "Player Two"
  } else if (currentHealthPl2 <= 0) {
    results === "player one"
  }


}


function draw() {
  //player 1
  let healthValueElement = document.getElementById('health')
  healthValueElement.textContent = `: ${player1.initialHealth}`
  let slapElement = document.querySelector("#slap")
  let punchPl1Element = document.querySelector("#punchPl1")
  let kickPl1Element = document.querySelector("#kickPl1")
  let player1NameElement = document.getElementById("player1Name")
  player1NameElement.textContent = `: ${player1.name}`
  let player1HitsElement = document.getElementById("player1Hits")
  player1HitsElement.textContent = `: ${player1.hits}`

  //plaer 2

  let healthPlayer2ValueElement = document.getElementById('healthPlayer2')
  healthPlayer2ValueElement.textContent = `: ${player2.initialHealth}`
  let slapPl2Element = document.querySelector("#slapPl2")
  let punchPl2Element = document.querySelector("#punchPl2")
  let kickPl2Element = document.querySelector("#kickPl2")
  let player2NameElement = document.getElementById("player2Name")
  player2NameElement.textContent = `: ${player2.name}`
  let player2HitsElement = document.getElementById("player2Hits")
  player2HitsElement.textContent = `: ${player2.hits}`


  //winner
  let winnerElement = document.getElementById("winner")
  winnerElement.textContent = `: ${results}`
}

winner()
draw()


