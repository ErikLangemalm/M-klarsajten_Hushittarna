export default function () {
  return `<form id='logInForm' onsubmit='checkCredentials(event)'><label>Användarnamn:</label><br></br><input type='text' id='userName'></input><br></br><label>Lösenord:</label><br></br><input type='text' id='password'></input><br></br><br></br><input type='submit' value='Submit'></input></form>`
}