const closeModal = (modal) => {

    let cancel = document.createElement('button');

    Object.assign(cancel, {
        className: 'cancel',
        type: 'reset',
        textContent: 'X',
        id: 'dialog-cancel'
    });

    // close modal on X/Cancel btn
    cancel.addEventListener('click', () => {
        modal.close()
    });

    return cancel
}

export { closeModal }