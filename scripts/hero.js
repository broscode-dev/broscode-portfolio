const services = ["website", "web app", "design"];
const serviceElement = document.getElementById("service");
let index = 0;

function setHeroText() {
  serviceElement.classList.add("fade-out");
  setTimeout(() => {
    serviceElement.innerHTML = services[index] + "!";
    serviceElement.classList.remove("fade-out");
    serviceElement.classList.add("fade-in");
  }, 1000);
  // setInterval(() => {
  //   serviceElement.classList.add("fade-out");
  //   if (++i === services.length) i = 0;
  // }, 2000);
}
// setHeroText();

// function updateCarousel() {
//   logo.classList.add("fade-out");
//   setTimeout(() => {
//     logo.src = logos[index].path;
//     name.innerHTML = logos[index].name;
//     logo.classList.remove("fade-out");
//     logo.classList.add("fade-in");
//   }, 1000);
// }

setInterval(() => {
  index++;
  if (index >= services.length) {
    index = 0;
  }
  setHeroText();
}, 3000);

//Initialize the first service
serviceElement.innerHTML = services[index];
logo.classList.remove("opacity-0");
logo.classList.add("fade-in");
