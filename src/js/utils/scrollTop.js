const scrollTop = () => {
    window.addEventListener('scroll', function () {
        var scroll = document.querySelector('.scrollTop');
        scroll.classList.toggle("active", window.scrollY > 1000)
    })
}

export default scrollTop;