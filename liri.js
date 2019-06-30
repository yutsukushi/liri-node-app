require("dotenv").config();

// once npm packages are installed, you must require them to be able to reference the node packages.
var axios = require("axios");
var Spotify = require("node-spotify-api");
var keys = require("keys.js");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");


// declaring var to user input on index 2.
var action = process.argv[2]; //user input of which command they want to use
var artist = process.argv[3]; //user input of which artist they want to look up

// switch-case statement for user input of multiple commands:
switch (action) {
    case "concert-this":
        band();
        break;

    case "spotify-this-song":
        spotify();
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
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    
    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // }).then(function(response) {
    //     console.log(response)
        
    // })
    axios.get(queryURL).then(function(res){
        //console.log(res.data);
        for(var i=0; i<res.data.length; i++){
            var show = res.data[i];
            console.log(show.venue.name +" " +show.venue.country +" " +show.datetime);
        }


    })
    // console.log("band function");
}

// this will read and append random.txt file
// 
// function runspot() {
//     fs.appendFile("random.txt", function(err){
//         if (err) {
//             return console.log(err);
//         }
//     })
// }