document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("productName");

    // Product Array
    const products = [
        { id: "p1", name: "Product A" },
        { id: "p2", name: "Product B" },
        { id: "p3", name: "Product C" },
        { id: "p4", name: "Product D" }
    ];

    // Populate the select element
    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Display the current review count when the page loads
document.addEventListener("DOMContentLoaded", () => {
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    const counterDisplay = document.getElementById("reviewCounter");
    if (counterDisplay) {
        counterDisplay.textContent = reviewCount;
    }
});

// Increment and store review count on form submission
document.querySelector("form").addEventListener("submit", () => {
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);
});


    // Display last modified date
    document.getElementById("lastModified").textContent = document.lastModified;
});
