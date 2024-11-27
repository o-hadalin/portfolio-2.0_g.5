const themeToggleHeader = document.querySelector(".header .header-toggle");
const themeToggleMobile = document.querySelector(".mob-nav .mobile-toggle");
const favicon = document.querySelector("link[rel='icon']");

const lightFavicon = "./img/favicon-light.svg";
const darkFavicon = "./img/favicon-dark.svg";

const currentTheme = localStorage.getItem("theme") || "light";

if (currentTheme === "dark") {
    document.body.classList.add("dark-theme");
    favicon.setAttribute("href", darkFavicon);
    themeToggleHeader.checked = true;
    themeToggleMobile.checked = true;
} else {
    document.body.classList.remove("dark-theme");
    favicon.setAttribute("href", lightFavicon);
    themeToggleHeader.checked = false;
    themeToggleMobile.checked = false;
}

themeToggleHeader.addEventListener("change", () => handleThemeToggle(themeToggleHeader));
themeToggleMobile.addEventListener("change", () => handleThemeToggle(themeToggleMobile));

function handleThemeToggle(toggle) {
    const isDark = toggle.checked;

    if (isDark) {
        document.body.classList.add("dark-theme");
        favicon.setAttribute("href", darkFavicon);
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.remove("dark-theme");
        favicon.setAttribute("href", lightFavicon);
        localStorage.setItem("theme", "light");
    }

    themeToggleHeader.checked = isDark;
    themeToggleMobile.checked = isDark;
}
