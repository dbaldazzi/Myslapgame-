let healthp1 = "";


let players = {
  player1: {
    name: "aa",
    initialHealth: 100,
    slap: 1,
    punch: 5,
    kick: 10,
  },
  player2: {
    name: "bb",
    initialHealth: 100,
    slapdamage: 1,
    punch: 5,
    kick: 10,
  }
}

//player 1 health function 
function slap(player1) {
  let currentHealthp1 = players.player1.initialhealth
  currentHealthp1--

  draw()
}


function punchPl1(player1) {
  draw()
}

function kickPl1(player1) {
  draw()
}

//player 2 health function 
function slapPl2(player2) {
  let currentHealthpl2 = players.player2.initialhealth
  currentHealthpl2--
  players.player1.health -= currentHealthpl2
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
  healthValueElement.textContent = `: ${players.player1.initialHealth}`
  let slapElement = document.querySelector("#slap")
  let punchElement = document.querySelector("#punchPl1")
  let kickPl1Element = document.querySelector("#kickPl1")

  //plaer 2

  let healthPlayer2ValueElement = document.getElementById('healthPlayer2')
  healthPlayer2ValueElement.textContent = `: ${players.player2.initialHealth}`
  let slapPl2Element = document.querySelector("#slapPl2")
  let punchPl2Element = document.querySelector("#punchPl2")
  let kickPl2Element = document.querySelector("#kickPl2")
}
draw() 