document.addEventListener('DOMContentLoaded', function() {

    document.querySelector(".header__burger").addEventListener("click", function() {
        document.querySelector(".mobile-block").classList.add("active")
    })

    document.querySelector(".mobile-block__close").addEventListener("click", function() {
        document.querySelector(".mobile-block").classList.remove("active")
    })
})
