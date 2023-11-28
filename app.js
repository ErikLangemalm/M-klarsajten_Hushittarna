const route = async (event) => {
  event.preventDefault();
  const target = event.target;
  const href = target.getAttribute('href');
  window.history.pushState({}, "", href);
  await handleLocation();
};

const routes = {
  "/": "homePage.html",
  "/maklare": "maklare.html",
  "/contact": "contact.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const routePath = routes[path];

  if (routePath) {
    try {
      const html = await fetch(routePath);
      const text = await html.text();
      document.getElementById("content").innerHTML = text;
    } catch (error) {
      console.error("Error loading content:", error);
    }
  } else {
    console.error("Route not found:", path);
  }
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();