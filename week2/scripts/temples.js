body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
}

header {
    background: #333;
    color: white;
    padding: 1rem;
    text-align: center;
}

nav {
    display: flex;
    justify-content: center;
    background: #444;
    padding: 10px;
}

nav ul {
    list-style: none;
    padding: 0;
    display: flex;
}

nav li {
    margin: 0 10px;
}

nav a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
}

nav a.active {
    font-weight: bold;
    border-bottom: 2px solid white;
}

.filter-buttons {
    text-align: center;
    margin: 20px 0;
}

.filter-buttons button {
    padding: 10px 15px;
    margin: 5px;
    border: none;
    background: #007bff;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}

.filter-buttons button:hover {
    background: #0056b3;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
}

.temple-card {
    background: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.temple-card img {
    width: 100%;
    height: auto;
    border-radius: 5px;
}

.temple-card h3 {
    margin: 10px 0;
}

footer {
    text-align: center;
    padding: 1rem;
    background: #333;
    color: white;
}
