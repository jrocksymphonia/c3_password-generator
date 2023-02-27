
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters

  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters









//characters that the computer can choose from
var lowercaseText = "abcdefghijklmnopqrstuvwxyz";
var uppercaseText = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberText = "0123456789";
var specialCharacterText = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~"; //characters that dont work well are " and \

  //I entered a forLoop of the numberInput options so the input in the prompt can range from 8-128
  for (var i = 8; i <= 128; i++) { //OMG I NEVER COMPLETED THE forLoop LOL
    
    
    // passwordLength = i //a number btw 8-128
  } 


//made an array of the variables above
var characterType = [lowercaseText, uppercaseText, numberText, specialCharacterText]; //might be extra

// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  //I added my first prompt: the length of the password
  var passwordLength = window.prompt("Set character length of password. It can be 8-128 characters long.");
  
  //If they `CANCEL` here, then the function ends
  if(passwordLength) {
    
  }else{
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
  var lowerCase = window.confirm("Do you want lowercase letters in your password? \nClick `OK` to confirm, `CANCEL` to deny.");

  //if user hits `OK`, it acceses string of lowercase letters
  if (lowerCase) {
    lowercaseText
  }

  //This is the uppercase option
  var upperCase = window.confirm("Do you want uppercase letters in your password? \nClick `OK` to confirm, `CANCEL` to deny.");

  //if user hits `OK`, it acceses string of uppercase letters
  if (upperCase) {
    uppercaseText
  }

  //This is the number option
  var numbers = window.confirm("Do you want numbers in your password? \nClick `OK` to confirm, `CANCEL` to deny.");

  //if user hits `OK`, it acceses string of numbers
  if (numbers) {
    numbersText
  }

  //This is the special character option
  var specialCharacters = window.confirm("Do you want special characters in your password? \nClick `OK` to confirm, `CANCEL` to deny.");
  
  //if user hits `OK`, it acceses string of special characters
  if (specialCharacters) {
    specialCharacterText
  }


  //computer magic:
  

  //Answer options:
  // out of 120 character lengths, you get 14 options for each length
  //(lowercase = LC, uppercase = UC, number = N, special characters = SC):
  //if user only chooses 1 of 4 options:
  // -LC 
  // -UC
  // -N
  // -SC

  //if user chooses 2 of 4 options:
  // -LC + UC
  // -LC + N
  // -LC + SC
  // -UC + N
  // -UC + SC
  // -N + SC

  //if user chooses 3 of 4 options:
  // -LC + UC + N
  // -LC + N + SC
  // -UC + N + SC

  //if user chooses 4 of 4 options:
  // -LC + UC + N + SC




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