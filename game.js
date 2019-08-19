// let health = 100
// let name = "Demon Knight"
// let hits = 

let hiddenElem1 = document.getElementById("hidden1")
let hiddenElem2 = document.getElementById("hidden2")
let hiddenElem3 = document.getElementById("hidden3")



let target = {
  name: 'Demon Knight',
  health: 100,
  hits: 0,
  backpack: []
}

let players = {
  player1: {
    health: 100
  },
  player2: {
    health: 100
  },
  player3: {
    health: 100

  }
}

//NOTE Items
var items = {
  healthPosion: {
    name: 'Estus Flask',
    modifier: 5,
    description: 'Drink to deal +5 extra damage.'
  },
  throwAble: {
    name: 'Fire Bomb',
    modifier: 10,
    description: 'Burns Target for +10 damage.'
  },
  weaponMod: {
    name: 'Charcoal Pine Resin',
    modifier: 15,
    description: 'Applies fire damage to weapon. Gives +15 attacks'
  },
}
//NOTE Actions
//FIXME Construction Player Damage when attacking boss
function jab(player) {
  if (players[player].health < 1) {
  }
  target.health -= 1 + addMod()
  target.hits += 1
  players[player].health -= 1
  //test Console
  console.log(players[player].health)

  update()
}
function slash(player) {
  if (players[player].health < 1) {
  }
  target.health -= 5 + addMod()
  target.hits += 1
  players[player].health -= 5

  update()
}
function thrust(player) {
  if (players[player].health < 1) {
  }
  target.health -= 10 + addMod()
  target.hits += 1
  players[player].health -= 10

  update()
}
//NOTE item Functions
function giveHealthPosions() {
  target.backpack.push(items.healthPosion)
  //Remove Hidden / Active item
  document.getElementById("hidden1").innerHTML = "Estus Flask is Active +5 Damage";
  hiddenElem1.classList.remove('hidden1')
}
function giveThrowAble() {
  target.backpack.push(items.throwAble)
  document.getElementById("hidden2").innerHTML = "Fire Weapon Mod is Active +10 Damage";
  hiddenElem2.classList.remove('hidden2')
}
function giveWeaponMod() {
  target.backpack.push(items.weaponMod)
  document.getElementById("hidden3").innerHTML = "Charcoal Pin Resin is Active +15 Damage";
  hiddenElem3.classList.remove('hidden3')
}

//NOTE New item Function
// function item(){
// if ()
//}

//NOTE  Add Mods 
function addMod() {
  //I C FE
  let modTotal = 0;
  for (let i = 0; i < target.backpack.length; i++) {
    modTotal = target.backpack[i].modifier;
  }
  return modTotal
}

function update() { // This will be responsible for updating the user interface whenever a value changes.
  //let healthElem = document.getElementById('#health').innerText;
  //Target player
  let healthElem = document.querySelector('#health');
  healthElem.textContent = target.health.toString();
  let nameElem = document.querySelector('#name');
  nameElem.textContent = target.name;
  let hitsElem = document.querySelector('#hits');
  hitsElem.textContent = target.hits.toString();
  //player1 health
  let healthplayer1Elem = document.querySelector('#healthplayer1');
  healthplayer1Elem.textContent = players.player1.health.toString();
  //player2 health
  let healthplayer2Elem = document.querySelector('#healthplayer2');
  healthplayer2Elem.textContent = players.player2.health.toString();
  //player3 health
  let healthplayer3Elem = document.querySelector('#healthplayer3');
  healthplayer3Elem.textContent = players.player3.health.toString();

  //page reload
  if (target.health <= 0) {
    reload()
  }
}
//NOTE  Reload/Restart (Stretch Goals)
function reload() {
  //   location.reload()//how to reload page
  let reloadButtonElem = document.getElementById('hiddenreload')
  reloadButtonElem.classList.remove('hiddenreload')

}

function restart() {
  window.location.reload(true)
}
//FIXME Construction
function healthBar() {
  let forthHealth = document.querySelector('#hiddenbar')
  if (target.health >= 25) {
    forthHealth.classList.remove('#hiddenbar')
  }
}
update()