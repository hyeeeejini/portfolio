


document.addEventListener("DOMContentLoaded", () => {
    const mainImg = document.querySelector('.main');
    const footer = document.querySelector('footer');

    window.addEventListener('scroll', () => {
        const mainHeight = mainImg.offsetHeight + 100;

        const footerTop = footer.getBoundingClientRect().top;

        if (footerTop <= mainHeight) {
            mainImg.classList.add('stop');
        } else {
            mainImg.classList.remove('stop');
        }
    });
});