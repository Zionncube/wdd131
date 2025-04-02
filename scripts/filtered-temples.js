document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-button");
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


document.addEventListener("DOMContentLoaded", () => {
    const temples = [
        {
            name: "Salt Lake Temple",
            location: "Salt Lake City, Utah",
            dedication: "1893",
            area: "253,015 sq ft",
            image: "images/salt-lake-temple.jpg"
        },
        {
            name: "Rome Italy Temple",
            location: "Rome, Italy",
            dedication: "2019",
            area: "40,000 sq ft",
            image: "images/rome-temple.jpg"
        },
        {
            name: "Laie Hawaii Temple",
            location: "Laie, Hawaii",
            dedication: "1919",
            area: "42,000 sq ft",
            image: "images/laie-hawaii-temple.jpg"
        },
        {
            name: "Salt Lake Temple",
            location: "Salt Lake City, Utah",
            dedication: "1893",
            area: "253,015 sq ft",
            image: "images/salt-lake-temple.jpg"
        },
        {
            name: "Tokyo Japan Temple",
            location: "Tokyo, Japan",
            dedication: "1980",
            area: "52,590 sq ft",
            image: "images/tokyo-temple.jpg"
        },
        {
            name: "Boise Idaho Temple",
            location: "Boise, Idaho, USA",
            dedication: "1984",
            area: "35,868 sq ft",
            image: "images/boise-idaho-temple.jpg"
        },
        {
            name: "Dublin Ireland Temple",
            location: "Dublin, Ireland",
            dedication: "Announced",
            area: "TBA",
            image: "images/dublin-ireland-temple.jpg"
        },
        {
            name: "Apia Samoa Temple",
            location: "Apia Samoa",
            dedication: "2005",
            area: "18,691 sq ft",
            image: "images/apia-somoa-temple.jpg"
        },
    ];

    const templeContainer = document.getElementById("temple-container");
    const filterButtons = document.querySelectorAll(".filter-buttons button");

    function displayTemples(filteredTemples) {
        templeContainer.innerHTML = "";
        filteredTemples.forEach(temple => {
            const templeCard = document.createElement("div");
            templeCard.classList.add("temple-card");
            templeCard.innerHTML = `
                <img src="${temple.image}" alt="${temple.name}" loading="lazy">
                <h3>${temple.name}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedication}</p>
                <p><strong>Size:</strong> ${temple.area}</p>
            `;
            templeContainer.appendChild(templeCard);
        });
    }

    function filterTemples(criteria) {
        let filtered = temples;
        if (criteria === "old") {
            filtered = temples.filter(t => parseInt(t.dedication) < 1900);
        } else if (criteria === "new") {
            filtered = temples.filter(t => parseInt(t.dedication) > 2000);
        } else if (criteria === "large") {
            filtered = temples.filter(t => parseInt(t.area.replace(/\D/g, "")) > 90000);
        } else if (criteria === "small") {
            filtered = temples.filter(t => parseInt(t.area.replace(/\D/g, "")) < 10000);
        }
        displayTemples(filtered);
    }

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterTemples(button.getAttribute("data-filter"));
        });
    });

    displayTemples(temples);
});

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
