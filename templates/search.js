export default function () {
  return `<h2>Sök</h2><p>Använd sökfältet nedan för att söka:</p><input type='text' id='searchInput' placeholder='Skriv in din sökning'><button onclick='searchHouses()'>Sök</button><p id='searchResult'></p>`
}

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

async function fetchData() {
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