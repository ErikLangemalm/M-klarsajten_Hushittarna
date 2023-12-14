import fetchData from "../../app.js"

export default function showHouseDetails(index) {
  //const detailsPage = window.open('', '_blank');

  // Fetch the details using the index or ID
  fetchData().then((jsonData) => {
    const houseDetails = jsonData[index];

    const detailsContainer = document.getElementById('content');
    detailsContainer.innerHTML = `
      <h2 class="house-container box-style">${houseDetails.bostadsTyp} - ${houseDetails.addres}</h2>
      <p class="house-container box-style">ID: ${houseDetails.id}</p>
      <p class="house-container box-style">Price: ${houseDetails.utgångsPris} KR</p>
      <p class="house-container box-style">Rooms: ${houseDetails.antalRum}</p>
      <p class="house-container box-style">Area: ${houseDetails.boarea} Kvm</p>
      <p class="house-container box-style">Outdoor Space: ${houseDetails.uteplats}</p>
      <p class="house-container box-style">Floor: ${houseDetails.våning}</p>
      <p class="house-container box-style">Elevator: ${houseDetails.hiss}</p>
      <p class="house-container box-style">Year Built: ${houseDetails.byggnadsÅr}</p>
      <p class="house-container box-style">Storage: ${houseDetails.förråd}</p>
      <p class="house-container box-style">Parking: ${houseDetails.parkering}</p>
      <p class="house-container box-style">Inner Yard: ${houseDetails.innerGård}</p>
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