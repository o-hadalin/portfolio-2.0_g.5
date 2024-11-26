const themeToggleHeader = document.querySelector(".header .header-toggle");
const themeToggleMobile = document.querySelector(".mob-nav .mobile-toggle");
const favicon = document.querySelector("link[rel='icon']");

const currentTheme = localStorage.getItem("theme") || "light";

function updateFavicon(isDark) {
    if (isDark) {
        favicon.href = "img/favicon-dark.svg";
    } else {
        favicon.href = "img/favicon-light.svg";
    }
}

if (currentTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeToggleHeader.checked = true;
    themeToggleMobile.checked = true;
    updateFavicon(true);
} else {
    document.body.classList.remove("dark-theme");
    themeToggleHeader.checked = false;
    themeToggleMobile.checked = false;
    updateFavicon(false);
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

    updateFavicon(isDark);
}