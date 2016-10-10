var myTopChoices = [
  'Closer',
  'The Greatest',
  'Dancing On My Own',
  'Heathens',
  'Side To Side',
  'Let Me Love You',
  'Cold Water',
  'Papercuts'];

for (var count = 0; count < myTopChoices.length; count++){
  if ((count%10) === 1){
    console.log('My ' + (count+1) + 'st song choice is ' + myTopChoices[count] + '.');
  }
  else if ((count%10) === 2){
    console.log('My ' + (count+1) + 'nd song choice is ' + myTopChoices[count] + '.');
  }
  else{
    console.log('My ' + (count+1) + 'th song choice is ' + myTopChoices[count] + '.');
  }
}