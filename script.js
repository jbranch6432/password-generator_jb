// Variables assigned for password generation options
var options = {
  lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numeric: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  specialChar: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"],
}



    var getType = [

      function lowerCase() {
        return types.lowerCase [Math.floor(Math.random() * types.lowerCase.length)];
      },

      function upperCase() {
        return types.upperCase [Math.floor(Math.random() * types.upperCase.length)];
      },

      function numeric() {
        return types.numeric [Math.floor(Math.random() * types.numeric.length)];
      },

      function specialChar() {
        return types.specialChar [Math.floor(Math.random() * types.specialChar.length)];
      },
    ]

    function generatePassword(){
      var passwordLength = prompt("Please select password length between 8-128 characters."); 
    if (passwordLength < 8) {
      prompt("Password length must be at least 8 characters. Please try again.");
    } else if (passwordLength > 128) {
     prompt("Password length must be less than 129 characters. Please try again.");
    } else (passwordLength > 8 && passwordLength < 129);{
       console.log(passwordLength);
  }


    var isUpperCase = confirm("Would you like to include upper case letters?");
    var isLowerCase = confirm("Would you like to include lower case letters?");
    var isNumeric = confirm("Would you like to include numbers?");
    var isSpecialChar = confirm("Would you like to include special characters?");

      console.log(isUpperCase, isLowerCase, isNumeric, isSpecialChar);
      
      //if nothing is selected for lower, upper, number, or character then prompt user to select at least one option
      if (!isUpperCase && !isLowerCase && !isNumeric && !isSpecialChar) {
        alert("Please select at least one option!");
        
      generatePassword();
    }
        
      

      if (isUpperCase===true) {

      }
      for (var i = 0; i < passwordLength; i++) {
        var randomPassword = randomPassword + options[Math.floor(Math.random() * options.length)];
        console.log(randomPassword)
      }
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

//console.log(writePassword);
