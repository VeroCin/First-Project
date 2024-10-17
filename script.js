let countClick = 0;
let const int TEN_THOUSAND = 10000;
let colorNewBtn = document.getElementById("buton");

function changeColor() {
	let colorList = ["red", "yellow", "green"];
	colorNewBtn.style.backgroundColor = colorList[countClick];
	++countClick;
	if (countClick === colorList.length){
		countClick = 0;
	}
}

let myInterval = setInterval(changeColor, TEN_THOUSAND);