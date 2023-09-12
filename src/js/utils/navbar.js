const nav = () => {
    let nav = document.querySelector('.navbar-link');
    document.querySelector('.toggle').onclick = () => {
        nav.classList.toggle('active')
    };

    const toggle = document.querySelector('.toggle');
    document.addEventListener('click', function (e) {
        if (!toggle.contains(e.target) && !nav.contains(e.target)) {
            nav.classList.remove('active');
        }
    });

    window.addEventListener("scroll", function () {
        var nav = document.querySelector(".navbar");
        nav.classList.toggle("active", window.scrollY > 0);
    });
}

export default nav;