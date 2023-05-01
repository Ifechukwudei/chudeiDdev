window.addEventListener("load", function () {
  // Hide the loading page after 15 seconds
  setTimeout(function () {
    var loadingPage = document.getElementById("loading-page")
    loadingPage.style.display = "none"

    // Show the content
    var content = document.getElementById("content")
    content.style.display = "block"
  }, 15000)
})
