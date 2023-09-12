const translate = () => {
    let translate = document.querySelector('.translate');
    document.querySelector('.btn-translate svg').onclick = () => {
        translate.classList.toggle('active')
    }

    const btnTranslate = document.querySelector('.btn-translate svg');
    document.addEventListener('click', function (e) {
        if (!btnTranslate.contains(e.target) && !translate.contains(e.target)) {
            translate.classList.remove('active');
        }
    });
}

export default translate;