export const modals = () => {
    const handleModalClosing = (modalSelector, openSelector, closeSelector) => {
        const modal = document.querySelector(modalSelector);

        document.addEventListener('click', e => {
            const target = e.target;

            if (target === modal || target.closest(closeSelector)) {
                modal.setAttribute('closing', '');

                modal.addEventListener(
                    'animationend',
                    () => {
                        modal.removeAttribute('closing');
                        modal.close();
                    },
                    { once: true }
                );
            }
            if (target.closest(openSelector)) {
                modal.showModal();
            }
        });
    };

    // button
    const contactButton = document.createElement('button');
    const navItem = document.querySelector('.nav__item:last-child'),
        footerItem = document.querySelector('.footer__item:first-child');

    contactButton.setAttribute('class', 'modal-open-btn');
    contactButton.setAttribute('type', 'button');
    contactButton.textContent = 'Contact Us';

    navItem.append(contactButton);
    footerItem.append(contactButton.cloneNode(true));

    // function call
    handleModalClosing(
        '.modal-location',
        '.footer__location',
        '.modal-location__close-btn'
    );
    handleModalClosing(
        '.modal-contact',
        '.modal-open-btn',
        '.modal-contact__close-btn'
    );
};
