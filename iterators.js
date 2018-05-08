/* Write a function called listNames
which takes in an array of songs
and console.logs the name of each one. */

function listNames(arr) {
  return arr.forEach(obj => {
    console.log(obj.name);
  });
}



/* Write a function called listSongDetails
which takes in an array of songs
and console.logs details about each one.
The details should be in the following example format:
"Smooth, by Santana featuring Rob Thomas (4:00)". */

function listSongDetails(arr) {
  return arr.forEach(obj => {
    console.log(`${obj.name}, by ${obj.artist} (${obj.duration})`);
  });
}



/* Write a function called summerJamCount
which takes in an array of songs
and returns the number of songs
which hit #1 on the charts in June, July, or August. */

function summerJamCount(arr) {
  return arr.reduce((acc, obj) => {
    if (obj.month === 6 || obj.month === 7 || obj.month === 8) {
      acc ++;
    }
    return acc;
  }, 0);
}



/* Write a function called getDurations
which takes in an array of songs
and returns an array of each song's duration. */

function getDurations(arr) {
  return arr.map(obj => obj.duration);
}



/* Write a function called getDurationsInSeconds
which takes in an array of songs
and returns an array of each song's duration in seconds. */

function getDurationsInSeconds(arr) {
  return arr.map(obj => {
    let time = obj.duration.split(':');
    let seconds = 60 * (parseInt(time[0])) + (parseInt(time[1]));
    return seconds;
  });
}



/* Write a function called getMainArtists
which takes in an array of songs
and returns an array of the primary artists on the recordings.
If there's only one artist, that artist should be returned;
if there are featured artists, they should be ignored
(so only the artist to the left of "featuring" is kept.) */

function getMainArtists(arr) {
  return arr.map(obj => {
    if (obj.artist.includes('featuring')) {
      return obj.artist.split(/\sfeaturing\s/)[0];
    } else {
      return obj.artist;
    }
  });
}



/* Write a function called getBigHits which takes an array of songs
and returns an array of songs which were number one for 10 or more weeks. */

function getBigHits(arr) {
  return arr.filter(obj => obj.weeksAtNumberOne >= 10);
}



/* Write a function called getShortSongs which takes an array of songs
and returns an array of songs which shorter than 3 minutes. */

function getShortSongs(arr) {
  return arr.filter(obj => +obj.duration[0] < 3);
}



/* Write a function called getSongsByArtist
which takes in an array of artists and the name of an artist
and returns an array of songs by that artist. */

function getSongsByArtist(arr, name) {
  return arr.filter(obj => obj.artist.includes(name));
}



/* Refactor summerJamCount to use reduce! */




/* Write a function called getTotalDurationInSeconds
which takes in an array of songs
and returns the total amount of time (in seconds)
it would take to listen to all of the songs.
(Hint: can you use anything you've written already to help solve this problem?) */




/* Write a function called getSongCountByArtist
which takes in an array of songs and returns an object.
The keys in the object should be artist names,
and the values should be the number of songs by that artist in the orignal array. */




/* Write a function called averageWeeksAtNumberOne
which takes in an array of songs
and returns the average number of weeks that songs on the list were #1. */
