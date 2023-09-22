let path = window.location.pathname;
let fullPath = window.location.href;
let page = path.split("/").pop();

if (page.endsWith("index") || path.endsWith("//")) {
  window.location.replace("/");
}
if (page.endsWith(".html")) {
  window.location.replace(page.slice(0, -5));
}

if (fullPath.match(/#$/)) {
  var newURL = fullPath.replace(/#$/, "");
  window.location.replace(newURL);
}

fetch("menubar.html")
  .then(function (response) {
    return response.text();
  })
  .then(function (data) {
    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = data;

    let navElement = tempDiv.querySelector("nav");

    if (navElement) {
      document.body.prepend(navElement);
      document.querySelector(".main").style.display = "block";
    }
  })
  .catch(function (error) {
    console.error("Error fetching menubar.html:", error);
  });
