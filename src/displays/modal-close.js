import getLinks from "../get-links";

const closeModal = (modal) => {

    let cancel = document.createElement('button');

    Object.assign(cancel, {
        className: 'cancel link',
        type: 'reset',
        textContent: 'X',
        id: 'dialog-cancel'
    });

    // close modal on X/Cancel btn
    cancel.addEventListener('click', () => {
        modal.close()
        getLinks();
    });

    return cancel
}

export { closeModal }