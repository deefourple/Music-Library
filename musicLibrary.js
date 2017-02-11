let Library = function(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}
//push playlists from a method in playlist???

let Playlist = function(name) {
  this.name = name;
  this.tracks = [];
  this.trackRating = [];
  this.averageRating = 0;
  this.trackDuration = [];
  this.totalDuration = 0;
}

let Track = function(title, rating) {
  this.title = title;
  this.rating = rating;
  this.length = 0;
}

//use for examples:

// let carMusic = new Library("Roadtrip Music", "Steve")
// let song1 = new Playlist("Roadtrip Songs")
// let blackMass = new Track("Black Mass", 3)
// let houseOnFire = new Track("House On Fire", 3)

// song1.addTrackToPlaylist("Tellin Lies", 5, 200)
// song1.addTrackToPlaylist("The Bars", 4, 230)
// song1.addTrackToPlaylist("After The Party", 4, 190)
// song1.addTrackToPlaylist("Life Aint Easy", 5, 250)

Playlist.prototype.addTrackToPlaylist = function(trackName, trackRating, trackDurationInSeconds) {
  this.tracks.push(trackName);
  this.trackRating.push(trackRating);
  this.trackDuration.push(trackDurationInSeconds);
}

Playlist.prototype.getRatingAverage = function(arrayOfRatings) {
  let tracks = this.trackRating.length;
  let totalRating = 0;
    for (var i = 0; i < tracks; i++) {
      totalRating += arrayOfRatings[i];
    }
    return this.averageRating = (totalRating / tracks);
}

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

Playlist.prototype.totalDuration = function(trackDuration){
  let songTimeTotal = this.trackDuration.length;
  let totalTime = 0;
    for (var i = 0; i < songTimeTotal; i++) {
      totalTime += trackDuration[i]
    }
    return totalTime
}

Track.prototype.convertToMinutes = function(songTime) {
  var minutes = Math.floor(songTime / 60);
   this.length += minutes;
}

Track.prototype.convertToSeconds = function(songTimeMinutes, songTimeSeconds) {
  var seconds = Math.floor(songTimeMinutes * 60) +  songTimeSeconds;
  this.length += seconds;
}
