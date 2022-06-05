// GIVEN I need a new, secure password

// Assignment Code
var generateBtn = document.querySelector("#generate");

  // This is the text box 
  var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  // result = prompt("Hello bro");
  var password = generatePassword();

  passwordText.value = password;

}
// WHEN I click the button to generate a password
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// THEN I am presented with a series of prompts for password criteria

function generatePassword() {

  const allUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const allLower = allUpper.toLowerCase();
  const allNum = '0123456789';
  const allSpcl = '!@#$%^&*()-=_+';
  let char = '';
  let newPass = '';

  // WHEN prompted for password criteria
  
  const passLength = parseInt(prompt('Choose between (8-128) for the length of your password'));
  
  // Check if the Prompt input is a Number

  if (isNaN(passLength)) {
    alert('Please add a number for the length of your generated password')
  }

  // Check if Characters are between 8-128
// WHEN prompted for the length of the password
  if (passLength >= 8 && passLength <= 128) {
    console.log('This password is valid')

    // Is Character limit is true show prompts
    // WHEN asked for character types to include in the password

    let addUpper = confirm('Do you want to include Uppercase letters in your password?');
    let addLower = confirm('Do you want to include Lowercase in your password?');
    let addNum = confirm('Do you want to include Numbers in your password?');
    let addSpcl = confirm('Do you want to include Special Characters in you password?');

    // THEN I select which criteria to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
    // WHEN I answer each prompt
    if (addUpper) {
      char += allUpper
    }
    if (addLower) {
      char += allLower
    }
    if (addNum) {
      char += allNum
    }
    if (addSpcl) {
      char += allSpcl
    }
    // THEN my input should be validated and at least one character type should be selected
    if (!addUpper && !addLower && !addNum && !addSpcl) {
      alert('bruh, please put ur damn choice')
    }
    // WHEN all prompts are answered

    for (i = 0; i < passLength; i++) {
      let randomNumber = Math.floor(Math.random() * char.length);
      // THEN a password is generated that matches the selected criteria
      // WHEN the password is generated
      newPass += char.charAt(randomNumber);
    }
    // THEN the password is either displayed in an alert or written to the page
    return newPass
  }
  else {
    return 'Please try again...';
  }
}

















