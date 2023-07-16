// Variables assigned for password generation options
var options = {
  lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numeric: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  specialChar: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"],
}

    function generatePassword(){
      var passwordLength = prompt("Please select password length between 8-128 characters."); 
    if (passwordLength < 8) {
      alert("Password length must be at least 8 characters. Please try again.");
      return null
    } else if (passwordLength > 128) {
     alert("Password length must be less than 129 characters. Please try again.");
     return null
    } 


    var isUpperCase = confirm("Would you like to include upper case letters?");
    var isLowerCase = confirm("Would you like to include lower case letters?");
    var isNumeric = confirm("Would you like to include numbers?");
    var isSpecialChar = confirm("Would you like to include special characters?");

      console.log(isUpperCase, isLowerCase, isNumeric, isSpecialChar);
      
      //if nothing is selected for lower, upper, number, or character then prompt user to select at least one option
      if (!isUpperCase && !isLowerCase && !isNumeric && !isSpecialChar) {
        alert("Please select at least one option!");
        return null
    }
    //Create character bank to pull options from to form random password
             var charBank = []
             var randomPassword = ''

      if (isUpperCase) {
        charBank = charBank.concat(options.upperCase)
      }

      if (isLowerCase) {
        charBank = charBank.concat(options.lowerCase)
      }

      if (isNumeric) {
        charBank = charBank.concat(options.numeric)
      }


      if (isSpecialChar) {
        charBank = charBank.concat(options.specialChar)
      }


      for (var i = 0; i < passwordLength; i++) {
        var randomPasswordChar = charBank[Math.floor(Math.random() * charBank.length)];
         randomPassword += randomPasswordChar
      }

      return randomPassword
    }



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


