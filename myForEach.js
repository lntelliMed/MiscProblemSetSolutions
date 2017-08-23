function myForEach(arr, func){
	for (var i = 0; i < arr.length; i++) {
		func(arr[i]);
	}
}

var arr = [1,2,3];
myForEach(arr, alert);

Array.prototype.myForEach = function(func){
    	for (var i = 0; i < this.length; i++) {
			func(arr[i]);
		}
};

arr.myForEach(console.log);