let countClick = 0;
let colorNewBtn = document.getElementById("buton");

function changeColor() {
	let colorList = ["red","yellow","green"];
	colorNewBtn.style.backgroundColor = colorList[countClick];
	++countClick;
	if (countClick === colorList.length){
		countClick = 0;
	}
}
