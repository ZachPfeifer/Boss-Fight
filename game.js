// let health = 100
// let name = "Demon Knight"
// let hits = 0
let target = {
  name: 'Demon Knight',
  health: 100,
  hits: 0,
  item: []
}
var items = {
  healthPosion: {
    name: 'Estus Flask',
    modifier: 5,
    description: 'Drink to heal your HP for +5.'
  },
  throwAble: {
    name: 'Fire Bomb',
    modifier: 10,
    description: 'Burns Target for 10 damage.'
  },
  weaponMod: {
    name: 'Charcoal Pine Resin',
    modifier: 6,
    description: 'Applies fire damage to weapon. Gives +6 attacks'
  },
}

function slap() {
  target.health -= 1
  target.hits += 1

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
//item Functions
function giveHealthPosions() {
  target.items.push('healthPosion')
}
function giveThrowAble() {
  target.items.push('throwAble')
}
function giveWeaponMod() {
  target.items.push('weaponMod')
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
