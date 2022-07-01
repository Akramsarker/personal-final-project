const toggleBtn = document.querySelector("#toggle");

// All Selectors
const shapNone = document.querySelector(".shape-seven");
const titleColor = document.querySelector(".title");
const aboutTitle = document.querySelector(".about-title");
const header = document.querySelector("#parallax");
const navigation = document.querySelector(".navigation");
const navbarTogglerIcon1 = document.querySelector(".toggler-icon:nth-child(1)");
const navbarTogglerIcon2 = document.querySelector(".toggler-icon:nth-child(2)");
const navbarTogglerIcon3 = document.querySelector(".toggler-icon:nth-child(3)");

const about = document.querySelector(".about-area");
const work = document.querySelector(".work-area");
const contact = document.querySelector(".contact-area");
const technogies = document.querySelector(".technogies-area");
const footer = document.querySelector(".footer-widget");

// Toggle function
toggleBtn.addEventListener("change", () => {
  console.log("clicked");
  shapNone.classList.toggle("shape-none");
  titleColor.classList.toggle("title-color");
  aboutTitle.classList.toggle("about-title-color");
  navigation.classList.toggle("dark");
  header.classList.toggle("dark");
  navbarTogglerIcon1.classList.toggle("toggler-icon-bg-one");
  navbarTogglerIcon2.classList.toggle("toggler-icon-bg-two");
  navbarTogglerIcon3.classList.toggle("toggler-icon-bg-three");
  about.classList.toggle("dark");
  work.classList.toggle("dark");
  contact.classList.toggle("dark");
  technogies.classList.toggle("dark");
  footer.classList.toggle("dark-light");
});
