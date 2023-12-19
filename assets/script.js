
let generateBtn = document.querySelector("#generate");

let pwdCriteria = {

  pwdLength: 0,

  pwdLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

  pwdUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  pwdNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

  pwdCharacter: ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]
}

// WRITES PASSWORD TO THE #PASSWORD ID FIELD ON THE HTML FILE
function writePassword() {

  let password = generatePassword();
  
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

// CREATING FUNCTION TO GENERATE PASSWORD WITH USER OPTIONS
function generatePassword() {

  // INITIALISING EMPTY PASSWORD RESULT
  let result = "";

  // INITIALISING VARIABLES
  let passwordLength = 0;
  let upperCase;
  let lowerCase;
  let numbers;
  let specialChar;

  // PROMPTING USER FOR LENGTH OF PASSWORD
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("How many characters would you like your password to be?\nPassword must be between 8 and 128 characters.");

    // IF USER CLICKS CANCEL
    if (passwordLength === null) {
      return "Your Secure Password";
    }
    else {
      // IF USER DOES NOT ENTER A NUMBER
      if (!isFinite(passwordLength)) {
        alert("Please enter a number.");
      }
      else {
        // IF USER ENTERS A NUMBER OUTSIDE THE CRITERIA
        if (passwordLength < 8 || passwordLength > 128) {
          alert("Password must be between 8 and 128 characters.");
        }
        else {

          // IF LENGTH IS BETWEEN 8 AND 128, CONTINUE WITH USER PROMPTS
          prompts();

          // IF USER DOES NOT SELECT ANY OPTIONS
          while (pwdCriteria.pwdLength < passwordLength) {
            if (lowerCase === false && upperCase === false && numbers === false && specialChar === false) {
              alert("You must select at least one option of lowercase, uppercase, numbers or special characters")
              prompts();
            }
            else {
              // IF USER SELECTS LOWERCASE CHARACTERS AND THEY HAVE ENOUGH ROOM TO ADD MORE CHARACTERS INTO THEIR CHOSEN LENGTH, RANDOMLY CHOOSE A LETTER FROM THE LOWERCASE ARRAY AND ADD IT ONTO THE END OF THE PASSWORD RESULT
              if (lowerCase === true && pwdCriteria.pwdLength < passwordLength) {
                var lc = pwdCriteria.pwdLowerCase[Math.floor(Math.random() * 26)]
                result = result + lc;
                pwdCriteria.pwdLength++;
              }

              // IF USER SELECTS UPPERCASE CHARACTERS AND THEY HAVE ENOUGH ROOM TO ADD MORE CHARACTERS INTO THEIR CHOSEN LENGTH, RANDOMLY CHOOSE A LETTER FROM THE UPPERCASE ARRAY AND ADD IT ONTO THE END OF THE PASSWORD RESULT
              if (upperCase === true && pwdCriteria.pwdLength < passwordLength) {
                var uc = pwdCriteria.pwdUpperCase[Math.floor(Math.random() * 26)]
                result = result + uc;
                pwdCriteria.pwdLength++;
              }

              // IF USER SELECTS NUMBERS AND THEY HAVE ENOUGH ROOM TO ADD MORE CHARACTERS INTO THEIR CHOSEN LENGTH, RANDOMLY CHOOSE A NUMBER FROM THE NUMBERS ARRAY AND ADD IT ONTO THE END OF THE PASSWORD RESULT
              if (numbers === true && pwdCriteria.pwdLength < passwordLength) {
                var num = pwdCriteria.pwdNumber[Math.floor(Math.random() * 10)]
                result = result + num;
                pwdCriteria.pwdLength++;
              }

              // IF USER SELECTS SPECIAL CHARACTERS AND THEY HAVE ENOUGH ROOM TO ADD MORE CHARACTERS INTO THEIR CHOSEN LENGTH, RANDOMLY CHOOSE A CHARACTER FROM THE SPECIAL CHARACTERS ARRAY AND ADD IT ONTO THE END OF THE PASSWORD RESULT
              if (specialChar === true && pwdCriteria.pwdLength < passwordLength) {
                var sc = pwdCriteria.pwdCharacter[Math.floor(Math.random() * 32)]
                result = result + sc;
                pwdCriteria.pwdLength++;
              }
            }
          }
        }
      }
    }

    // RETURN THE FINALISED PASSWORD TO THE FUNCTION
    return result;

    // PROMPTS USERS OPTIONS
    function prompts() {
      lowerCase = confirm("Do you want to include lowercase letters?");
      upperCase = confirm("Do you want to include uppercase letters?");
      numbers = confirm("Do you want to include numbers?");
      specialChar = confirm("Do you want to include special characters?");
    }
  }
}