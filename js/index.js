/*loding page
window.addEventListener("load", function () {
  // Hide the loading page after 15 seconds
  setTimeout(function () {
    var loadingPage = document.getElementById("loading-page")
    loadingPage.style.display = "none"

    // Show the content
    var content = document.getElementById("content")
    content.style.display = "block"

    var content = document.getElementById("content")
    content.classList.add("visible")
  }, 15000)
})*/
window.addEventListener("load", function () {
  // Show the loading page initially
  var loadingPage = document.getElementById("loading-page")
  var content = document.getElementById("content")

  setTimeout(function () {
    // Hide the loading page
    loadingPage.style.opacity = "0"
    loadingPage.style.pointerEvents = "none"

    // Show the content and apply the transition effect
    content.classList.add("visible")
    content.style.display = "block"
  }, 15000) // 15 seconds delay
})

//typing

window.addEventListener("DOMContentLoaded", function () {
  var textElement = document.getElementById("typing-text")
  var texts = [
    "Welcome to my portfolio!",
    "I am a web developer.",
    "I love coding and design.",
  ] // Array of texts to display
  var speed = 100 // Typing speed (in milliseconds)
  var delay = 2000 // Delay between texts (in milliseconds)

  var index = 0
  var textIndex = 0
  function type() {
    if (index < texts[textIndex].length) {
      textElement.textContent += texts[textIndex].charAt(index)
      index++
      setTimeout(type, speed)
    } else {
      setTimeout(erase, delay)
    }
  }

  function erase() {
    if (index > 0) {
      textElement.textContent = texts[textIndex].substring(0, index - 1)
      index--
      setTimeout(erase, speed)
    } else {
      textIndex++
      if (textIndex >= texts.length) {
        textIndex = 0
      }
      setTimeout(type, speed)
    }
  }

  type()
})
//transitions

window.addEventListener("scroll", function () {
  // Apply scrolling transition effect when content is in view
  var content = document.getElementById("content")
  var contentPosition = content.getBoundingClientRect().top

  if (contentPosition - window.innerHeight <= 0) {
    content.classList.add("visible")
  }
})
