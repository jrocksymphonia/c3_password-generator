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

//correct answers that the computer has to log

function generatePassword() {
  //I added my first prompt: the length of the password
  var passwordLength = window.prompt("Set character length of password. It can be 8-128 characters long.");
  var numberInput = i

  //I entered a forLoop of the numberInput options so the input in the prompt can range from 8-128
  for (var i = 0; i >= 7; i++)


  //If they `CANCEL` here, then the function ends
  if(!passwordLength) {
    return;
  }
  //then I have to make an if statement: 
  //If number input less than 8, more that 128, or any other character,
  // then show alert box saying wrong input, then run the code again.
  // if (!numberInput) {
  //   window.alert("You must enter a number between 8 and 128");
  //   passwordLength
  // }

  



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