document.addEventListener("DOMContentLoaded", function() {

    const button = document.getElementById("button");
    const img = document.getElementById("img");

    button.addEventListener("click", event => {
        if (img.style.display === "none") {
            img.style.display = "block";
            button.textContent = "Hide";
        } else {
            img.style.display = "none";
            button.textContent = "Show";
        }
    });
});
