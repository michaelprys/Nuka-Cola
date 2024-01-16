import './src/css/main.css';
import './src/css/decorations.css';
import { modals } from './src/modules/modal';
import { splide } from './src/modules/slider';
import { timer } from './src/modules/timer';

window.addEventListener('DOMContentLoaded', () => {
    modals();
    timer('.splide__timer', '2026-02-23');
    splide.mount();
});
