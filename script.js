// Assignment code here
const types = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+~\`|}{[]:;?><,./-="
}
var length 
var selectU
var selectL
var selectN
var selectS


// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 
generate.addEventListener("click", (writePassword)); {
  var button = Event.target;
}
//here goes the function to generate the password
// https://stackoverflow.com/questions/1482555/alert-prompt-checkboxes, 
//https://www.w3schools.com/jsref/met_win_confirm.asp
function generatePassword (_length,_selectu,_selectl,_selectn,_selects) {
   
  var _length = parseInt(prompt ("Select a length between 8 and 128"));{ //parse turns the string into integer
      if (_length >=8 && _length<=128) {
      _selectu
        }else {
      return ("That's not a valid choice")
          }
    }
  var _selectu = confirm ("Do you want to use Upper case?")
  var _selectl = confirm ("Do you want to use lower case?")
  var _selectn = confirm ("Do you want to use numbers?")
  var _selects = confirm ("Do you want to use symbols?")
   

}
// Write password to the #password input
function writePassword(password) {
  var password = generatePassword(length,selectU,selectL,selectN,selectS);

   

  
  var passwordText = document.querySelector("#password");
//function to recall the password  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{

}
