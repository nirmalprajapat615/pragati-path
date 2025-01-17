// script.js
document.addEventListener("DOMContentLoaded", () => {
    const contactSection = document.querySelector("#contact");

    contactSection.addEventListener("click", () => {
        alert("Thank you for visiting the Brahman Course website!");
    });
});
// Function to open a popup
function openPopup(popupId) {
    document.getElementById(popupId).style.display = "block";
}

// Function to close a popup
function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}
document.getElementById("share-button").addEventListener("click", function () {
    const icons = document.getElementById("social-icons");
    if (icons.classList.contains("hidden")) {
        icons.classList.remove("hidden");
    } else {
        icons.classList.add("hidden");
    }
});
AOS.init();
