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
    description: 'Burns Target for 10 damage.'
  },
  weaponMod: {
    name: 'Charcoal Pine Resin',
    modifier: 15,
    description: 'Applies fire damage to weapon. Gives +15 attacks'
  },
}
//NOTE Actions
function slap() {
  target.health -= 1 + addMod()
  target.hits += 1


  update()
}
function punch() {
  target.health -= 5 + addMod()
  target.hits += 1

  update()
}
function kick() {
  target.health -= 10 + addMod()
  target.hits += 1

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
  let healthElem = document.querySelector('#health');
  healthElem.textContent = target.health.toString();
  let nameElem = document.querySelector('#name');
  nameElem.textContent = target.name;
  let hitsElem = document.querySelector('#hits');
  hitsElem.textContent = target.hits.toString();
}
update()