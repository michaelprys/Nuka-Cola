const brands = document.querySelector('#brands'),
    navLink = document.querySelectorAll('.nav__link');

navLink[1].addEventListener('click', () => {
    brands.scrollIntoView({
        alignToTop: true,
        behavior: 'smooth',
    });
});
