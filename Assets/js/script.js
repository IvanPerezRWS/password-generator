
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

  // length funciton
    function passLength(){
      passwordLength = prompt("Choose passworf character length. (Between 8-128 characters)");
      if (passwordLength < 8) {
        alert("Password length must be between 8-128 characters");
        passLength();
      } else if (passwordLength > 128) {
        alert("Password length must be between 8-128 characters");
        passLength();
      } else if (isNaN(passwordLength)) {
        alert("Password length must be between 8-128 characters");
        passwordLength();
      } else {
        alert("Select the following criteria for you password.");
      }
      return passwordLength;
    }

  // function to determine uppercase/lowercase criteria
    function passCase() {
      
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
