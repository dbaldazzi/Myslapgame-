let currentHealthPl1 = 100;
let currentHealthPl2 = 100;


let player1 = {
  name: "aa",
  initialHealth: 100,
  slap: 1,
  punch: 5,
  kick: 10,
}
let player2 = {
  name: "bb",
  initialHealth: 100,
  slapdamage: 1,
  punch: 5,
  kick: 10,
}


//player 1 health function 
function slap() {
  // let currentHealthPl1 = player1.initialHealth
  // currentHealthPl1.initialHealthplayer1--
  currentHealthPl1 == player1.initialHealth--
  console.log(player1.initialHealth)

  draw()
}


function punchPl1(player1) {
  draw()
}

function kickPl1(player1) {
  draw()
}

//player 2 health function 
function slapPl2() {
  // let currentHealthPl2 = player2.initialHealth
  // currentHealthPl2--
  currentHealthPl2 == player2.initialHealth--
  console.log(player2.initialHealth)
  draw()
}

function punchPl2(player2) {
  draw()
}

function kickPl2(player2) {
  draw()
}

console.log(slap)


function draw() {
  //player 1
  let healthValueElement = document.getElementById('health')
  healthValueElement.textContent = `: ${player1.initialHealth}`
  let slapElement = document.querySelector("#slap")
  let punchElement = document.querySelector("#punchPl1")
  let kickPl1Element = document.querySelector("#kickPl1")

  //plaer 2

  let healthPlayer2ValueElement = document.getElementById('healthPlayer2')
  healthPlayer2ValueElement.textContent = `: ${player2.initialHealth}`
  let slapPl2Element = document.querySelector("#slapPl2")
  let punchPl2Element = document.querySelector("#punchPl2")
  let kickPl2Element = document.querySelector("#kickPl2")
}
draw() 