
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
    function passLength() {
      passwordLength = prompt("Choose password character length. (Between 8-128 characters)");
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
      caseCheck = prompt("Do you want to include uppercase letters in your password? (Yes or No)");
      uppercaseCheck = caseCheck.toLowerCase();
        if (uppercaseCheck === null || uppercaseCheck ==="") {
          alert("Please enter 'yes' or 'no'");
          caseCheck();
        } else if (uppercaseCheck === "yes" || uppercaseCheck === "y") {
          uppercaseCheck = true;
          return uppercaseCheck;
        } else if (uppercaseCheck === "no" ||  uppercaseCheck === "n") {
          uppercaseCheck = fasle;
          return uppercaseCheck;
        } else {
          alert("Please answer 'yes' or 'no'");
          passCase();
        }
        return uppercaseCheck;
      }

  // function to determin numbers criteria
      function passNum() {
        numberCheck = prompt("Do you want to include numbers in your password? (Yes or No)");
        numberCheck = numberCheck.toLowerCase();

        if (numberCheck === null || numberCheck === "") {
          alert("Please answer 'yes' or 'no'");
          passNum();
        } else if (numberCheck === "yes" || numberCheck === "y") {
        numberCheck = true;
        return numberCheck;
      } else if (numberCheck === "no" || numberCheck === "n") {
        numberCheck = false;
        return numberCheck;
      } else {
        alert("Please enter 'yes' or 'no'");
        passNum();
      }
      return numberCheck;
    }

    // function to determine special characters criteria
      function passSpecChar() {
        specCheck = prompt("Do you want to include special characters in your password? (Yes or No");
        specCheck = specCheck.toLowerCase;

        if (specCheck === nill || specCheck === "") {
          alert("Please answer 'yes' or 'no'");
          passSpecChar();
        } else if (specCheck === "yes" || specCheck === "y") {
        specCheck = true;
        return specCheck;
        } else if (specCheck === "no" || specCheck === "n") {
          specCheck = false;
          return specCheck;
        } else {
          alert("Please enter 'yes' or 'no'");
          passSpecChar();
        }
        return specCheck;
      }  
    
    

    


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passLength();
  console.log(passwordLength);
  passCase();
  console.log(uppercaseCheck);

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
