document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("open");
        if (menu.classList.contains("open")) {
            menu.style.display = "flex";
        } else {
            menu.style.display = "none";
        }
    });

    // Footer date
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;
});