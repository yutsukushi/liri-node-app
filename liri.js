require("dotenv").config();

// once npm packages are installed, you must require them to be able to reference the node packages.
var axios = require("axios");
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");
var moment = require('moment');


// declaring var to user input on index 2.
var action = process.argv[2]; //user input of which command they want to use
var input = process.argv[3]; //user input of which artist they want to look up

// switch-case statement for user input of multiple commands:
function startProg(action, input){
    switch (action) {
        case "concert-this":
            band(input);
            break;
    
        case "spotify-this-song":
            spot(input);
            break;
    
        case "movie-this":
            movie(input);
            break;
    
        case "do-what-it-says":
            runspot();
            break;
        default: console.log("choose the right option");
    }

}
startProg(action,input);

function band(input) {
    var queryURL = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";
    
    axios
    .get(queryURL)
    .then(function(res) {

        console.log("Results for " + input);

        for (var i = 0; i < res.data.length; i++){

            var show = res.data[i];
            console.log("===============================================================");
            console.log("Venue: " + show.venue.name);
            console.log("Location: " + show.venue.country);
            console.log("Show times: " + moment(show.datetime).format("MMM Do YY"));

        }
    })
}

function spot(input) {
    if (input === undefined) {

        input = "The Sign by Ace of Base";

    }

    spotify.search({ type: 'track', query: input, limit: 5 }, function(err, response) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
        console.log("Song Results");

       
            for (var i = 0; i < response.tracks.items.length; i++) {

                var songinfo = response.tracks.items[i];

                console.log("==================================");
                console.log("Artist: " + songinfo.album.artists[0].name); 
                console.log("Song: " + songinfo.name);
                console.log("Song Preview: " + songinfo.preview_url);
                console.log("Song Album: " + songinfo.album.external_urls.spotify);
                
            }
    });
      
}

 function movie(input) {
    if (input === undefined) {

        input= "Mr. Nobody";

    }

     var queryURL = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";

     axios
     .get(queryURL)
     .then(function( res) {
        
        var movieinfo = res.data;
        console.log("You search for: " + input);
        console.log("=======================================")
        console.log("Movie title: " + movieinfo.Title); 
        console.log("Release year: " + movieinfo.Released);
        console.log("imDb Rating: " + movieinfo.imdbRating); 
        console.log("Rotten Tomatoes Rating: " +movieinfo.Ratings[1].Source + " value: " + movieinfo.Ratings[1].Value);
        console.log("Made in: " + movieinfo.Country); 
        console.log("Language: " + movieinfo.Language); 
        console.log("Short Plot: " + movieinfo.Plot); 
        console.log("Actors in the Movie: " + movieinfo.Actors);

     })
    
 }

function runspot() {
    fs.readFile("random.txt", "utf8", function(err, data){
        if (err) {
            return console.log(err);
        }

        console.log(data);
        var dataArr = data.split(",");
        var action = dataArr[0];
        var secondParam = dataArr[1];
        startProg(action, secondParam);
    })
}
   