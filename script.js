// Toggle menu on mobile
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Alert for "Shop Now" button
function showAlert() {
    alert("Redirecting to shop!");
}

// Show product details
function showProductDetails(productName) {
    alert(`Viewing details for ${productName}`);
}
