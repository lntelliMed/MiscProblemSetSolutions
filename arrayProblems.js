console.log("Connected!");

function printReverse(arr){
	for (var i = arr.length - 1; i >=0 ; i--) {
		console.log(arr[i]);
	}
}

var sampleArr = [3,4,2,9];
console.log("Printing the array " + sampleArr + " in reverse:");
printReverse(sampleArr);


function isUniform(arr){
	var arrElement = arr[0];
	//var isUniform = true;

	for (var i = 1; i < arr.length; i++) {
		if(arr[i] !== arrElement){
			//isUniform = false;
			return false;
		}
	
	}

	return true;
}

sampleArr = [1,1,1,1];
console.log("Is the array " + sampleArr + " uniform?");
console.log(isUniform(sampleArr));

function sumArray(arr){
	var sum = 0;

	arr.forEach(function(arrElement){
		sum += arrElement;
	});

	return sum;
}

sampleArr = [1,1,1,1];
console.log("The sum of the array " + sampleArr + " is:");
console.log(sumArray(sampleArr));

function max(arr){
	var maxNumber = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if(arr[i] > maxNumber){
			maxNumber = arr[i];
		}
	}
	return maxNumber;
}

sampleArr = [1,3,99,8];
console.log("The max in the array " + sampleArr + " is:");
console.log(max(sampleArr));
