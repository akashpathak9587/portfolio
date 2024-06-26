// setTimeout(() => {
//     document.querySelector("header").classList.add("activ");
// }, 100);


document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            document.querySelector("header").classList.add("active");
        } else {
            document.querySelector("header").classList.remove("active");
        }
    })
    if (window.innerWidth > 768) {
        document.querySelector("#hero").classList.add("active");
    } else {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                document.querySelector("#hero").classList.add("active");
            }
        })
    }
})