// current-year
const year = document.querySelector("#current-year");
year.innerHTML = `${new Date().getFullYear()}`;

//variables
let roverCats = document.querySelector("#roverCats");
let roverDogs = document.querySelector("#roverDogs");

let roverImg = document.querySelector("#rover-img");
let container = document.querySelector("#rover-main-container");
let imageContianer = document.querySelector(".rover-hero-container");

let imgeReplaceCat =
  "https://images.pexels.com/photos/2698519/pexels-photo-2698519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

let imgeReplaceDog =
  "https://images.pexels.com/photos/733416/pexels-photo-733416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

// Events Listener
// 1. replace to Cat
roverCats.addEventListener("click", () => {
  function replaceRecursively(element, from, to) {
    if (element.childNodes.length) {
      element.childNodes.forEach((child) =>
        replaceRecursively(child, from, to)
      );
    } else {
      const cont = element.textContent;
      if (cont) element.textContent = cont.replace(from, to);
    }
  }

  replaceRecursively(document.body, new RegExp("Dog"), "Cat");

  // image
  roverImg.src = `${imgeReplaceCat}`;

  imageContianer.style.cssText =
    " background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'); background-repeat: no-repeat;background-size: cover; background-position: center; min-height: 100vh;";
});

// 2. Replace to Dog
roverDogs.addEventListener("click", () => {
  function replaceRecursively(element, from, to) {
    if (element.childNodes.length) {
      element.childNodes.forEach((child) =>
        replaceRecursively(child, from, to)
      );
    } else {
      const cont = element.textContent;
      if (cont) element.textContent = cont.replace(from, to);
    }
  }

  replaceRecursively(document.body, new RegExp("Cat"), "Dog");

  // image
  roverImg.src = `${imgeReplaceDog}`;

  imageContianer.style.cssText =
    " background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/7975966/pexels-photo-7975966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'); background-repeat: no-repeat;background-size: cover; background-position: center; min-height: 100vh;";
});
