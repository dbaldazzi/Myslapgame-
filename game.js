// Player info
let player = {
  name: "Ormarr",
  health: 100,
  slap: 1,
  punch: 5,
  kick: 10,
  hits: 0,
  items: []
}

//items info
let items = {
  sword: { name: 'sword', modifier: 3, description: 'long sword' },
  shield: { name: 'shield', modifier: 5, description: 'medieval Scutum shield' },
  lance: { name: 'Lance', modifier: 2, destription: '8 foot lance' },
}

//functions giving objects to player
//give sword
function giveSword() {
  player.items.push(items.sword)
}
function givesShield() {
  player.items.push(items.shield)

}
function givesLance() {
  player.items.push(items.lance)
}

//added item buttons 
function sword() {
  giveSword()
}
function shield() {
  givesShield()
}
function lance() {
  givesLance()
}

//function for adding mods from items object to player items array
function addMods() {
  let addModsTotal = 0;
  for (let i = 0; i < player.items.length; i++) {
    let item = player.items[i];
    addModsTotal += item.modifier;
  }
  return addModsTotal
}

//player action functions that work with action buttons
//slap function 
function slap() {
  let slapDamage = player.slap
  player.health -= slapDamage - addMods()
  let hits = player.hits
  hits == player.hits++
  player.items = [];
  console.log(player.health)
  call()
}

//punch function 
function punch() {
  let punchDamage = player.punch
  player.health -= punchDamage - addMods()
  let hits = player.hits
  hits == player.hits++
  player.items = [];
  console.log(player.health)
  call()
}

//kick function 
function kick() {
  let kickDamage = player.kick
  player.health -= kickDamage - addMods()
  let hits = player.hits
  hits == player.hits++
  player.items = [];
  console.log(player.health)
  call()
}

//player 1
function call() {

  let healthValueElement = document.getElementById('health')
  healthValueElement.textContent = `: ${player.health}`
  let slapElement = document.querySelector("#slap")
  let punchPl1Element = document.querySelector("#punch")
  let kickPl1Element = document.querySelector("#kick")
  let targetNameElement = document.getElementById("targetName")
  targetNameElement.textContent = `: ${player.name}`
  let totalHitsElement = document.getElementById("totalHits")
  totalHitsElement.textContent = `: ${player.hits}`
  let shieldElement = document.querySelector("#shield")
  let swordElement = document.querySelector("#sword")
  let lanceElement = document.querySelector("#lance")
  let resetElement = document.querySelector("#reset")
  let progressElement = document.getElementById('progress')
  progressElement.textContent = `${player.health}`
}

//game update 
function upDate() {
  player.health
  call()

}
//game reset
function reset() {
  window.location.reload(false);
  call()
}

call()
upDate()