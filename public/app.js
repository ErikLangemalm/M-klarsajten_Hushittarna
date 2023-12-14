import contact from "/templates/contact.js"
import logIn from "/templates/logIn.js"
import index from "/templates/index.js"
import search1 from "/templates/search.js"
import sellers from "/templates/sellers.js"
import listings from "/templates/listings.js"

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


/*---------------------SPA funktion----------------------*/
async function router() {
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
      $("main").html(search1())
      break;
    case "#listings":
      $("main").html(await listings());
    //default:
    //$("main").html("<h1>Sidan finns inte</h1>")
  }
}

window.searchHouses = searchHouses
window.onload = router()
window.onhashchange = router


