export default function () {
  return `<h2>Sök</h2>
  <p>Använd sökfältet nedan för att söka:</p>
  <input type='text' id='searchInput' placeholder='Antal Rum'>
  <input type="text" id="propertyTypeInput" placeholder="Bostads Typ">
  <button onclick='searchHouses()'>Sök</button>
  <p id='searchResult'></p>`
}

