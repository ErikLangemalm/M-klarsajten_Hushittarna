import contact from "/templates/contact.js"
import logIn from "/templates/logIn.js"
import index from "/templates/index.js"
import search from "/templates/search.js"

function router() {
  switch (window.location.hash) {
    case "":
      $("main").html(index());
      break

    case "#contact":
      $("main").html(contact());
      break

    case "#logIn":
      $("main").html(logIn())
      break
    case "#search":
      $("main").html(search())
      break;
    default:
      $("main").html("<h1>Sidan finns inte</h1>")
  }
}

window.onload = router()
window.onhashchange = router