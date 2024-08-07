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
window.addEventListener('load', function () {
  // Show the loading page initially
  var loadingPage = document.getElementById('loading-page');
  //var content = document.getElementById('content');
  var header = document.getElementById('headerId');

  setTimeout(function () {
    // Hide the loading page
    loadingPage.style.opacity = '0';
    loadingPage.style.pointerEvents = 'none';
    //loadingPage.style.display = "none"

    // Show the content and apply the transition effect
    header.classList.remove('hidden');
    header.classList.add('visible');
    // content.classList.add("visible")
    //content.style.display = "block"
  }, 15000); // 15 seconds delay
});

//typing

window.addEventListener('DOMContentLoaded', function () {
  var textElement = document.getElementById('typing-text');
  var texts = [
    '| Welcome to my portfolio!',
    '| I am a web developer.',
    '| I love coding and design.',
  ]; // Array of texts to display
  var speed = 100; // Typing speed (in milliseconds)
  var delay = 2000; // Delay between texts (in milliseconds)

  var index = 0;
  var textIndex = 0;
  function type() {
    if (index < texts[textIndex].length) {
      textElement.textContent += texts[textIndex].charAt(index);
      index++;
      setTimeout(type, speed);
    } else {
      setTimeout(erase, delay);
    }
  }

  function erase() {
    if (index > 1) {
      textElement.textContent = texts[textIndex].substring(0, index);
      index--;
      setTimeout(erase, speed);
    } else {
      textIndex++;
      if (textIndex >= texts.length) {
        textIndex = 0;
      }
      setTimeout(type, speed);
    }
  }

  type();
});

//transitions
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    // prevent the default click behavior
    event.preventDefault();

    // get the target element and its top position
    const target = document.querySelector(link.getAttribute('href'));
    const fixedNavHeight = document.getElementById('headerId').offsetHeight;

    const top =
      target.getBoundingClientRect().top + window.pageYOffset - fixedNavHeight;
    // scroll to the target element smoothly
    target.scrollIntoView({
      top,
      behavior: 'smooth',
      duration: 1000, // scroll duration in milliseconds
      easing: 'easeInOutQuad', // easing function
    });
  });
});

// get the header element
const header = document.getElementById('headerId');
const threshold = 200; // change this to the desired threshold in pixels
// initially show the the header
header.classList.add('show-header');

// detect when the user scrolls down and remove the show-header class if necessary
window.addEventListener('scroll', () => {
  if (window.pageYOffset > threshold) {
    header.classList.remove('remove-header');
  }
});

// initially hide the header
//header.classList.add("remove-header")

// detect when the mouse is hovering over the top of the page
document.addEventListener('mousemove', (event) => {
  if (event.clientY < 50) {
    // change 50 to the desired value for your page
    header.classList.remove('remove-header');
    header.classList.add('show-header');
  } else {
    header.classList.remove('show-header');
    header.classList.add('remove-header');
  }
});

// detect when the header is clicked and remove the show-header class
header.addEventListener('click', () => {
  header.classList.remove('show-header');
  header.classList.add('remove-header');
});

/*const target = document.querySelector(link.getAttribute("href"))

target.scrollIntoView({
  behavior: "smooth",
  duration: 1000, // scroll duration in milliseconds
  easing: "easeInOutQuad", // easing function
})*/
const backToTopButton = document.getElementById('back-to-top-button');
const footer = document.getElementById('footer');

window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
  const footerTop = footer.getBoundingClientRect().top;
  if (window.pageYOffset > 300 && footerTop > window.innerHeight) {
    // Show back to top button if window is scrolled down 300px and footer is not in view
    if (!backToTopButton.classList.contains('btnEntrance')) {
      backToTopButton.classList.remove('btnExit');
      backToTopButton.classList.add('btnEntrance');
      backToTopButton.style.display = 'block';
    }
  } else {
    // Hide back to top button if window is not scrolled down 300px or footer is in view
    if (backToTopButton.classList.contains('btnEntrance')) {
      backToTopButton.classList.remove('btnEntrance');
      backToTopButton.classList.add('btnExit');
      setTimeout(function () {
        backToTopButton.style.display = 'none';
      }, 250);
    }
  }
}

backToTopButton.addEventListener('click', smoothScrollBackToTop);

// function for smooth scroll back to top
function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;

  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(
      0,
      easeInOutCubic(progress, startPosition, distance, duration)
    );
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

// function for scroll easing
function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t + 2) + b;
}
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } /* else {
        entry.target.classList.remove('show');
      } */
    });
  },
  { threshold: 0.3 }
);

const items = document.querySelectorAll('.hidden');
items.forEach((item) => observer.observe(item));
/*email */
(function () {
  emailjs.init('xw2qxi_Kp80Gq3SCU');
})();

document
  .getElementById('contact-form')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // prevent the form from submitting

    // get the user's input
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // send the email using EmailJS
    emailjs
      .send('service_szcqjeo', 'template_semk4kc', {
        name: name,
        email: email,
        message: message,
      })
      .then(
        function (response) {
          console.log('SUCCESS', response);
          // document.querySelector('.success').style.display = 'block';
          // document.querySelector('.success').style.transform = 'translateY(0)';
          // name.value = '';
          // email.value = '';
          // message.value = '';
        },
        function (error) {
          console.log('FAILED', error);
          document.querySelector('.success').style.display = 'block';
          document.querySelector('.success').style.transform = 'translateY(0)';
          document.querySelector('.error').textContent = error.text;
        }
      );
  });
