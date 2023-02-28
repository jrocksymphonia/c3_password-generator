//characters that the computer can choose from
var lowercaseText = "abcdefghijklmnopqrstuvwxyz";
var uppercaseText = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberText = "0123456789";
var specialCharacterText = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~"; //characters that dont work well are " and \

let keyToAdd = 0

//made functions that randomize the variables above

function lowercaseText(){
  return lowercaseText[Math.floor(Math.random() * lowercaseText.length)];
}

function uppercaseText(){
  return uppercaseText[Math.floor(Math.random() * uppercaseText.length)];
}

function numberText(){
  return numberText[Math.floor(Math.random() * numberText.length)];
}

function specialCharacterText(){
  return specialCharacterText[Math.floor(Math.random() * specialCharacterText.length)];
}

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
  
  //If they `CANCEL` here, then the function ends and returns as empty string
  if(!passwordLength) {
    return ("");
  }

  //My next couple messsages are going to be confirm boxes
  //This is the lowercase option
  var lowerCase = window.confirm("Do you want lowercase letters in your password? \nClick `OK` to confirm, `CANCEL` to deny.");

  //This is the uppercase option
  var upperCase = window.confirm("Do you want uppercase letters in your password? \nClick `OK` to confirm, `CANCEL` to deny.");

  //This is the number option
  var numbers = window.confirm("Do you want numbers in your password? \nClick `OK` to confirm, `CANCEL` to deny.");

  //This is the special character option
  var specialCharacters = window.confirm("Do you want special characters in your password? \nClick `OK` to confirm, `CANCEL` to deny.");
  
  var userAnswer = []
  if (lowerCase){
    userAnswer.push(0)
  }

  if (upperCase){
    userAnswer.push(1)
  }

  if (numbers){
    userAnswer.push(2)
  }

  if (specialCharacters){
    userAnswer.push(3)
  }

  //if the user doesn't select any of the options, alert the user and end the function
  if (lowerCase + upperCase + numbers + specialCharacters === 0){
    window.alert("You must select at least one character type!");
    return;
  }

  //computer magic:
  
  //
  let password = "";
  while (passwordLength > password.length) { 
    keyToAdd = Math.floor(Math.random() * 3);
    if (keyToAdd in userAnswer){
      if (keyToAdd === 0){
        password += lowercaseText[Math.floor(Math.random() * lowercaseText.length)];
      }else if (keyToAdd === 1) {
        password += uppercaseText[Math.floor(Math.random() * uppercaseText.length)];
      }else if (keyToAdd === 2) {
        password += numberText[Math.floor(Math.random() * numberText.length)];
      }else if (keyToAdd === 3) {
        password += specialCharacterText[Math.floor(Math.random() * specialCharacterText.length)];
      }
    }
    
  } 
  return password
}

// (2nd function) Write password to the #password input 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
