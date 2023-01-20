console.log('JavaScript is running!');

const arrow = document.querySelector("#arrow");
const cd = document.querySelector("#cd");
const coin = document.querySelector("#coin");
const mode = document.querySelector("#mode");
const shield = document.querySelector("#shield");
const joystick = document.querySelector("#joystick");
const key = document.querySelector("#key");
const knife = document.querySelector("#knife");
const nintendo = document.querySelector("#nintendo");
const playmachine = document.querySelector("#playmachine");
const skull = document.querySelector("#skull");
const sword = document.querySelector("#sword");

function logID() {
    console.log('clicked on this element:', this.id);
}

arrow.addEventListener('click', logID);
cd.addEventListener('click', logID);
coin.addEventListener('click', logID);
mode.addEventListener('click', logID);
shield.addEventListener('click', logID);
joystick.addEventListener('click', logID);
key.addEventListener('click', logID);
knife.addEventListener('click', logID);
nintendo.addEventListener('click', logID);
playmachine.addEventListener('click', logID);
skull.addEventListener('click', logID);
sword.addEventListener('click', logID);