import fetchData from "../../app.js"

export default async function listAllHouses() {
  const jsonData = await fetchData();

  if (!jsonData) {
    console.error('No data available or invalid data format.');
    return "<p>Error loading listings.</p>";
  }

  let listingsContent = "<h2>Alla Annonsar</h2>";

  jsonData.forEach((house, index) => {
    listingsContent += `
      <div class="house-container box-style" onclick= showHouseDetails(${index}) data-house='${JSON.stringify(house)}'>
        <div class="house">
          <p class="address">${house.addres}</p>
          <p>${house.bostadsTyp} | ${house.boarea} Kvm | ${house.antalRum} Rum | ${house.utgångsPris} KR</p>
        </div>
      </div>
    `;
  });

  return listingsContent;
}
