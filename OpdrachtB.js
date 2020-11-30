var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];

for(i=0;i<10;i++){
	document.getElementById("optellen").innerHTML += arrayEen[i] + " + " + arrayTwee[i] + " = " + (arrayEen[i] + arrayTwee[i] + "<br>");
}

for(u=0;u<10;u++){
	document.getElementById("aftrekken").innerHTML += arrayTwee[u] + " - " + arrayEen[u] + " = " + (arrayTwee[u] - arrayEen[u] + "<br>");
}

for(a=0;a<10;a++){
	document.getElementById("vermenigvuldigen").innerHTML += arrayEen[a] + " * " + arrayTwee[a] + " = " + (arrayEen[a] * arrayTwee[a] + "<br>");
}

for(o=0;o<10;o++){
	document.getElementById("delen").innerHTML += arrayTwee[o] + " / " + arrayEen[o] + " = " + (arrayTwee[o] / arrayEen[o] + "<br>");
}