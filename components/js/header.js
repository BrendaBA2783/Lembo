// footer.js
document.addEventListener("DOMContentLoaded", function() {
    fetch("/components/header.html")
    .then(response => response.text())
    .then(data => {
        document.querySelector(".hero").innerHTML = data; 
    })
    .catch(error => console.error("Error cargando el hero:", error));
});