$(function () {
  $(".menubar").load("menubar.html", function () {
    // Once loaded, show the menubar and the content
    $(".main").css("display", "block");
  });
});
