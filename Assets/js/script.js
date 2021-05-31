
//Present a series of prompts for password criteria.
  //How many characters? 8-128
  //include numbers? upper and lowecase characters? special characters?
  //password is generated with selected criteria



//password criteria variables 
var specialcase = "!@#$%^&*()_+=-[]{}\|;:'<>?/";
var numbercase = "1234567890";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";

//password variable prompts

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
