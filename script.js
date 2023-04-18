const languageSelect = document.getElementById("language");
const themeSlider = document.getElementById("theme");

languageSelect.addEventListener("change", () => {
const selectedLanguage = languageSelect.value;
// Load language-specific content based on selected language
});

themeSlider.addEventListener("input", () => {
const themeValue = themeSlider.value;
document.body.setAttribute("data-theme", themeValue === "1" ? "default" : themeValue === "2" ? "light" : "dark");
});