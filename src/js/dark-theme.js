const themeToggle = document.querySelector("#toggle");
// const themeToggleMob = document.querySelector("#toggle-mob");

const currentTheme = localStorage.getItem("theme" || "light");

if (currentTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeToggle.checked = true;
    // themeToggleMob.checked = true;
} else {
    document.body.classList.remove("dark-theme");
    themeToggle.checked = false;
    // themeToggleMob.checked = false;
}

themeToggle.addEventListener("change", changeThemeToggle);
// themeToggleMob.addEventListener("change", changeThemeToggle);

function changeThemeToggle() {
    const isDark = themeToggle.checked;

    if (isDark) {
        document.body.classList.add("dark-theme");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.remove("dark-theme");
        localStorage.setItem("theme", "light");
    }

    themeToggle.checked = isDark;
    // themeToggleMob.checked = isDark;
}


