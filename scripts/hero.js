const services = ["web app", "design", "website"];
const serviceElement = document.getElementById("service");
function setHeroText() {
  let i = 0;
  setInterval(() => {
    serviceElement.innerHTML = services[i] + "!";
    if (++i === services.length) i = 0;
  }, 2000);
}
setHeroText();