const textField = document.getElementById("email-field");
const outputMessage = document.getElementById("output-message");

const VALID_EMAIL_STRING = "VALID PASSWORD";

let ab = new AutomataBuilder_small();
let afd = new AFD(
  ab.alphabet,
  ab.states[0],
  ab.states[0],
  ab.transitions,
  ab.states
);

let abCap = new AutomataBuilder_capital();
let afdCap = new AFD(
  abCap.alphabet,
  abCap.states[0],
  abCap.states[0],
  abCap.transitions,
  abCap.states
);

let abDig = new AutomataBuilder_digits();
let afdDig = new AFD(
  abDig.alphabet,
  abDig.states[0],
  abDig.states[0],
  abDig.transitions,
  abDig.states
);

let abChar = new AutomataBuilder_character();
let afdChar = new AFD(
  abChar.alphabet,
  abChar.states[0],
  abChar.states[0],
  abChar.transitions,
  abChar.states
);

let abLen = new AutomataBuilder_lenght();
let afdLen = new AFD(
  abLen.alphabet,
  abLen.states[0],
  abLen.states[0],
  abLen.transitions,
  abLen.states
);


function onVerificarClick() {
  afd.char = "";
  afdCap.char = "";
  afdDig.char = "";
  afdChar.char = "";
  afdLen.char = "";

  if (!textField.value) {
    INVALID_EMAIL_STRING = "TANGA PASSWORD"
    invalidEmail();
  } 
  else{
    const validationResult = afd.check(textField.value);
    const validationResult2 = afdCap.check(textField.value);
    const validationResult3 = afdDig.check(textField.value);
    const validationResult4 = afdChar.check(textField.value);
    const validationResult5 = afdLen.check(textField.value);

    if (validationResult.isValid && validationResult2.isValid && validationResult3.isValid && validationResult4.isValid && validationResult5.isValid) {
      validEmail();
    } 
    else if (!validationResult.isValid){
      INVALID_EMAIL_STRING = "No small letters: Invalid Password";
      invalidEmail(INVALID_EMAIL_STRING);
    }
    else if (!validationResult2.isValid){
      INVALID_EMAIL_STRING = "No capital letters: Invalid Password";
      invalidEmail(INVALID_EMAIL_STRING);
    }
    else if (!validationResult3.isValid){
      INVALID_EMAIL_STRING = "No Numbers: Invalid Password";
      invalidEmail(INVALID_EMAIL_STRING);
    }
    else if (!validationResult4.isValid){
      INVALID_EMAIL_STRING = "No Characters: Invalid Password";
      invalidEmail(INVALID_EMAIL_STRING);
    }
    else if (!validationResult5.isValid){
      INVALID_EMAIL_STRING = "Password must contain 8 characters";
      invalidEmail(INVALID_EMAIL_STRING);
    }
    else {
      INVALID_EMAIL_STRING = "Invalid Password";
      invalidEmail(INVALID_EMAIL_STRING);
    }

  }
}


function validEmail() {
  outputMessage.innerHTML = VALID_EMAIL_STRING;
  outputMessage.style.display = "block";
  outputMessage.style.color = "#349c22";
}

function invalidEmail() {
  outputMessage.innerHTML = INVALID_EMAIL_STRING;
  outputMessage.style.color = "#cf3232";
  outputMessage.style.display = "block";
}


function hideOutput() {
  outputMessage.style.display = "none";
}
