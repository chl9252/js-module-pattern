var counter = (function() {
	var number;
	var _checkInteger = function(x) {
		if( parseInt(x) == x ) {
			return true;
		} else {
			return false;
		}
	};
	
	var setValue = function(x) {
		if(_checkInteger(x)) {
			number = x;
		} else {
			console.log("Неверное значение");
		}
	};

	var increaseCounter = function() {
		number++;
	};

	var decreaseCounter = function() {
		number--;
	};

	var printCounter = function() {
		console.log(number);
	};

	return {
		setValue,
		increaseCounter,
		decreaseCounter,
		printCounter
	};
}());

counter.setValue(50); // принимает целое число, задает его в значение счетчика

counter.increaseCounter(); // вызов метода увеличивает счетчик на 1

counter.increaseCounter();

counter.decreaseCounter();  // вызов метода уменьшает счетчик на 1

counter.printCounter(); // вызов метода выводит значение счетчика в консоль