import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        type: 'loop',
        // autoplay: true,
        arrows: false,
        gap: '1.5em',
        padding: { left: '4rem', right: '4rem' },
    });
    splide.mount();
});
