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
    
    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // }).then(function(response) {
    //     console.log(response)
        
    // })
    axios
    .get(queryURL)
    .then(function(res) {
        //console.log(res.data);
        
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

    spotify.search({ type: 'track', query: input, limit: 1 }, function(err, response) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
    //   console.log(response.tracks.items); 
    //   for (var i = 0; i < response.tracks.items.length; i++) {

    //     // var songinfo = response.tracks.items[i];

    //     // console.log(songinfo.artists.external_urls.name);
    //     console.log(response.tracks.items[i]);
    //   }
      });
      
}

//  function movie() {
//      var queryURL = "http://www.omdbapi.com/?apikey=trilogy&t=" + input;

//      axios
//      .get(queryURL)
//      .then(function(res) {
        
//         for (var i = 0; i < res.data.length; i++){

//             var movieinfo = res.data[i];

//             console.log(movieinfo.Title + " " + 
//             movieinfo.Released + " " + 
//             movieinfo.imdbRating + " " + 
//             movieinfo.Ratings[2] + " " + 
//             movieinfo.Country + " " + 
//             movieinfo.Language + " " + 
//             movieinfo.Plot + " " + 
//             movieinfo.Actors)

//         }
        

//      }), function(err, data) {
//         if (err) {
//           return console.log('Error occurred: ' + err);
//         }
//     }
//  }
// // this will read and append random.txt file
// // 
// function runspot() {
//     fs.appendFile("random.txt", function(err){
//         if (err) {
//             return console.log(err);
//         }
//     })
// }
   