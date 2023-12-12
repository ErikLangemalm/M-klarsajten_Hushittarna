import contact from "/templates/contact.js";
import logIn from "/templates/logIn.js";
import index1 from "/templates/index.js";
import search1 from "/templates/search.js";
import sellers from "/templates/sellers.js";
import listings from "/templates/listings.js";
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
//Den funktion funkar bara med antalRum
async function searchHouses() {
  // Get user input values
  const jsonData = await fetchData();
  console.log(Object.keys(jsonData))
  console.log(Object.values(jsonData))
  console.log(Object.entries(jsonData))

  if (!jsonData) {
    console.error('No data available.');
    return;
  }

  const searchInput = $('#searchInput').val().toLowerCase();
  console.log(searchInput)

  const house = jsonData.find(house => house.antalRum === parseInt(searchInput));
  console.log(house)
  //console.log(house["bostadsTyp"]);
  displayResults(house)
}

function displayResults(house) {
  var resultsContainer = document.getElementById('searchResult');
  resultsContainer.innerHTML = '';

  if (!house) {
    resultsContainer.innerHTML = '<p>No matching houses found.</p>';
    return;
  }

  if (Array.isArray(house)) {
    house.forEach(function (result) {
      var houseDetails = document.createElement('p');
      houseDetails.textContent = `House ID: ${result.id}, Type: ${result.bostadsTyp}, Address: ${result.addres}, Price: ${result.utgångsPris}, Rooms: ${result.antalRum}`;
      resultsContainer.appendChild(houseDetails);
    });
  } else {
    var houseDetails = document.createElement('p');
    houseDetails.textContent = `House ID: ${house.id}, Type: ${house.bostadsTyp}, Address: ${house.addres}, Price: ${house.utgångsPris}, Rooms: ${house.antalRum}`;
    resultsContainer.appendChild(houseDetails);
  }
}


/*---------------------SPA funktion----------------------*/
async function router() {
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
    //default:
    //$("main").html("<h1>Sidan finns inte</h1>")
  }
}

window.searchHouses = searchHouses
window.onload = router()
window.onhashchange = router


