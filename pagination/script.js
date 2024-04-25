const vragen = document.querySelectorAll(".Vraag");
const values = document.querySelectorAll(".value");

let maxVragen = vragen.length -1;

let huidigevraag = 0;
values[huidigevraag].style.backgroundColor = "#4bb543";

vragen.forEach((vraag, indx) => {
vraag.style.transform = `translateX(${indx * 100}%)`;
})

const vorigeVraag = document.querySelector("#btn-prev");

vorigeVraag.addEventListener("click", function() {
    if (huidigeVraag > 0) {
        huidigeVraag--;
    }

    values [huidigeVraag+1].style.backgroundColor = "#ccc";

    vragen.forEach((vraag, indx) => {
        vraag.style.transform = `translateX(${100 * (indx - huidigeVraag)}%)`;
    });
});