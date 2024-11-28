document.addEventListener("DOMContentLoaded", () => {
    const scrollBtn = document.getElementById("scrollToTopBtn");


    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            scrollBtn.classList.add("show")
        } else
            scrollBtn.classList.remove("show");
    })

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
})