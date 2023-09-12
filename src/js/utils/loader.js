const loader = () => {
    window.addEventListener("load", () => {
        const loader = document.querySelector(".loader");
        const body = document.querySelector("body");

        loader.classList.add("loader-hidden");
        body.classList.remove("hidden")

        loader.addEventListener("transitionend", () => {
            document.body.removeChild("loader");
        })
    })
}

export default loader;