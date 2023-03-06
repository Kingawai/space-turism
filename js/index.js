const burger = document.querySelector(".burger");
const nav = document.querySelector(".header__nav");
console.log(burger);
burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});
