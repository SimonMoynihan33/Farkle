const scores = {};
const current_turn = {};

// Dice rolling functionality

let dice = {
    sides: 6,
    roll: function() {
    let randomNumber = Math.floor(Math.random()*this.sides) + 1;
    return randomNumber
    }
}

let button = document.getElementById('roll-btn')

button.onclick = function() {
    let result = dice.roll();
    console.log(result)
}