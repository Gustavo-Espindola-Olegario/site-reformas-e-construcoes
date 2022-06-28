let count = 1;
document.getElementById("radio1").checked = true;

setInterval ( function (){
    nextImage();
}, 5000)

function nextImage() {
    count++;
    if(count>4){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}

let mostra = true; 
let menu = document.querySelector(".menu");
let menuSecreto = menu.querySelector(".menu-secreto");

menuSecreto.addEventListener("click", () => {
    document.body.style.overflow = mostra ? "hidden" : "initial";
    menu.classList.toggle("on", mostra);
    mostra = !mostra;
})