// Assignment code here
const types = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+~\`|}{[]:;?><,./-="
}
var length 
var selectu
var selectl
var selectn
var selects
// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 
generate.addEventListener("click", (writePassword)); {
  var button = Event.target;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{

}
