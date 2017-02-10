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

var rainJacket = new Jacket("med", "purple", ["summer", "spring", "fall"], 68.00);

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
let Playlist = function(name) {
  this.name = name;
  this.tracks = ["one", "two", "three"];
  this.overallRating = [1, 3, 5, 3, 3, 2];
  this.averageRating = 0;
  this.totalDuration = [600];
}

let songs1 = new Playlist("Songs For Lance");

Playlist.prototype.addTrackToPlaylist = function(trackName) {

}

Playlist.prototype.getRatingAverage = function(arrayOfRatings){
  let tracks = this.overallRating.length;
  let totalRating = 0;
    for (var i = 0; i < tracks - 1; i++) {
      totalRating += arrayOfRatings[i];
    }
    return this.averageRating = (totalRating / tracks);
}


songs1.getRatingAverage(songs1.overallRating)
console.log(songs1)


Playlist.prototype.sumDurationInSeconds = function(){
  // let tracks = t

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
