import getLinks from "../get-links";
import { clearModal } from "./clear-content";

const displayForm = (form) => {

    if (document.querySelector('dialog')) {
        clearModal();
    }
    
    const content = document.querySelector('#content');

    let formModal = document.createElement('dialog');
    formModal.setAttribute('open', true);
    content.appendChild(formModal);

    // let cancel = closeModal(formModal);
    let cancel = document.createElement('button')
    cancel.setAttribute('class', 'cancel link')
    cancel.textContent = 'X'
    formModal.appendChild(cancel);

    formModal.appendChild(form);

    getLinks();
}

export { displayForm };