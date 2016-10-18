var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var CaesarMessage = function(msg) {
  var shift = 0; // or key
  var message = msg;

  return  {
    code : function(key){
      message = message.toUpperCase().split("");
      for (var i=0;i<message.length;i++) {
        var letterIndex = alphabet.indexOf(message[i]);
        if (letterIndex>=0) {
          if (letterIndex+key>=26) {
            letterIndex-=26;
          }
          message[i]=alphabet[letterIndex+key];
        }
      }
      shift+=key;
      message = message.join("");
    },
    returnToOriginal : function() {
      var message = message.toUpperCase().split("");
      for (var i=0;i<message.length;i++) {
        var letterIndex = alphabet.indexOf(message[i]);
        if (letterIndex>=0) {
          if (letterIndex-shift<0) {
            letterIndex+=26;
          }
          message[i]=alphabet[letterIndex-shift];
        }
      }
      shift=0;
      message = message.join("");
    },z 1
    getMessage : function() {
      return message;
    }
  }
}

// function code(message, shift) {
//   var decoded = message.toUpperCase().split("");
//   for (var i=0;i<decoded.length;i++) {
//     var letterIndex = alphabet.indexOf(decoded[i]);
//     if (letterIndex>=0) {
//       if (letterIndex-shift<0) {
//         letterIndex+=26;
//       }
//       decoded[i]=alphabet[letterIndex-shift];
//     }
//   }
//   return decoded.join("");
// }
//
// function decde(message, shift) {
//   var decoded = message.toUpperCase().split("");
//   for (var i=0;i<decoded.length;i++) {
//     var letterIndex = alphabet.indexOf(decoded[i]);
//     if (letterIndex>=0) {
//       if (letterIndex-shift>=26) {
//         letterIndex-=26;
//       }
//       decoded[i]=alphabet[letterIndex-shift];
//     }
//   }
//   return decoded.join("");
// }
