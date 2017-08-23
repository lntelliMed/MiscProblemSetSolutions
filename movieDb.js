var movies = [
	{
		title: "Frozen",
		rating: 5,
		hasWatched: true
	},
		{
		title: "Les Miserables",
		rating: 4,
		hasWatched: false
	}
];

// for (var i = 0; i < movies.length; i++) {
// 	if(movies[i].hasWatched){
// 		console.log("You have watched the movie " + movies[i].title + " - " + movies[i].rating + " stars");
// 	} else {
// 		console.log("You have not watched the movie " + movies[i].title + " - " + movies[i].rating + " stars");
// 	}
// }

movies.forEach(function(movie){
	console.log(buildString(movie));
});

function buildString(movie){
	var result = "You have ";
	if(movie.hasWatched){
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\"" + " - ";
	result += movie.rating + " stars";
	return result;
}