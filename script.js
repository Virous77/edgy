const pricing = document.querySelector(".pricing-set");
const pricingButton = document.querySelector(".nav-pricing");
const about = document.querySelector(".about");
const aboutButton = document.querySelector(".about-button");
const contactButton = document.querySelector(".contact-button");
const contact = document.querySelector(".footer");
const closeBtn = document.querySelector(".btn-close");
const overlay = document.querySelector(".overlay");
const signUpButton = document.querySelector(".signup");
const signUpPage = document.querySelector(".signup-page");
const loginPage = document.querySelector(".login-page");
const login = document.querySelector(".login");
const closeBtn2 = document.querySelector(".btn-close2");
const blogButton = document.querySelector(".blog-button");
const section = document.querySelector(".partner");
const navSection = document.querySelector(".nav-section");

////

pricingButton.addEventListener("click", (e) => {
  e.preventDefault();
  pricing.scrollIntoView({ behavior: "smooth" });
});

aboutButton.addEventListener("click", (e) => {
  e.preventDefault();
  about.scrollIntoView({ behavior: "smooth" });
});

contactButton.addEventListener("click", (e) => {
  e.preventDefault();
  contact.scrollIntoView({ behavior: "smooth" });
});

signUpButton.addEventListener("click", () => {
  signUpPage.classList.remove("max");
  overlay.classList.remove("max");
});

closeBtn.addEventListener("click", () => {
  signUpPage.classList.add("max");
  overlay.classList.add("max");
});

overlay.addEventListener("click", () => {
  signUpPage.classList.add("max");
  overlay.classList.add("max");
  loginPage.classList.add("max");
});

login.addEventListener("click", () => {
  loginPage.classList.remove("max");
  overlay.classList.remove("max");
});

closeBtn2.addEventListener("click", () => {
  loginPage.classList.add("max");
  overlay.classList.add("max");
});

blogButton.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.assign("blog.html");
});

//////////////////////////////////////
const navbar = document.querySelector(".navbar");

const hoverBar = function (e) {
  if (e.target.classList.contains("nav-links")) {
    const link = e.target;
    const siblings = link.closest(".navbar").querySelectorAll(".nav-links");

    siblings.forEach((element) => {
      if (element !== link) element.style.opacity = this;
    });
  }
};

navbar.addEventListener("mouseover", hoverBar.bind(0.85));
navbar.addEventListener("mouseout", hoverBar.bind(1));
