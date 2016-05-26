var quotes = [{
	"quote": "You can do anything, but not everything.","author": "David Allen"
}, {
	"quote": "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.","author": "Antoine de Saint-Exupéry"
},{
	"quote": "The richest man is not he who has the most, but he who needs the least.","author": "Unknown Author"
},{
	"quote": " You miss 100 percent of the shots you never take.","author": "Wayne Gretzky"
},{
	"quote": "courage is not the absence of fear, but rather the judgement that something else is more important than fear.","author": "Ambrose Redmoon"
},{
	"quote": "You must be the change you wish to see in the world","author": "Gandhi"
},{
	"quote": "When hungry, eat your rice; when tired, close your eyes. Fools may laugh at me, but wise men will know what I mean.","author": "Lin-Chi"
},{
	"quote": "The third-rate mind is only happy when it is thinking with the majority. The second-rate mind is only happy when it is thinking with the minority. The first-rate mind is only happy when it is thinking.","author": "A. A. Milne"
},{
	"quote": "To the man who only has a hammer, everything he encounters begins to look like a nail.","author": "Abraham Maslow"
},{
	"quote": " We are what we repeatedly do; excellence, then, is not an act but a habit.","author": "Aristotle"
},{
	"quote": "A wise man gets more use from his enemies than a fool from his friends.","author": "Baltasar Gracian"
},{
	"quote": "Do not seek to follow in the footsteps of the men of old; seek what they sought.","author": "Basho"
},{
	"quote": " Watch your thoughts; they become words. Watch your words; they become actions. Watch your actions; they become habits. Watch your habits; they become character. Watch your character; it becomes your destiny.","author": "Lao-Tze"
},{
	"quote": "Everyone is a genius at least once a year. The real geniuses simply have their bright ideas closer together.","author": "Georg Christoph Lichtenberg"
},{
	"quote": "What we think, or what we know, or what we believe is, in the end, of little consequence. The only consequence is what we do.","author": "John Ruskin"
},{
	"quote": "The real voyage of discovery consists not in seeking new lands but seeing with new eyes.","author": "Marcel Proust"
}];

var randomQuote = [{"quote":"", "author":""}];

var randomQuoteIndex = Math.floor(Math.random()*(quotes.length));

var randomQuoteData = quotes[randomQuoteIndex];

$(document).ready(function(){
	$("#quotesArea").text(randomQuoteData.quote);
	$("footer").text("-" + randomQuoteData.author);
});

function generateQuote(){

	randomQuoteIndex = Math.floor(Math.random()*(quotes.length));

    randomQuoteData = quotes[randomQuoteIndex];

    $("#quotesArea").text(randomQuoteData.quote);
	$("footer").text("-" + randomQuoteData.author);

}


    function tweet(){
        $("#tweetQuote").attr("href", "http://twitter.com/home/?status="+ randomQuoteData.quote  + " -" + randomQuoteData.author);
    }
    





	
