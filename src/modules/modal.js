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
    // document.body.style.overflow = '';
};

openModal.addEventListener('click', () => {
    modalLocation.showModal();
    // document.body.style.overflow = 'hidden';
});
modalLocation.addEventListener('click', handleModalClosing);
