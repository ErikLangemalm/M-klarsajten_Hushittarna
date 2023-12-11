import users from './users.json' assert {type: 'json'}
const users1 = fs.readFileSync('users.json');
const users = JSON.parse(users1);


function checkCredentials(event) {
  event.preventDefault()
  const userName = document.getElementById('userName').value
  const passWord = document.getElementById('password').value

  const userData = users.find(u => u.userName === userName && u.password === passWord);

  if (!userData) {
    console.log('Användaren hittades inte. Vänligen försök igen.');
    return null;
  } else {
    alert("ditt användarnamn är: " + userName)
  }

}

window.checkCredentials = checkCredentials;