/*----------------------------Создание элементов на странице----------------------------*/

function createElemAfterID (afterID,tagName,id,className,content){
	var newElem = document.createElement(tagName);
	if (afterID){
		var afterIDElem = document.getElementById(afterID);
		afterIDElem.appendChild(newElem);
	}
	if (id){
		newElem.id = id;
	}
	if (className){
		newElem.className = className;
	}
	if (content){
		var textNode = document.createTextNode(content);
		newElem.appendChild(textNode);
	}
}

function createElemsAfterTags (afterTag,tagName,id,className,content){
	if (afterTag){
		var afterTagElem = document.getElementsByTagName(afterTag);
		for (var i=0; i<afterTagElem.length; i++) {
			var newElem = document.createElement(tagName);
			afterTagElem[i].appendChild(newElem);
			if (id){
				newElem.id = id;
			}
			if (className){
				newElem.className = className;
			}
			if (content){
				var textNode = document.createTextNode(content);
				newElem.appendChild(textNode);
			}
		}
	}
}

function createElemAfterClass (afterClass,NumbElOfCl,tagName,id,className,content){
	if (afterClass){
		var afterClassElem = document.getElementsByClassName(afterClass);
		var newElem = document.createElement(tagName);
		afterClassElem[NumbElOfCl].appendChild(newElem);
		if (id){
			newElem.id = id;
		}
		if (className){
			newElem.className = className;
		}
		if (content){
			var textNode = document.createTextNode(content);
			newElem.appendChild(textNode);
		}
	}
}

createElemAfterID("trafficLight","div","","halfCase");
createElemAfterID("trafficLight","div","","halfCase");
createElemAfterClass("halfCase",0,"div","topLED","screen");
createElemAfterClass("halfCase",1,"div","bottomLED","screen");
createElemAfterClass("screen",0,"table","topLeftLED");
createElemAfterClass("screen",0,"table","topRightLED");
createElemAfterClass("screen",1,"table","bottomLeftLED");
createElemAfterClass("screen",1,"table","bottomRightLED");
for (i=0; i<13; i++){
	createElemsAfterTags("table","tr",);
}
for (i=0; i<7; i++){
	createElemsAfterTags("tr","td",);
}

/*----------------------------Работа Светофора----------------------------*/

//Очистка экрана (перед сменой символа,вспомогательная функция)
function clearScreen(nameVarTD){
	for (var i = 0, arrLen = nameVarTD.length; i < arrLen; i++) {
		nameVarTD[i].className = "";
	};
};
//Отображения цифр
function numberZero(colorStyle,idLED) {
	var screenLED = document.getElementById (idLED);
	var screenLEDTD = screenLED.getElementsByTagName('td');
	screenLEDTD = Array.from (screenLEDTD);
	clearScreen(screenLEDTD);
	var cutScreenLEDTD = [];
	cutScreenLEDTD = cutScreenLEDTD.concat (
		screenLEDTD.slice (1,5), screenLEDTD[7], screenLEDTD[12], screenLEDTD[14],
		screenLEDTD[19], screenLEDTD[21], screenLEDTD[26], screenLEDTD[28],
		screenLEDTD[33], screenLEDTD[35], screenLEDTD[40], screenLEDTD[42],
		screenLEDTD[47], screenLEDTD[49], screenLEDTD[54], screenLEDTD[56],
		screenLEDTD[61], screenLEDTD[63], screenLEDTD[68], screenLEDTD[70],
		screenLEDTD[75], screenLEDTD[77], screenLEDTD[82], screenLEDTD.slice (85,89)
	);
	for (var i = 0, arrLen = cutScreenLEDTD.length; i < arrLen; i++) {
		cutScreenLEDTD[i].className = colorStyle;
	};
};
function numberOne(colorStyle,idLED) {
	var screenLED = document.getElementById (idLED);
	var screenLEDTD = screenLED.getElementsByTagName('td');
	screenLEDTD = Array.from (screenLEDTD);
	clearScreen(screenLEDTD);
	var cutScreenLEDTD = [];
	cutScreenLEDTD = cutScreenLEDTD.concat (
		screenLEDTD[3], screenLEDTD[9], screenLEDTD[10], screenLEDTD[15],
		screenLEDTD[17], screenLEDTD[24], screenLEDTD[31], screenLEDTD[38],
		screenLEDTD[45], screenLEDTD[52], screenLEDTD[59], screenLEDTD[66],
		screenLEDTD[73], screenLEDTD[80], screenLEDTD.slice (85,90)
	);
	for (var i = 0, arrLen = cutScreenLEDTD.length; i < arrLen; i++) {
		cutScreenLEDTD[i].className = colorStyle;
	};
};
function numberTwo(colorStyle,idLED) {
	var screenLED = document.getElementById (idLED);
	var screenLEDTD = screenLED.getElementsByTagName('td');
	screenLEDTD = Array.from (screenLEDTD);
	clearScreen(screenLEDTD);
	var cutScreenLEDTD = [];
	cutScreenLEDTD = cutScreenLEDTD.concat (
		screenLEDTD.slice (1,5), screenLEDTD[7], screenLEDTD[12], screenLEDTD[14],
		screenLEDTD[19], screenLEDTD[26], screenLEDTD[33], screenLEDTD[40],
		screenLEDTD[46], screenLEDTD[52], screenLEDTD[58], screenLEDTD[64],
		screenLEDTD[70], screenLEDTD[77], screenLEDTD.slice (84,90)
	);
	for (var i = 0, arrLen = cutScreenLEDTD.length; i < arrLen; i++) {
		cutScreenLEDTD[i].className = colorStyle;
	};
};
function numberThree(colorStyle,idLED) {
	var screenLED = document.getElementById (idLED);
	var screenLEDTD = screenLED.getElementsByTagName('td');
	screenLEDTD = Array.from (screenLEDTD);
	clearScreen(screenLEDTD);
	var cutScreenLEDTD = [];
	cutScreenLEDTD = cutScreenLEDTD.concat (
		screenLEDTD.slice (1,5), screenLEDTD[7], screenLEDTD[12], screenLEDTD[19],
		screenLEDTD[26], screenLEDTD[33], screenLEDTD[40], screenLEDTD.slice (44,47),
		screenLEDTD[54], screenLEDTD[61], screenLEDTD[68], screenLEDTD[75],
		screenLEDTD[77], screenLEDTD[82], screenLEDTD.slice (85,89)
	)
	for (var i = 0, arrLen = cutScreenLEDTD.length; i < arrLen; i++) {
		cutScreenLEDTD[i].className = colorStyle;
	};
};
function numberFour(colorStyle,idLED) {
	var screenLED = document.getElementById (idLED);
	var screenLEDTD = screenLED.getElementsByTagName('td');
	screenLEDTD = Array.from (screenLEDTD);
	clearScreen(screenLEDTD);
	var cutScreenLEDTD = [];
	cutScreenLEDTD = cutScreenLEDTD.concat (
		screenLEDTD[0], screenLEDTD[5], screenLEDTD[7], screenLEDTD[12],
		screenLEDTD[14], screenLEDTD[19], screenLEDTD[21], screenLEDTD[26],
		screenLEDTD[28], screenLEDTD[33], screenLEDTD[35], screenLEDTD[40],
		screenLEDTD.slice (43,48), screenLEDTD[54], screenLEDTD[61], screenLEDTD[68],
		screenLEDTD[75], screenLEDTD[82], screenLEDTD[89]
	);
	for (var i = 0, arrLen = cutScreenLEDTD.length; i < arrLen; i++) {
		cutScreenLEDTD[i].className = colorStyle;
	};
};
function numberFive(colorStyle,idLED) {
	var screenLED = document.getElementById (idLED);
	var screenLEDTD = screenLED.getElementsByTagName('td');
	screenLEDTD = Array.from (screenLEDTD);
	clearScreen(screenLEDTD);
	var cutScreenLEDTD = [];
	cutScreenLEDTD = cutScreenLEDTD.concat (
		screenLEDTD.slice (0,6), screenLEDTD[7], screenLEDTD[14], screenLEDTD[21],
		screenLEDTD[28], screenLEDTD.slice (36,40), screenLEDTD[47], screenLEDTD[54],
		screenLEDTD[61], screenLEDTD[68], screenLEDTD[75], screenLEDTD[77],
		screenLEDTD[82], screenLEDTD.slice (85,89)
	);
	for (var i = 0, arrLen = cutScreenLEDTD.length; i < arrLen; i++) {
		cutScreenLEDTD[i].className = colorStyle;
	};
};
function numberSix(colorStyle,idLED) {
	var screenLED = document.getElementById (idLED);
	var screenLEDTD = screenLED.getElementsByTagName('td');
	screenLEDTD = Array.from (screenLEDTD);
	clearScreen(screenLEDTD);
	var cutScreenLEDTD = [];
	cutScreenLEDTD = cutScreenLEDTD.concat (
		screenLEDTD.slice (1,5), screenLEDTD[7], screenLEDTD[12], screenLEDTD[14],
		screenLEDTD[21], screenLEDTD[28], screenLEDTD.slice (35,40), screenLEDTD[42],
		screenLEDTD[47], screenLEDTD[49], screenLEDTD[54], screenLEDTD[56],
		screenLEDTD[61], screenLEDTD[63], screenLEDTD[68], screenLEDTD[70],
		screenLEDTD[75], screenLEDTD[77], screenLEDTD[82], screenLEDTD.slice (85,89)
	);
	for (var i = 0, arrLen = cutScreenLEDTD.length; i < arrLen; i++) {
		cutScreenLEDTD[i].className = colorStyle;
	};
};
function numberSeven(colorStyle,idLED) {
	var screenLED = document.getElementById (idLED);
	var screenLEDTD = screenLED.getElementsByTagName('td');
	screenLEDTD = Array.from (screenLEDTD);
	clearScreen(screenLEDTD);
	var cutScreenLEDTD = [];
	cutScreenLEDTD = cutScreenLEDTD.concat (
		screenLEDTD.slice (0,6), screenLEDTD[7], screenLEDTD[12], screenLEDTD[14],
		screenLEDTD[19], screenLEDTD[26], screenLEDTD[33], screenLEDTD[39],
		screenLEDTD[46], screenLEDTD[52], screenLEDTD[59], screenLEDTD[65],
		screenLEDTD[72], screenLEDTD[79], screenLEDTD[86]
	);
	for (var i = 0, arrLen = cutScreenLEDTD.length; i < arrLen; i++) {
		cutScreenLEDTD[i].className = colorStyle;
	};
};
function numberEight(colorStyle,idLED) {
	var screenLED = document.getElementById (idLED);
	var screenLEDTD = screenLED.getElementsByTagName('td');
	screenLEDTD = Array.from (screenLEDTD);
	clearScreen(screenLEDTD);
	var cutScreenLEDTD = [];
	cutScreenLEDTD = cutScreenLEDTD.concat (
		screenLEDTD.slice (1,5), screenLEDTD[7], screenLEDTD[12], screenLEDTD[14],
		screenLEDTD[19], screenLEDTD[21], screenLEDTD[26], screenLEDTD[28],
		screenLEDTD[33], screenLEDTD[35], screenLEDTD[40], screenLEDTD.slice (43,47),
		screenLEDTD[49], screenLEDTD[54], screenLEDTD[56], screenLEDTD[61],
		screenLEDTD[63], screenLEDTD[68], screenLEDTD[70], screenLEDTD[75],
		screenLEDTD[77], screenLEDTD[82], screenLEDTD.slice (85,89)
	);
	for (var i = 0, arrLen = cutScreenLEDTD.length; i < arrLen; i++) {
		cutScreenLEDTD[i].className = colorStyle;
	};
};
function numberNine(colorStyle,idLED) {
	var screenLED = document.getElementById (idLED);
	var screenLEDTD = screenLED.getElementsByTagName('td');
	screenLEDTD = Array.from (screenLEDTD);
	clearScreen(screenLEDTD);
	var cutScreenLEDTD = [];
	cutScreenLEDTD = cutScreenLEDTD.concat (
		screenLEDTD.slice (1,5), screenLEDTD[7], screenLEDTD[12], screenLEDTD[14],
		screenLEDTD[19], screenLEDTD[21], screenLEDTD[26], screenLEDTD[28],
		screenLEDTD[33], screenLEDTD[35], screenLEDTD[40], screenLEDTD[42],
		screenLEDTD[47], screenLEDTD.slice (50,55), screenLEDTD[61], screenLEDTD[68],
		screenLEDTD[75], screenLEDTD[77], screenLEDTD[82], screenLEDTD.slice (85,89)
	);
	for (var i = 0, arrLen = cutScreenLEDTD.length; i < arrLen; i++) {
		cutScreenLEDTD[i].className = colorStyle;
	};
};
//Отображения пиктограмм
//Пиктограмма "стой"
function stand() {
	var screenLED = document.getElementById ("topLED");
	var screenLEDTD = screenLED.getElementsByTagName('td');
	screenLEDTD = Array.from (screenLEDTD);
	clearScreen(screenLEDTD);
	var cutScreenLEDTD = [];
	cutScreenLEDTD = cutScreenLEDTD.concat (
		screenLEDTD[6], screenLEDTD[13], screenLEDTD.slice (26,28), screenLEDTD[32],
		screenLEDTD[34], screenLEDTD[39], screenLEDTD[41], screenLEDTD[46],
		screenLEDTD[48], screenLEDTD[53], screenLEDTD[55], screenLEDTD[62],
		screenLEDTD[69], screenLEDTD[76], screenLEDTD[83], screenLEDTD.slice (89,92),
		screenLEDTD[98], screenLEDTD.slice (112,114), screenLEDTD[119], screenLEDTD[121],
		screenLEDTD[126], screenLEDTD[128], screenLEDTD[133], screenLEDTD[135],
		screenLEDTD[140], screenLEDTD[142], screenLEDTD[147], screenLEDTD[154],
		screenLEDTD[161], screenLEDTD[168], screenLEDTD.slice (175,177)
	);
	for (var i = 0, arrLen = cutScreenLEDTD.length; i < arrLen; i++) {
		cutScreenLEDTD[i].className = "redLight";
	};
};
//Пиктограмма "иди"
function move(){
	var screenLED = document.getElementById ("bottomLED");
	var screenLEDTD = screenLED.getElementsByTagName('td');
	screenLEDTD = Array.from (screenLEDTD);
	clearScreen(screenLEDTD);
	var cutScreenLEDTD = [];
	cutScreenLEDTD = cutScreenLEDTD.concat (
		screenLEDTD[6], screenLEDTD[13], screenLEDTD.slice (26,28), screenLEDTD[30],//
		screenLEDTD[32], screenLEDTD[34], screenLEDTD[38], screenLEDTD[41],//
		screenLEDTD[48], screenLEDTD[55], screenLEDTD[61], screenLEDTD[68],//
		screenLEDTD[74], screenLEDTD[81], screenLEDTD.slice (87,89), screenLEDTD[91],//
		screenLEDTD[98], screenLEDTD.slice (112,114), screenLEDTD[119], screenLEDTD[121],//
		screenLEDTD[126], screenLEDTD[129], screenLEDTD[133], screenLEDTD[136],//
		screenLEDTD[140], screenLEDTD[148], screenLEDTD[155], screenLEDTD[163],//
		screenLEDTD[170], screenLEDTD.slice (176,178)
	);
	for (var i = 0, arrLen = cutScreenLEDTD.length; i < arrLen; i++) {
		cutScreenLEDTD[i].className = "greenLight";
	};
};
//Режим "Выключено"(на случай добавления новых возможностей)
function modeOff() {
	var screenLEDTD = document.getElementsByTagName('td');
	clearScreen(screenLEDTD);
};
//Переключение цифр с интервалом 1 сек
function switchNumOneSecInt(colorStyle,idLED){
	function cycle(){
		setTimeout(numberZero, 1000, colorStyle,idLED);
		setTimeout(numberNine, 2000, colorStyle,idLED);
		setTimeout(numberEight, 3000, colorStyle,idLED);
		setTimeout(numberSeven, 4000, colorStyle,idLED);
		setTimeout(numberSix, 5000, colorStyle,idLED);
		setTimeout(numberFive, 6000, colorStyle,idLED);
		setTimeout(numberFour, 7000, colorStyle,idLED);
		setTimeout(numberThree, 8000, colorStyle,idLED);
		setTimeout(numberTwo, 9000, colorStyle,idLED);
		setTimeout(numberOne, 10000, colorStyle,idLED);
	};
	cycle();
	var IntID = setInterval(cycle, 10000);
	setTimeout(function(){
		clearInterval(IntID);
	}, 10000);
};
//Переключение цифр с интервалом 10 сек
function switchNumTenSecInt(colorStyle,idLED){
	setTimeout(numberTwo, 1000, colorStyle,idLED);
	setTimeout(numberOne, 2000, colorStyle,idLED);
	setTimeout(numberZero, 12000, colorStyle,idLED);
};
//Весь зеленый свет
function greenLight(){
	switchNumOneSecInt("greenLight","topRightLED");
	switchNumTenSecInt("greenLight","topLeftLED");
	setTimeout(move, 1000);
};
//Весь красный свет
function redLight(){
	switchNumOneSecInt("redLight","bottomRightLED");
	switchNumTenSecInt("redLight","bottomLeftLED");
	setTimeout(stand, 1000);
};
/*--------------------------РАБОТА СВЕТОФОРА--------------------------*/
greenLight();
setTimeout(redLight, 20000);
setInterval(function(){
	greenLight();
	setTimeout(redLight, 20000);
}, 40000);
