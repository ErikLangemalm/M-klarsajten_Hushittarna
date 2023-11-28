// app.js

// Fetch data from the JSON file
fetch('database.json')
  .then(response => response.json())
  .then(data => {
    // Handle the retrieved data
    console.log(data); // Display the data in the console for testing

    // Render the data on the webpage
    const propertyListContainer = document.querySelector('.property-list');

    data.forEach(property => {
      const propertyItem = createPropertyItem(property);
      propertyListContainer.appendChild(propertyItem);
    });

    // Search functionality
    const searchForm = document.querySelector('#search-form');
    const searchInput = document.querySelector('#search-input');

    searchForm.addEventListener('submit', e => {
      e.preventDefault();

      const searchTerm = searchInput.value.trim().toLowerCase();

      const filteredProperties = data.filter(property =>
        property.title.toLowerCase().includes(searchTerm) ||
        property.description.toLowerCase().includes(searchTerm)
      );

      propertyListContainer.innerHTML = '';

      filteredProperties.forEach(property => {
        const propertyItem = createPropertyItem(property);
        propertyListContainer.appendChild(propertyItem);
      });
    });
  })
  .catch(error => {
    console.error('Error fetching data from JSON:', error);
  });

// Function to create property list item
function createPropertyItem(property) {
  const propertyItem = document.createElement('div');
  propertyItem.classList.add('property');

  const propertyTitle = document.createElement('h3');
  propertyTitle.textContent = property.title;

  const propertyDescription = document.createElement('p');
  propertyDescription.textContent = property.description;

  propertyItem.appendChild(propertyTitle);
  propertyItem.appendChild(propertyDescription);

  return propertyItem;
}