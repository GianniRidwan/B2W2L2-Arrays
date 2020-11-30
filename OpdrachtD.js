var spellen = ['Monopoly', 'Yathzee', 'Bridge', 'Poker', 'Pesten', 'Mens erger je niet', 'Cluedo'];

var x = Math.floor((Math.random() * 7) + 0);
document.getElementById("spel").innerHTML = spellen[x];