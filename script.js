
// Get the theme button
const themeButton = document.getElementById("theme-toggle");

// Listen for button clicks
themeButton.addEventListener("click", function() {

    // Switch between dark and light mode
    document.body.classList.toggle("light-mode");

    // Check the current theme
    const lightModeOn =
        document.body.classList.contains("light-mode");

    // Update the button text
    themeButton.textContent =
        lightModeOn ? "Dark Mode" : "Light Mode";

});
