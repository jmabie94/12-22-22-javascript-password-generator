// Assignment Code

/* flesh out each array to contain all possibles */
var specialCharacters = ["!", "@", "#", "$", "%", "&", "*", "?",];
var numberCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",];
var capitalCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
"N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var lowcaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

/* use "concat" to add to array as confirms/alerts are triggered
use a lot of if boxes
add alert where if you don't select any parameters it alerts that they're required
alternatively, give them a password anyway but also alert */

/* 
if it's not a number, NaN alert that must be a number (still need to do)
if it's less than 8, alert that it must be at least 8
if it's more than 128, alert that it must be less than 128*/

/* Variable Declarations */
var confirmLength = "";
var confirmSpecial;
var confirmNumber;
var confirmCapital;
var confirmLowCase;

/* Confirm How Many Characters in Password */
function generatePassword() {
  var confirmLength = (prompt("How long should your password be?"));
  /* Reject if the Length is less than 8 and more than 128 */
  if (confirmLength <=7 || confirmLength >= 129) {
    alert("Password must be a number between 8-128 characters, please try again!");
    /* hidden erroneous code below */
    /* var confirmLength = (prompt("How long should your password be?")); */
    return null
    }
  if (isNaN(confirmLength)) {
    /* reject if non-numerical entry */
    alert("Password must be a numeric value between 8-128 characters, please try again!");
    /* hidden erroneous code below */
    /* var confirmLength = (prompt("How long should your password be?")); */
    return null
  }
    alert(`Your password will be ${confirmLength} characters long`);
    /* Confirm which kinds of characters are needed for the password */
  var confirmSpecial = confirm("Does your password need to have special characters?");
  var confirmNumber = confirm("Does your password need to have numbers?");
  var confirmCapital = confirm("Does your password need to have capital letters?");
  var confirmLowCase = confirm("Does your password need to have lowercase letters?");
  /* Reject if no confirms are made, must have at least one selected */
    while(confirmLowCase === false && confirmCapital === false && confirmNumber === false && confirmSpecial === false) {
      alert("You have to choose at least one!");
      var confirmSpecial = confirm("Does your password need to have special characters?");
      var confirmNumber = confirm("Does your password need to have numbers?");
      var confirmCapital = confirm("Does your password need to have capital letters?");
      var confirmLowCase = confirm("Does your password need to have lowercase letters?");
    }
    /* emtpy array to combine with initial arrays as needed */
    var passwordCharacters = []
  if (confirmSpecial) {
    passwordCharacters = passwordCharacters.concat(specialCharacters)
  }
  if (confirmNumber) {
    passwordCharacters = passwordCharacters.concat(numberCharacters)
  }
  if (confirmCapital) {
    passwordCharacters = passwordCharacters.concat(capitalCharacters)
  }
  if (confirmLowCase) {
    passwordCharacters = passwordCharacters.concat(lowcaseCharacters)
  }
  /* logs the full array of chosen characters */
  console.log(passwordCharacters)
  /* empty string to fill with the randomly generated results */
    var randomPassword = ""
    /* using the console log of chosen characters, random generation only applies to those */
    for (var i = 0; i < confirmLength; i++) {
      randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
      console.log(randomPassword)
    }
    /* result from random generation of chosen characters */
    return randomPassword;
}

/* Get references to the #generate element */
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

