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
