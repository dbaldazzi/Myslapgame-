let currentHealthPl1 = 100;
let currentHealthPl2 = 100;
let punchDamagePl1 = 5;
let punchDamagePl2 = 5;
let kickDamagePl1 = 10;
let kickDamagePl2 = 10;

let player1 = {
  name: "aa",
  initialHealth: 100,
  slap: 1,
  punch: 5,
  kick: 10,
  hits: 0,
}
let player2 = {
  name: "bb",
  initialHealth: 100,
  slapdamage: 1,
  punch: 5,
  kick: 10,
  hits: 0,
}


//player 1 health function 
function slap() {
  // let currentHealthPl1 = player1.initialHealth
  // currentHealthPl1.initialHealthplayer1--
  currentHealthPl1 == player1.initialHealth--
  console.log(player1.initialHealth)

  draw()
}


function punchPl1() {
  punchDamagePl1 == player1.punch
  player1.initialHealth -= punchDamagePl1
  console.log(player1.initialHealth)

  draw()
}

function kickPl1() {
  kickDamagePl1 == player1.kick
  player1.initialHealth -= kickDamagePl1
  console.log(player1.initialHealth)
  draw()
}

//player 2 health function 
function slapPl2() {
  // let currentHealthPl2 = player2.initialHealth
  // currentHealthPl2--

  let currentHealthPl2 = player2.initialHealth--
  console.log(player2.initialHealth)
  draw()
}

function punchPl2() {
  punchDamagePl2 == player2.punch
  // player2.initialHealth == punchDamagePl2--
  player2.initialHealth -= punchDamagePl2
  console.log(player2.initialHealth)
  draw()
}

function kickPl2() {
  kickDamagePl2 == player2.kick
  player2.initialHealth -= kickDamagePl2
  console.log(player2.initialHealth)
  draw()
}

function update() {
  currentHealthPl2
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

}
draw() 