const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const passwordsContainer = document.getElementById("passwords-container");



const characters = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U",
  "V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p",
  "q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9",
  "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",
  ",","|",":",";","<",">",".","?","/"
]; // Array containing characters

const desiredLength = 15; // Desired length of the random string

function generateRandomString() {
  let randomString = '';
  for (let i = 0; i < desiredLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters[randomIndex];
  }
  return randomString;
}

function generatePassword() {
  console.log("Generating passwords...");
  // Generate the first random string
  password1El.textContent = generateRandomString();

  // Generate the second random string until it's different from the first one
  do {
    password2El.textContent = generateRandomString();
  } while (password2El.textContent === password1El.textContent); // Compare textContent

   passwordsContainer.style.display = "flex";
}

function clearPassword() {
    password1El.textContent = '';
    password2El.textContent = '';
    passwordsContainer.style.display = "none";

}
