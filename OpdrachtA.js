var week = [" maandag", " dinsdag", " woensdag", " donderdag", " vrijdag", " zaterdag", " zondag"];

document.getElementById("heleWeek").innerHTML = week;

for(i=0;i<5;i++){
	document.getElementById("werkdagen").innerHTML += week[i] + ", ";	
}

for(u=5;u<7;u++){
	document.getElementById("weekend").innerHTML += week[u] + ", ";
}

for(o=6;o>=0;o--){
	document.getElementById("heleWeekRev").innerHTML += week[o] + ", ";
}

for(e=4;e>=0;e--){
	document.getElementById("werkdagenRev").innerHTML += week[e] + ", ";
}

for(a=6;a>=5;a--){
	document.getElementById("weekendRev").innerHTML += week[a] + ", ";
}