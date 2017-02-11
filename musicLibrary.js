//define multiple prototype functions
//Library
// ---> A Library has a name and a creator (both strings)
// ---> A Library has many playlists (starts as an empty array)
//Playlist objects can be added to an instance of a library

// Playlist {
//   name: "playlist1",
//   tracks: ["tracks", "moreTracks", ]
//   overallRating: //method to calculate the average all the ratings that each track has
//   totalDuration: //method to sum the length of all the tracks
//                 //possible function to convert seconds back into minutes
// }

var Jacket = function(size, color, season, cost) {
  this.size = size;
  this.color = color;
  this.season = season;
  this.cost = cost;
  this.usuability = 100;
}

Jacket.prototype.depreciation = function(wearAndTear) {
  this.usuability -= wearAndTear;
}

Jacket.prototype.addSeason = function(season) {
  this.season.push(season);
}

let rainJacket = new Jacket("med", "purple", ["summer", "spring", "fall"], 68.00);

let Library = function(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

let carMusic = new Library("Roadtrip Music", "Steve")

//push playlists from a method in playlist???
//--------------------------------------------------------------
//Playlist
//---> Each Playlist has a name which is required upon creation
//---> A Playlist also has many tracks
//---> Each Playlist also has an overallRating function which will calculate the rating by averaging the rating of its tracks
//---> Each Playlist also has a totalDuration function which will sum the duration of all of its tracks
//maybe use the secondsToMinutes function for total Duration.
let Playlist = function(name) {
  this.name = name;
  this.tracks = [];
  this.trackRating = [];
  this.averageRating = 0;
  this.trackDuration = [];
  this.totalDuration = 0;
}

let song1 = new Playlist("Roadtrip Songs")

//dont know if this needs to exist. Possible to just add functions as methods and have information stored
//for every instance
Playlist.prototype.addTrackToPlaylist = function(trackName, trackRating, trackDurationInSeconds) {
  this.tracks.push(trackName);
  this.trackRating.push(trackRating);
  this.trackDuration.push(trackDurationInSeconds);
}

song1.addTrackToPlaylist("Tellin Lies", 5, 200)
song1.addTrackToPlaylist("The Bars", 4, 230)
song1.addTrackToPlaylist("After The Party", 4, 190)
song1.addTrackToPlaylist("Life Aint Easy", 5, 250)

Playlist.prototype.getRatingAverage = function(arrayOfRatings) {
  let tracks = this.trackRating.length;
  let totalRating = 0;
    for (var i = 0; i < tracks; i++) {
      totalRating += arrayOfRatings[i];
    }
    return this.averageRating = (totalRating / tracks);
}

song1.getRatingAverage(song1.trackRating)
console.log(songs1)

Playlist.prototype.convertToMinutes = function(songTimeArray) {
  let songTimeTotal = this.trackDuration.length;
  let totalTime = 0;
  for (var i = 0; i < songTimeTotal; i++) {
    totalTime += songTimeArray[i]
  }
  var minutes = (totalTime / 60).toFixed(2);
   return minutes;
   //maybe return a template literal with _Minutes and _Seconds (60 seconds logic)
}

song1.convertToMinutes(song1.trackDuration)

Playlist.prototype.sumDurationInSeconds = function(){

}



//Track
//---> A Track has a title, a rating (an integer from 1 to 5) and a
//length (integer in seconds) all of which are required when creating a new track

let Track = function(title, rating) {
  this.title = title;
  this.rating = rating;
  this.length = 0;
}

Track.prototype.convertToMinutes = function(songTime) {
  var minutes = Math.floor(songTime / 60);
   this.length += minutes;
}

Track.prototype.convertToSeconds = function(songTimeMinutes, songTimeSeconds) {
  var seconds = Math.floor(songTimeMinutes * 60) +  songTimeSeconds;
  this.length += seconds;
}

// let blackMass = new Track("Black Mass", 3)
// blackMass.convertToSeconds(2, 52)
// console.log(blackMass)

// let houseOnFire = new Track("House On Fire", 3)
// houseOnFire.convertToMinutes(180)
// console.log(houseOnFire)
