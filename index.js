const blogButton = document.querySelector(".blog-button");
const blogLogo = document.querySelector(".blog-logo");

blogLogo.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.assign("index.html");
});

/////////////////////////////////
const closeBtn = document.querySelector(".btn-close");
const overlay = document.querySelector(".overlay");
const signUpButton = document.querySelector(".signup");
const signUpPage = document.querySelector(".signup-page");
const loginPage = document.querySelector(".login-page");
const login = document.querySelector(".login");
const closeBtn2 = document.querySelector(".btn-close2");

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
