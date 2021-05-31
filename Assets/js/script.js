
//Present a series of prompts for password criteria.
  //How many characters? 8-128
  //include numbers? upper and lowecase characters? special characters?
  //password is generated with selected criteria



//function variables


var passwordLength;
var uppercaseCheck;
var numberCheck;
var specCheck;


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
        passLength();
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
          uppercaseCheck = false;
          return uppercaseCheck;
        } else {
          alert("Please answer 'yes' or 'no'");
          passCase();
        }
        return uppercaseCheck;
      }

  // function to determine numbers criteria
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
        specCheck = specCheck.toLowerCase();

        if (specCheck === null || specCheck === "") {
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
    
    

    
//Put together previous returns to generate new password

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passLength();
  console.log(passwordLength);
  passCase();
  console.log(uppercaseCheck);
  passNum();
  console.log(numberCheck);
  passSpecChar();
  console.log(specCheck);

  //all possible slected criterion combinations
  
  var characters = lowercase;
  //var password = "";

  if (uppercaseCheck && numberCheck && specCheck) {
    characters += specialcase += numbercase += uppercase;

  } else if (numberCheck && specCheck) {
    characters += numbercase += uppercase;

  } else if (numberCheck && uppercaseCheck) {
    characters += numbercase += specialcase;

  } else if (uppercaseCheck && specCheck) {
    characters += specialcase += uppercase;

  } else if (uppercaseCheck) {
    characters += specialcase;

  } else if (numberCheck) {
    characters += numbercase;

  } else if (specCheck) {
    characters += specialcase;

  } else {
    characters === lowercase
  }

  //actual function loop with all specified password parameters 
    for(var i = 0; i < passLength; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
  }
    // write password to the #password input 
    function generatePassword() {
  //var password = "";
   var password = writePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
    }

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
