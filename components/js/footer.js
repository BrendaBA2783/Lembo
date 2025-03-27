// footer
document.addEventListener("DOMContentLoaded", function() {
    fetch("/components/footer.html")
    .then(response => response.text())
    .then(data => {
        document.querySelector(".footer").innerHTML = data; 
    })
    .catch(error => console.error("Error cargando el footer:", error));
});