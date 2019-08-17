let healthp1 = "";


let players = {
  player1: {
    name: "aa",
    initialHealth: 100,
    slapdamage: 1,
  },
  player2: {
    name: "bb",
    initialHealth: 100,
    slapdamage: 1,
  }
}

//player 1 health function 
function slap(player1) {
  let currentHealthp1 = players.player1.initialhealth
  currentHealthp1--
  console.log(currentHealthp1)
  draw()
}


//player 2 health function 
function slap2(player2) {
  let currentHealthp2 = players.player2.health
  players.player1.health -= currentHealthp2
  draw()
}

console.log(slap)


function draw() {
  //player 1
  let healthValueElement = document.getElementById('health')
  healthValueElement.textContent = `health: ${players.player1.initialHealth}`
  let slapElement = document.querySelector("#slap")
  let punchElement = document.querySelector("#punchpl1")
  let kickpl1Element = document.querySelector("#kickpl1")
  //plaer 2

  let healthPlayer2ValueElement = document.getElementById('healthPlayer2')
  healthPlayer2ValueElement.textContent = `healthPlayer2: ${players.player2.initialHealth}`
  let slappl2Element = document.querySelector("#slappl2")
  let punchpl2Element = document.querySelector("#punchpl2")
  let kickpl2Element = document.querySelector("#kickpl2")
}
