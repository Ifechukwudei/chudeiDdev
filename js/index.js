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
  var header = document.getElementById("headerId")

  setTimeout(function () {
    // Hide the loading page
    loadingPage.style.opacity = "0"
    loadingPage.style.pointerEvents = "none"
    //loadingPage.style.display = "none"

    // Show the content and apply the transition effect
    header.classList.remove("hidden")
    header.classList.add("visible")
    // content.classList.add("visible")
    //content.style.display = "block"
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

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    // prevent the default click behavior
    event.preventDefault()

    // get the target element and its top position
    const target = document.querySelector(link.getAttribute("href"))
    const fixedNavHeight = document.getElementById("headerId").offsetHeight
    console.log(fixedNavHeight)
    const top =
      target.getBoundingClientRect().top + (window.pageYOffset - fixedNavHeight)

    // scroll to the target element smoothly
    target.scrollIntoView({
      top,
      behavior: "smooth",
      duration: 1000, // scroll duration in milliseconds
      easing: "easeInOutQuad", // easing function
    })
  })
})

/*const target = document.querySelector(link.getAttribute("href"))

target.scrollIntoView({
  behavior: "smooth",
  duration: 1000, // scroll duration in milliseconds
  easing: "easeInOutQuad", // easing function
})*/
const backToTopButton = document.getElementById("back-to-top-button")
const footer = document.getElementById("footer")

window.addEventListener("scroll", scrollFunction)

function scrollFunction() {
  const footerTop = footer.getBoundingClientRect().top
  if (window.pageYOffset > 300 && footerTop > window.innerHeight) {
    // Show back to top button if window is scrolled down 300px and footer is not in view
    if (!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit")
      backToTopButton.classList.add("btnEntrance")
      backToTopButton.style.display = "block"
    }
  } else {
    // Hide back to top button if window is not scrolled down 300px or footer is in view
    if (backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance")
      backToTopButton.classList.add("btnExit")
      setTimeout(function () {
        backToTopButton.style.display = "none"
      }, 250)
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop)

// function for smooth scroll back to top
function smoothScrollBackToTop() {
  const targetPosition = 0
  const startPosition = window.pageYOffset
  const distance = targetPosition - startPosition
  const duration = 750
  let start = null

  window.requestAnimationFrame(step)

  function step(timestamp) {
    if (!start) start = timestamp
    const progress = timestamp - start
    window.scrollTo(
      0,
      easeInOutCubic(progress, startPosition, distance, duration)
    )
    if (progress < duration) window.requestAnimationFrame(step)
  }
}

// function for scroll easing
function easeInOutCubic(t, b, c, d) {
  t /= d / 2
  if (t < 1) return (c / 2) * t * t * t + b
  t -= 2
  return (c / 2) * (t * t * t + 2) + b
}
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show")
      } else {
        entry.target.classList.remove("show")
      }
    })
  },
  { threshold: 0.3 }
)

const items = document.querySelectorAll(".hidden")
items.forEach((item) => observer.observe(item))
