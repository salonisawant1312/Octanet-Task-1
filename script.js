// Cart array to store items
let cart = [];

// Function to display the current cart item count
function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

// Function to add items to the cart
function addToCart(productName, productPrice) {
    const product = {
        name: productName,
        price: productPrice
    };

    cart.push(product);
    updateCartCount();
    alert(`${productName} has been added to your cart!`);
}

// Function to view the cart (in a basic alert for now)
function viewCart() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
    } else {
        let cartDetails = 'Items in your cart:\n\n';
        let totalPrice = 0;

        cart.forEach((item, index) => {
            cartDetails += `${index + 1}. ${item.name} - $${item.price}\n`;
            totalPrice += item.price;
        });

        cartDetails += `\nTotal Price: $${totalPrice.toFixed(2)}`;
        alert(cartDetails);
    }
}

// Function to trigger the Shop Now button (just a placeholder)
function shopNow() {
    alert("Redirecting to the shop...");
    // In a real website, you'd add a redirect to the shop page like this:
    // window.location.href = 'shop.html';
}
