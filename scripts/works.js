const alanis = ["./assets/works/services.png", "./assets/works/works.png", "./assets/works/contact.png","./assets/works/home.png"];
const alanisElement = document.getElementById("alanis");

const wallit = ["./assets/works/wallit2.png","./assets/works/wallit3.png", "./assets/works/wallit4.png","./assets/works/wallit5.png","./assets/works/wallit1.png"];
const wallitElement = document.getElementById("wallit");

const firewatch = ["./assets/works/firewatch2.png", "./assets/works/firewatch3.png", "./assets/works/firewatch4.png", "./assets/works/firewatch1.png"];
const firewatchElement = document.getElementById("firewatch");

const rps = ["./assets/works/rps2.png","./assets/works/rps3.png","./assets/works/rps4.png","./assets/works/rps5.png","./assets/works/rps1.png"];
const rpsElement = document.getElementById("rps");

function setWorkImage(images, element){
    let i = 0;
    setInterval(()=>{
            element.src = images[i];
            if(++i === images.length)
                i = 0;
        },2000);
}
setWorkImage(alanis, alanisElement);
setWorkImage(wallit, wallitElement);
setWorkImage(firewatch, firewatchElement);
setWorkImage(rps, rpsElement);