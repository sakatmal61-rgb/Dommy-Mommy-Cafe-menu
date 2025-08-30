async function loadHTML(id, url) {
  const res = await fetch(url);
  document.getElementById(id).innerHTML = await res.text();
}

loadHTML("header", "header.html");
loadHTML("menu", "menu.html");
loadHTML("secret", "secret-menu.html");
loadHTML("footer", "footer.html");

// Paste your existing JavaScript below this to handle menu items, modals, and password