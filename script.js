function play() {
	var col = 0
	alert("Пиши с большой буквы!");
	var a = prompt("Зимой и летом одним цветом?");
	if (a == "Елка") {
		alert("Молодец!");
		col++
	} else {
		alert("Нет.");
	}
	var b = prompt("Не лает, не кусает, а в дом не пускает.");
		if (b == "Замок") {
		alert("Правильно!");
		col++
	} else {
	 alert(":(");
	}
	var c = prompt("Все меня топчут, а я — всё лучше.");
		if (c == "Тропинка") {
			alert("В точку!");
		col++
	   } else {
		alert("Почти.");
	}
	var d = prompt("Какое колесо не крутится при правом развороте?");
		if (d == "Запасное") {
			alert("С тобой не интересно!");
			col++
	} else {
	 alert("Мазила!!!");
	}
	alert("Правильных ответов: " + col )
	}