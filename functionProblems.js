// function isEven(number){
// 	if(number % 2 === 0){
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// console.log(isEven(4));
// console.log(isEven(3));

function isEven(number){
	return number % 2 === 0;
}

// function factorial(number){
// 	if(number === 0){
// 		return 1;
// 	} else {
// 		var result = 1;
// 		for (var i = number; i !==1 ; i--) {
// 			result = result * i;
// 		}
// 		return result;
// 	}
// }

function factorial(number){
	var result = 1;
	for (var i = 2; i <= number; i++) {
		result *= i;
	}
	return result;
}

// console.log(factorial(0));
// console.log(factorial(4));

function kebabToSnake(name){
	// return name.replace("-", "_")
	var newName = name.replace(/-/g, "_");
	return newName;
}