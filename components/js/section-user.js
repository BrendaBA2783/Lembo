// footer.js
document.addEventListener("DOMContentLoaded", function() {
    fetch("../components/section-user.html")
    .then(response => response.text())
    .then(data => {
        document.querySelector(".user").innerHTML = data; 
    })
    .catch(error => console.error("Error cargando el section-user:", error));
});