require("dotenv").config();

// once npm packages are installed, you must require them to be able to reference the node packages.
var axios = require("axios");
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");


// declaring var to user input on index 2.
var action = process.argv[2]; //user input of which command they want to use
var input = process.argv[3]; //user input of which artist they want to look up

// switch-case statement for user input of multiple commands:
switch (action) {
    case "concert-this":
        band();
        break;

    case "spotify-this-song":
        spot();
        break;

    case "movie-this":
        movie();
        break;

    case "do-what-it-says":
        runspot();
        break;
    default: console.log("choose the right option");
}

// call function for API Bands in Town to retrieve artist
// print called information
function band() {
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
            console.log("Show times: " + show.datetime);

        }
    })
}

function spot() {

    spotify.search({ type: 'track', query: input, limit: 5 }, function(err, response) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
        console.log("Song Results");

        if (input !== undefined) {
            for (var i = 0; i < response.tracks.items.length; i++) {

                var songinfo = response.tracks.items[i];

                console.log("==================================");
                console.log("Artist: " + songinfo.album.artists[0].name); 
                console.log("Song: " + songinfo.name);
                console.log("Song Preview: " + songinfo.preview_url);
                console.log("Song Album: " + JSON.stringify(songinfo.album.external_urls))
                
        }} else {

            // TODO: else statement to run default code for "The Sign of Ace of Base"
            
            // spotify.search({ type: 'track', query: "The Sign by Ace of Base", limit: 5 }, function(err, response) {
            //     if (err) {
            //       return console.log('Error occurred: ' + err);
            //     }

            // })
            
        }
    });
      
}

 function movie() {
     var queryURL = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";

     axios
     .get(queryURL)
     .then(function(res) {
        
        // console.log(res.data);
        // if (input !== undefined) {

                var movieinfo = res.data;
                console.log("You search for: " + input);
                console.log("=======================================")
                console.log("Movie title: " + movieinfo.Title); 
                console.log("Release year: " + movieinfo.Released);
                console.log("imDb Rating: " + movieinfo.imdbRating); 
                console.log("Rotten Tomatoes Rating: " + JSON.stringify(movieinfo.Ratings[1])); 
                console.log("Made in: " + 
                    movieinfo.Country); 
                console.log("Language: " + movieinfo.Language); 
                console.log("Short Plot: " + movieinfo.Plot); 
                console.log("Actors in the Movie: " + movieinfo.Actors);

        // } else {
        //     // TODO: run Mr. Nobody
        // }  

     }), function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        
    }
    
 }

function runspot() {
    fs.readFile("random.txt", "utf8", function(err, data){
        if (err) {
            return console.log(err);
        }

        console.log(data);
    })
}
   