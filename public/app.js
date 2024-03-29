import contact from "/templates/contact.js";
import logIn from "/templates/logIn.js";
import index1 from "/templates/index.js";
import search1 from "/templates/search.js";
import sellers from "/templates/sellers.js";
import listings from "/templates/listings.js";
import maklarvy from "./templates/maklarvy.js";
console.log("This message shows the files are propperly linked");


/*---------------------------Funktioner för sökning-----------------------------------------*/
function generateListingsPage() {
  let listingsPage = "<h2>Fastighetsannonser</h2>";

  for (let i = 1; i <= 20; i++) {
    listingsPage += `<p><i class="fas fa-home listing-icon"></i>Hus ${i}</p>`;
  }

  return listingsPage;
}

function search() {
  const searchInput = $('#searchInput').val().toLowerCase();
  const searchResult = searchInput ? `Resultat för sökning: "${searchInput}"` : 'Ingen sökning angiven';
  $('#searchResult').text(searchResult);
}

export default async function fetchData() {
  try {
    const response = await fetch('http://localhost:3000/data'); // Adjust the URL based on your JSON server configuration
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
//New Search function, still WIP
async function searchHouses() {
  const jsonData = await fetchData();

  if (!jsonData) {
    console.error('No data available.');
    return;
  }

  const searchInput = $('#searchInput').val().toLowerCase();

  const houses = jsonData.filter(house => house.antalRum === parseInt(searchInput));

  displayResults(houses);
}

function displayResults(houses) {
  var resultsContainer = document.getElementById('searchResult');
  resultsContainer.innerHTML = '';

  if (houses.length === 0) {
    resultsContainer.innerHTML = '<p>No matching houses found.</p>';
    return;
  }

  houses.forEach(function (house) {
    var houseDetails = document.createElement('p');
    houseDetails.textContent = `House ID: ${house.id}, Type: ${house.bostadsTyp}, Addres: ${house.addres}, Price: ${house.utgångsPris}, Rooms: ${house.antalRum}`;
    resultsContainer.appendChild(houseDetails);
  });
}

/*---------------------log in funktion----------------------*/
export async function fetchUsers() {
  try {
    const response = await fetch('http://localhost:3000/users'); // Adjust the URL based on your JSON server configuration
    const jsonUsers = await response.json();
    return jsonUsers;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}


async function checkCredentials(event) {
  event.preventDefault()
  const userName = document.getElementById('userName').value
  const passWord = document.getElementById('password').value

  const users = await fetchUsers();

  const userData = users.find(u => u.userName === userName && u.passWord === passWord);

  if (!userData) {
    alert('Användaren hittades inte. Vänligen försök igen.');
    return null;
  } else {
    const isLoggedIn = true;
    sessionStorage.setItem('isLoggedIn', isLoggedIn);
    checkLoginState();
    $("#content").html(index1());
    console.log("You have been logged in. Have a nice day");
  }

}

function handleLogout() {
  sessionStorage.removeItem('isLoggedIn');
  $("#content").html(index1());
}

function checkLoginState() {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

  if (isLoggedIn) {
    $("#pre-log").hide();
    $("#post-log").show();
    $("#maklar").show()
    console.log("User is logged in");
  } else {
    $("#post-log").hide();
    $("#maklar").hide()
    $("#pre-log").show();
    console.log("User is not logged in");
  }
}
/*---------------------maklarvy funktion----------------------*/
// Antag att du har en array med förfrågningar för olika bostäder
function genQuestions() {
  var requestsData = [
    { id: 1, property: "Gatan 123", client: "John Doe", contact: "john@example.com" },
    { id: 2, property: "Gatan 456", client: "Jane Doe", contact: "jane@example.com" },
    // Lägg till fler förfrågningar enligt behov
  ];

  var requestsContainer = document.getElementById("requestsContainer");

  // Loopa igenom förfråningarna och skapa HTML-element för varje förfrågan
  requestsData.forEach(function (request) {
    var requestCard = document.createElement("div");
    requestCard.classList.add("request-card");
    requestCard.innerHTML = `
                <h3>Förfrågan #${request.id}</h3>
                <p><strong>Bostad:</strong> ${request.property}</p>
                <p><strong>Klient:</strong> ${request.client}</p>
                <p><strong>Kontakt:</strong> ${request.contact}</p>
            `;
    requestsContainer.appendChild(requestCard);
  });
}
/*---------------------SPA funktion----------------------*/
async function router() {
  checkLoginState();
  switch (window.location.hash) {
    case "#home":
      $("main").html(index1());
      break
    case "#contact":
      $("main").html(contact());
      break
    case "#logIn":
      $("main").html(logIn())
      break
    case "#search":
      $("main").html(search1())
      break;
    case "#listings":
      $("main").html(await listings());
      break;
    case "#maklarvy":
      $('main').html(maklarvy())
      genQuestions();
      break;
    //default:
    //$("main").html("<h1>Sidan finns inte</h1>")
  }
}


window.handleLogout = handleLogout
window.checkCredentials = checkCredentials;
window.searchHouses = searchHouses
window.onload = router()
window.onhashchange = router


