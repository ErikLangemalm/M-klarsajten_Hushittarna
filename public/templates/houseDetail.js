import fetchData from "../../app.js"

export default function showHouseDetails(index) {
  //const detailsPage = window.open('', '_blank');

  // Fetch the details using the index or ID
  fetchData().then((jsonData) => {
    const houseDetails = jsonData[index];

    const detailsContainer = document.getElementById('content');
    detailsContainer.innerHTML = `
      <h2>${houseDetails.bostadsTyp} - ${houseDetails.addres}</h2>
      <p>ID: ${houseDetails.id}</p>
      <p>Price: ${houseDetails.utgångsPris} KR</p>
      <p>Rooms: ${houseDetails.antalRum}</p>
      <p">Area: ${houseDetails.boarea} Kvm</p>
      <p">Outdoor Space: ${houseDetails.uteplats}</p>
      <p">Floor: ${houseDetails.våning}</p>
      <p">Elevator: ${houseDetails.hiss}</p>
      <p">Year Built: ${houseDetails.byggnadsÅr}</p>
      <p">Storage: ${houseDetails.förråd}</p>
      <p">Parking: ${houseDetails.parkering}</p>
      <p">Inner Yard: ${houseDetails.innerGård}</p>
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