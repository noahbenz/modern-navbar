// Get references to the necessary elements
const navbarToggle = document.getElementById("navbarToggle"); // The toggle button
const overlay = document.getElementById("overlay"); // The overlay menu
const navbar = document.getElementById('navbar') // The navigation bar

// Event listener for the navbar toggle button
navbarToggle.addEventListener("click", () => {
    // Check if the overlay menu is currently active
    if (overlay.classList.contains("active")) {
        overlay.classList.remove("active"); // Deactivate the overlay menu
    } else {
        overlay.classList.add("active"); // Activate the overlay menu
    }
});

// Event listener to close the overlay when clicking outside
document.addEventListener("click", (event) => {
    let target = event.target;
    while (target) {
        // Check if the click happened on the toggle button or the overlay
        if (target === navbarToggle || target === overlay) {
            return; // Click occurred within `navbarToggle` or `overlay`, so do nothing.
        }
        target = target.parentNode; // Move to the parent element and check again.
    }
    
    // Click happened outside `navbarToggle` and `overlay`, so remove the `active` class.
    overlay.classList.remove("active");
    navbarToggle.classList.remove("rotated");
});

// Event listener to rotate the navbar toggle button
navbarToggle.addEventListener("click", () => {
    // Check if the toggle button is already rotated
    if (navbarToggle.classList.contains("rotated")) {
        navbarToggle.classList.remove("rotated"); // Remove the rotation
    } else {
        navbarToggle.classList.add("rotated"); // Add rotation
    }
});
