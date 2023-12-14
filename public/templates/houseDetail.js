import fetchData from "../../app.js"

export default function showHouseDetails(index) {
  //const detailsPage = window.open('', '_blank');

  // Fetch the details using the index or ID
  fetchData().then((jsonData) => {
    const houseDetails = jsonData[index];
    const detailsContainer = document.getElementById('content');
    detailsContainer.innerHTML = `
      <h2 class="house-container">${houseDetails.bostadsTyp} - ${houseDetails.addres}</h2>
      <p class="house-container">Pris: ${houseDetails.utgångsPris} KR</p>
      <p class="house-container">Antal Rum: ${houseDetails.antalRum}</p>
      <p class="house-container">BoArea: ${houseDetails.boarea} Kvm</p>
      <p class="house-container">Uteplats: ${houseDetails.uteplats}</p>
      <p class="house-container">Våning: ${houseDetails.våning}</p>
      <p class="house-container">Hiss: ${houseDetails.hiss}</p>
      <p class="house-container">Bygg År: ${houseDetails.byggnadsÅr}</p>
      <p class="house-container">Förråd: ${houseDetails.förråd}</p>
      <p class="house-container">Parkering: ${houseDetails.parkering}</p>
      <p class="house-container">InneGård: ${houseDetails.innerGård}</p>
    `;

    /*detailsPage.document.write(`
      <html>
      <head>
        <title>${houseDetails.bostadsTyp} Details</title>
      </head>
      <body>
        ${detailsContainer.outerHTML}
      </body>
      </html>
    `);*/
  });
}