// let health = 100
// let name = "Demon Knight"
// let hits = 0
let target = {
  name: 'Demon Knight',
  health: 100,
  hits: 0,
  actions: {
    slap: 1,
    punch: 5,
    kick: 10,
  },
  item: []
}
//NOTE Items
var items = {
  healthPosion: {
    name: 'Estus Flask',
    modifier: 5,
    description: 'Drink to add +5 to damage per attack.'
  },
  fireMod: {
    name: 'Fire Bomb',
    modifier: 10,
    description: 'Burns Target for 10 damage per attack.'
  },
  weaponMod: {
    name: 'Charcoal Pine Resin',
    modifier: 6,
    description: 'Applies fire damage to weapon. Gives +6 attacks'
  },
}
//NOTE Actions
function slap() {
  target.health -= 1
  target.hits += 1
  if (giveHealthPosions) {
    target.health -= 1 + addMod();
  } else


    update()
}
function punch() {
  target.health -= 5
  target.hits += 1

  update()
}
function kick() {
  target.health -= 10
  target.hits += 1

  update()
}
//NOTE item Functions 
//FIXME Construction
function giveHealthPosions() {
  target.items.push(items.healthPosion.modifier)
  // if (target.actions.slap) {
  //   target.health -= 1 + addMod();
  // } else if (target.action.punch) {
  //   target.health -= 5 + addMod();
  // } else if (target.actions.kick) {
  //   target.health -= 10 + addMod();
  // }
}

function useHealthPosions() {
  giveHealthPosions(); slap();
  //   if (slap) {
  //     target.health -= 1 + addMod();
  //   } else if (punch) {
  //     target.health -= 5 + addMod();
  //   } else {
  //     target.health -= 10 + addMod();
  //   }
}

function giveFireMod() {
  target.items.push(items.fireMod)
  // if (slap) {
  //   target.health -= 1 + addMod();
  // } else if (punch) {
  //   target.health -= 5 + addMod();
  // } else {
  //   target.health -= 10 + addMod();
  // }
}
function giveWeaponMod() {
  target.items.push('weaponMod')
}
//NOTE New item Function
// function item(){
// if ()
//}
//FIXME end of constructio

//NOTE  Add Mod total 
function addMod() {
  //I C FE
  let modTotal = 0;
  for (let i = 0; i < target.item.length; i++) {
    modTotal = items[i] + items[i].modifier;
  }
  return modTotal
}

function update() { // This will be responsible for updating the user interface whenever a value changes.
  //let healthElem = document.getElementById('#health').innerText;
  let healthElem = document.querySelector('#health');
  healthElem.textContent = target.health.toString();
  let nameElem = document.querySelector('#name');
  nameElem.textContent = target.name;
  let hitsElem = document.querySelector('#hits');
  hitsElem.textContent = target.hits.toString();
}
update()