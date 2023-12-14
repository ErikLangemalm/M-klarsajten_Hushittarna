// Fetch property listings from JSON server
/* Test version, saving just to remember
 fetch('https://your-json-server-url.com/propertyListings')
  .then(response => response.json())
  .then(propertyListings => {
    displayListings(propertyListings); // Initial display

    // Event listener for search criteria changes
    document.getElementById('bostadsTyp').addEventListener('change', updateListings);
    document.getElementById('antalRum').addEventListener('change', updateListings);

    function updateListings() {
      const bostadsTyp = document.getElementById('bostadsTyp').value;
      const antalRum = document.getElementById('antalRum').value;

      // Filter property listings based on search criteria
      const filteredListings = propertyListings.filter(listing => {
        if (bostadsTyp !== 'all' && listing.type !== bostadsTyp) {
          return false;
        }
        if (antalRum !== 'all' && listing.antalRum !== parseInt(antalRum)) {
          return false;
        }
        return true;
      });

      // Sort filtered listings by a specific property (e.g., id)
      filteredListings.sort((a, b) => a.id.localeCompare(b.id));

      displayListings(filteredListings); // Display filtered and sorted listings
    }

    function displayListings(listings) {
      const propertyListingsContainer = document.getElementById('propertyListings');

      // Clear existing listings
      propertyListingsContainer.innerHTML = '';

      // Create HTML elements for each listing and append them to the container
      listings.forEach(listing => {
        const listingElement = document.createElement('div');
        listingElement.innerHTML = `<h3>${listing.id}</h3><p>Bostads Typ: ${listing.bostadsTyp}</p><p>Rum: ${listing.antalRum}</p>`;
        propertyListingsContainer.appendChild(listingElement);
      });
    }
  }); */