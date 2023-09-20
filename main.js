$.get("menubar.html", function (data) {
  // Append the loaded content to the #menu-container
  $("body").prepend(data);
  $(".main").css("display", "block");
});
