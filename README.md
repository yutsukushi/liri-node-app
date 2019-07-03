# liri-node-app #

LIRI Bot is a command-line interface application that will answer questions on music and movies. LIRI takes user commands and inputs on concerts, songs, and movies and displays back details of the specified search. If a search is not specified, LIRI Bot will return information on a default song or movie. 

## Specifically ##

The returned results will appear in your terminal, which will include a name and date/release year. For certain commands, it will return a song preview and album link, movie ratings, language, actors, short plot, and locations. In order to use another command, simply, re-enter a command from the provided command list with a dropdown instruction on how to use.

## How to Use LIRI ##

#### Commands/Instructions ####
<details>
    <summary>`concert-this`</summary>
    <p>To begin, enter in the Terminal: `node liri.js concert-this <artist/band name here>`

    The concert-this command returns any concerts of the given artist or band that you're interested in with the venue name, location, and the date of where they will be performing.</p>
</details>

![concert-this command](\images\concert-this.png)

<details>
    <summary>`spotify-this-song`</summary>
    <p>To begin, enter in the Terminal: `node liri.js spotify-this-song '<song name here>'`

    The spotify-this-song command returns five searches from the Spotify API that is similar or related to the song search provided. LIRI will provide the artist(s), song name, preview link of the song from Spotify, and the album link</p>
    
</details>

![spotify-this-song command](\images\spotify-this-song.png)

<details>
    <summary>`movie-this`</summary>
    <p>To begin, enter in the Terminal: `node liri.js movie-this '<movie name here>'`

    The movie-this command returns the movie from the OMDB API that is similar or related to the movie searched. LIRI will provide the title of the movie, release year, IMDB rating, Rotten Tomatoes rating, country where the movie was produced, language, short plot, and actors in the movie.</p>
    
</details>

![movie-this command](\images\movie-this.png)

<details>
    <summary>`do-what-it-says`</summary>
    <p>To begin, enter in the Terminal: `node liri.js do-what-it-says`
    
    The do-what-it-says command will run a default command and search entered in the random.txt file. In the random.txt file, command and search can be changed with any of the above commands and search that you would like.</p>
    
</details>

![do-what-it-says command](\images\do-what-it-says.png)

## Technologies Used ##

1. NodeJS
2. JavaScript

## App Dev Role ##

I was able to bring LIRI Bot to fruition from start-to-finish with the use of the above technologies. 