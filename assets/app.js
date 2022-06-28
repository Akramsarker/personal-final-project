const toggleBtn = document.querySelector("#toggle");

// All Selectors
const titleColor = document.querySelector(".title");
const aboutTitle = document.querySelector(".about-title");
const header = document.querySelector("#parallax");
const navigation = document.querySelector(".navigation");
const navbarToggler = document.querySelector(".navbar-toggler");
const about = document.querySelector(".about-area");
const work = document.querySelector(".work-area");
const contact = document.querySelector(".contact-area");
const technogies = document.querySelector(".technogies-area");
const footer = document.querySelector(".footer-widget");

// Toggle function
toggleBtn.addEventListener("change", () => {
  console.log("clicked");
  titleColor.classList.toggle("title-color");
  aboutTitle.classList.toggle("about-title-color");
  navigation.classList.toggle("dark");
  header.classList.toggle("dark");
  navbarToggler.classList.toggle("navbar-toggler-bg-color");
  about.classList.toggle("dark");
  work.classList.toggle("dark");
  contact.classList.toggle("dark");
  technogies.classList.toggle("dark");
  footer.classList.toggle("dark-light");
});
