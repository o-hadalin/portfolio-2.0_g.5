const themeToggleHeader = document.querySelector(".header .header-toggle");
const themeToggleMobile = document.querySelector(".mob-nav .mobile-toggle");

const currentTheme = localStorage.getItem("theme") || "light";

if (currentTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeToggleHeader.checked = true;
    themeToggleMobile.checked = true;
} else {
    document.body.classList.remove("dark-theme");
    themeToggleHeader.checked = false;
    themeToggleMobile.checked = false;
}

themeToggleHeader.addEventListener("change", () => handleThemeToggle(themeToggleHeader));
themeToggleMobile.addEventListener("change", () => handleThemeToggle(themeToggleMobile));

function handleThemeToggle(toggle) {
    const isDark = toggle.checked;

    if (isDark) {
        document.body.classList.add("dark-theme");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.remove("dark-theme");
        localStorage.setItem("theme", "light");
    }

    themeToggleHeader.checked = isDark;
    themeToggleMobile.checked = isDark;
}