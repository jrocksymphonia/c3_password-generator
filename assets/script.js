// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters

  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters


// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //I added my first prompt: the length of the password
  var passwordLength = window.prompt("Set character length of password. It can be 8-128 characters long.");

  //then I have to make an if statement. If cancel, then the function ends


  //My next couple messsages are going to be confirm boxes
  //This is the lowercase option
  var lowerCase = window.confirm("Do you want lowercase letters in your password? \nClick `OK` to confirm, `CANCEL` to deny.")


  //This is the uppercase option
  var upperCase = window.confirm("Do you want uppercase letters in your password? \nClick `OK` to confirm, `CANCEL` to deny.")


  //This is the number option
  var numbers = window.confirm("Do you want numbers in your password? \nClick `OK` to confirm, `CANCEL` to deny.")


  //This is the special character option
  var specialCharacters = window.confirm("Do you want special characters in your password? \nClick `OK` to confirm, `CANCEL` to deny.")


}

// (2nd function) Write password to the #password input 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//----------------------------------------------------------------------------------------------










// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page