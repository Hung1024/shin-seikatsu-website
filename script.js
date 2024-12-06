let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    alert(`${product} has been added to your cart.`);
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    if (cartItemsContainer) {
        cartItemsContainer.innerHTML = '';
        cart.forEach(item => {
            cartItemsContainer.innerHTML += `<p>${item.product} - AED ${item.price}</p>`;
        });
    }
}
