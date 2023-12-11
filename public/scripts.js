const pages = {
  home: "<h2>Välkommen till vår mäklarwebbplats!</h2><p>Vi hjälper dig hitta ditt drömhem.</p>",
  listings: generateListingsPage(),
  contact: "<h2>Kontakta oss</h2><p>Fyll i formuläret nedan för att kontakta oss:</p><form id='contactForm'><label for='name'>Namn:</label><input type='text' id='name' name='name' required><br><label for='email'>E-post:</label><input type='email' id='email' name='email' required><br><input type='submit' value='Skicka'></form>"
};


$(document).ready(function () {
  loadPage('home');
});

// Lägg till klickhanterare för länkarna
$(document).on('click', 'nav a', function (e) {
  e.preventDefault(); // Förhindra standard beteende för länkar
  const pageId = $(this).data('page'); // Hämta sidans ID från data-attribut
  loadPage(pageId);
});

// Ladda innehåll på sidan
function loadPage(page) {
  $('#content').html(pages[page]);
}

// Generera sidan med fastighetsannonser och ikoner
function generateListingsPage() {
  let listingsPage = "<h2>Fastighetsannonser</h2>";

  // Lägg till ikoner för 20 hus
  for (let i = 1; i <= 20; i++) {
    listingsPage += `<p><i class="fas fa-home listing-icon"></i>Hus ${i}</p>`;
  }

  return listingsPage;
}
