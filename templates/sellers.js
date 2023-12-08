export default function () {
  return `
  <link rel="stylesheet" href="styles.css">
  <section>
    <h2>Varför välja Hushittarna?</h2>
    <p>Med Hushittarna får du:</p>
    <ul>
      <li>Professionell och personlig service</li>
      <li>Marknadsföring av hög kvalitet</li>
      <li>Maximal synlighet för din bostad</li>
      <li>Konkurrenskraftiga priser</li>
    </ul>
    <p>Vi är här för att göra försäljningen av din bostad smidig och framgångsrik. Kontakta oss nedan för att komma
      igång!</p>

    <h2>Kontakta oss</h2>
    <form id="contactForm">
      <label for="name">Namn:</label>
      <input type="text" id="name" name="name" required>

      <label for="email">E-postadress:</label>
      <input type="email" id="email" name="email" required>

      <label for="message">Meddelande:</label>
      <textarea id="message" name="message" rows="4" required></textarea>

      <button type="submit">Skicka meddelande</button>
    </form>
  </section>`
}