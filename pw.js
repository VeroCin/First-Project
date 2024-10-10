var countClick = 0;
      var colorNewBtn = document.getElementById("buton");
      function changeColor(){
	var colorList = ["red","yellow","green"];
        colorNewBtn.style.backgroundColor = colorList[countClick];
        ++countClick;
        if (countClick === colorList.length){
          countClick = 0;
        }
      }
