let health = 100
let name = "Demon Knight"
let hits = 0

function slap() {
  health -= 1
  hits += 1

  update()
}
function punch() {
  health -= 5
  hits += 1

  update()
}
function kick() {
  health -= 10
  hits += 1

  update()
}

function update() { // This will be responsible for updating the user interface whenever a value changes.
  //let healthElem = document.getElementById('#health').innerText;
  let healthElem = document.querySelector('#health');
  healthElem.textContent = health.toString();
  let nameElem = document.querySelector('#name');
  nameElem.textContent = name;
  let hitsElem = document.querySelector('#hits');
  hitsElem.textContent = hits.toString();
}
update()
