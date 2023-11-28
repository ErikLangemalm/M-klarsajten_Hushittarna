const route = (even) => {
  even = even || window.even;
  even.prevenDefault();
  window.history.pushState({}, "", even.target.href);
  handleLocation();
}

const routes = {
  "/": "/homePage.html",
  "/maklare": "/maklare.html",
  "/contact": "/contact.html"
}

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("content").innerHTML = html;
}

window.onpopstate = handleLocation;
window.route = route

handleLocation();