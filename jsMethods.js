var dogSpace = {};
dogSpace.speak = function(){
	return "Woof!";
};

var d=catSpace = {};
catSpace.speak = function(){
	return "Meow!";
};

console.log(dogSpace.speak());
console.log(catSpace.speak());

var comments = {};
comments.data = ["Really?", "No way!", "That's awesome!"];

comments.print = function(){
	this.data.forEach(function(comment){
		console.log(comment)
	});
};

comments.print();