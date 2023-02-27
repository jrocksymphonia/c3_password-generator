
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters

  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters


//-------------------------------------------------------------------------------------------------------


//characters that the computer can choose from
var lowercaseText = "abcdefghijklmnopqrstuvwxyz";
var uppercaseText = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberText = "0123456789";
var specialCharacterText = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~"; //characters that dont work well are " and \


//made an array of functions that randomize the variables above
var characterType = [
  function lowercaseText(){
    return lowercaseText[Math.floor(Math.random() * lowercaseText.length)];
  }, 
  function uppercaseText(){
    return uppercaseText[Math.floor(Math.random() * uppercaseText.length)];
  },
  function numberText(){
    return numberText[Math.floor(Math.random() * numberText.length)];
  },
  function specialCharacterText(){
    return specialCharacterText[Math.floor(Math.random() * specialCharacterText.length)];
  }
]; 

// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  //I added my first prompt: the length of the password
  var passwordLength = window.prompt("Set character length of password. It can be 8-128 characters long.");

  //The idea is that they must choose a number between 8-128. 
  // If number input less than 8, more that 128, or any other character that's not a number,
  // then an alert box shows up saying wrong input, then run the prompt runs again.
  if(passwordLength < 8){
    window.alert("You must enter a number between 8 and 128");
    window.prompt("Set character length of password. It can be 8-128 characters long.");
  }else if(passwordLength > 128){
    window.alert("You must enter a number between 8 and 128");
    window.prompt("Set character length of password. It can be 8-128 characters long.");
  }else if (isNaN(passwordLength)){
    window.alert("You must enter a number between 8 and 128");
    window.prompt("Set character length of password. It can be 8-128 characters long.");
  }

  window.alert(passwordLength);
  
  //If they `CANCEL` here, then the function ends and returns as empty string
  if(!passwordLength) {
    return ("");
  }

  //My next couple messsages are going to be confirm boxes
  //This is the lowercase option
  var lowerCase = window.confirm("Do you want lowercase letters in your password? \nClick `OK` to confirm, `CANCEL` to deny.");

  window.alert(lowerCase)

  //if user hits `OK`, it acceses string of lowercase letters
  if (lowerCase) {
    lowercaseText;
  }else{
    !lowercaseText
  }

  

  //This is the uppercase option
  var upperCase = window.confirm("Do you want uppercase letters in your password? \nClick `OK` to confirm, `CANCEL` to deny.");

  //if user hits `OK`, it acceses string of uppercase letters
  if (upperCase) {
    uppercaseText
  }else{
    !uppercaseText
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
  
  // //The password length options 8-128
  for (var i = 8; i <= 128; i++) { //OMG I NEVER COMPLETED THE forLoop LOL
   if (lowerCase){
      //generate password
   }else if(lowerCase && upperCase){
      //generate password
   }else if(lowerCase && upperCase && numbers){
      //generate password
   }else if(lowerCase && upperCase && numbers && specialCharacters){
      //generate password
   }
  } 

  // if ((passwordLength === 8) && ){

  // }

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