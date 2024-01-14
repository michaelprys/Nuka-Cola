const openModal = document.querySelector('.footer__location'),
    modalLocation = document.querySelector('.modal-location');

const handleModalClosing = e => {
    if (e.target === modalLocation) {
        modalLocation.setAttribute('closing', '');

        modalLocation.addEventListener(
            'animationend',
            () => {
                modalLocation.removeAttribute('closing');
                modalLocation.close();
            },
            { once: true }
        );
    }
};

openModal.addEventListener('click', () => {
    modalLocation.showModal();
});
modalLocation.addEventListener('click', handleModalClosing);
