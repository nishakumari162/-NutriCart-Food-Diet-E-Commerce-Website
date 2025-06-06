// Load cart from localStorage or create a new one
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Select all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.product-card button');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const card = button.parentElement;
    const title = card.querySelector('h3').innerText;
    const image = card.querySelector('img').src;

    // Create cart item
    const cartItem = {
      title: title,
      image: image,
    };

    // Add item to cart
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Optional: Confirmation
    alert("${title} added to cart!");
  });
});

// Handle View My Orders button
const viewOrdersBtn = document.getElementById('viewOrdersBtn');
if (viewOrdersBtn) {
  viewOrdersBtn.addEventListener('click', () => {
    window.location.href = 'myorders.html';
  });
}

// Handle Order Now button
const orderNowBtn = document.getElementById('orderNowBtn');
if (orderNowBtn) {
  orderNowBtn.addEventListener('click', () => {
    window.location.href = 'order.html';
  });
}