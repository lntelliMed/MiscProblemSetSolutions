console.log("Printing all numbers between -10 and 19 via a for loop:");
for (var i = -10; i <= 19; i++) {
	console.log(i);
}

console.log("Printing all even numbers between 10 and 40 via a for loop:");
for (var i = 10; i <= 40; i++) {
	if(i % 2 === 0){
		console.log(i);
	}
}

console.log("Printing all odd numbers between 300 and 333 via a for loop:");
for (var i = 300; i <= 333; i++) {
	if(i % 2 !== 0){
		console.log(i);
	}
}

console.log("Printing all numbers divisible by 5 AND 3 between 5 and 50 via a for loop:");
for (var i = 5; i <= 50; i++) {
	if(i % 5 === 0 && i % 3 === 0){
		console.log(i);
	}
}