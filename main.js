import './src/css/main.css';
import './src/css/decorations.css';
import './src/modules/slider';
import './src/modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    const routes = {
        '/': {
            linkLabel: 'Home',
            content: `I am in home page`,
        },
        '/discover': {
            linkLabel: 'Discover',
            content: `I am in discover page`,
        },
        '/about': {
            linkLabel: 'About',
            content: `I am in about page`,
        },
    };
});
