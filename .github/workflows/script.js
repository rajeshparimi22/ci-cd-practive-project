
let products = [];
let cart = [];

async function loadProducts() {
    try {
        const response = await fetch("products.json");

        if (!response.ok) {
            throw new Error("Failed to load products");
        }

        products = await response.json();

        displayProducts();
    } catch (error) {
        document.getElementById("products").textContent =
            "Unable to load products.";
        console.error(error);
    }
}

function displayProducts() {
    const container = document.getElementById("products");

    container.innerHTML = products.map(product => `
        <div class="product">
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <h4>Price: ₹${product.price}</h4>
            <button onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        </div>
    `).join("");
}

function addToCart(id) {
    const product = products.find(item => item.id === id);

    if (product) {
        cart.push(product);
        displayCart();
    }
}

function displayCart() {
    const cartContainer = document.getElementById("cart");

    cartContainer.innerHTML = cart.map(item =>
        `<p>${item.name} - ₹${item.price}</p>`
    ).join("");

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    document.getElementById("total").textContent = total;
    document.getElementById("cart-count").textContent = cart.length;
}

loadProducts();

