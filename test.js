import users from './users.json' assert {type: 'json'}

function checkCredentials(event) {
  event.preventDefault()
  const userName = document.getElementById('userName').value
  alert("ditt användarnamn är: " + userName)
  console.log(users.userName);
}

window.checkCredentials = checkCredentials;