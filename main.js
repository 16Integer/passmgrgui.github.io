$(function () {
  $(".menubar").load("menubar.html", function () {
    // Once loaded, show the menubar and the content
    $(".main").css("display", "block");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const downloadButton = document.getElementById("download_button");
  const userAgent = navigator.userAgent;

  downloadButton.addEventListener("click", function () {
    let downloadUrl =
      "https://github.com/passmgrgui/passmgr/raw/binaries/linux/passmgrgui.zip";

    if (userAgent.indexOf("Mac OS X") !== -1) {
      downloadUrl =
        "https://github.com/passmgrgui/passmgr/raw/binaries/macos/passmgrgui.zip";
    } else if (userAgent.indexOf("Windows") !== -1) {
      downloadUrl =
        "https://github.com/passmgrgui/passmgr/raw/binaries/windows/passmgrguisetup.exe";
    }

    window.location.href = downloadUrl;
  });
});
