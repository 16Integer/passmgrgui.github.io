$(function () {
  $(".menubar").load("menubar.html");
});
// Hide the loading overlay when content is loaded
$(window).on("load", function () {
  $(".loading-overlay").fadeOut("slow");
});
