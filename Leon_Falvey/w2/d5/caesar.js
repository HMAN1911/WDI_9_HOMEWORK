var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function cCD(message, shift) {
  var decoded = message.toUpperCase().split("");
  for (var i=0;i<decoded.length;i++) {
    var letterIndex = alphabet.indexOf(decoded[i]);
    if (letterIndex>=0) {
      if (letterIndex-shift<0) {
        letterIndex+=26;
      }
      decoded[i]=alphabet[letterIndex-shift];
    }
  }
  return decoded.join("");
}

function cCC(message, shift) {
  var decoded = message.toUpperCase().split("");
  for (var i=0;i<decoded.length;i++) {
    var letterIndex = alphabet.indexOf(decoded[i]);
    if (letterIndex>=0) {
      if (letterIndex-shift>=26) {
        letterIndex-=26;
      }
      decoded[i]=alphabet[letterIndex-shift];
    }
  }
  return decoded.join("");
}
