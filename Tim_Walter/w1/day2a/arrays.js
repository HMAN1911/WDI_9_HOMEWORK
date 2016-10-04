// Your top choices
// Create an array to hold your top choices (colours, movies, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice",
// picking the right suffix for the number based on what it is.

topChoices = ['natural minor', 'harmonic minor', 'melodic minor', 'major', 'dorian', 'phrygian', 'mixolydian', 'lydian', 'locrian'];

for (var index=0; index < topChoices.length; index++) {
  if (index === 0) {
    console.log('My 1st scale choice is ' + index + ' ' + topChoices[index]);
} else if (index === 1) {
    console.log('My 2nd scale choice is ' + index + ' ' + topChoices[index]);
} else if (index === 2) {
    console.log('My 3rd scale choice is ' + index + ' ' + topChoices[index]);
} else {
    console.log('My 4th scale choice is ' + index + ' ' + topChoices[index]);
}
}
