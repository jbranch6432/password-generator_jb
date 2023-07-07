// Variables assigned for password generation options
var options = {
  lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numeric: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  specialChar: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"],
}

// var passwordLength = prompt("Please select password length between 8-128 characters."); 
//     if (passwordLength < 8) {
//       prompt("Password length must be at least 8 characters. Please try again.");
//     } else if (passwordLength > 128) {
//      prompt("Password length must be less than 129 characters. Please try again.");
//     } else (passwordLength > 8 && passwordLength < 129);{
//        console.log(passwordLength);
//   }


    var answer1 = confirm("Would you like to include upper case letters?");
    console.log(answer1);
    var answer2 = confirm("Would you like to include lower case letters?");
    console.log(answer2);
    var answer3 = confirm("Would you like to include numbers?");
    console.log(answer3);
    var answer4 = confirm("Would you like to include special characters?");
    console.log(answer4);

    for (var i = 0; i < passwordLength; i++) {
      var randomPassword = randomPassword + options[Math.floor(Math.random() * options.length)];
      console.log(randomPassword)
    }
  
alert(randomPassword);




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

console.log(writePassword);
