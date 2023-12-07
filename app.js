import contact from "./contact.js"
import logIn from "./logIn.js"
import index from "./index.js"

function router() {
  switch (window.location.hash) {
    case "":
      $("main").html(index())
      break

    case "#sida2":
      $("main").html(contact())
      break

    case "#sida3":
      $("main").html(logIn())
      break

    default:
      $("main").html("<h1>Sidan finns inte</h1>")
  }
}

window.onload = router()
window.onhashchange = router