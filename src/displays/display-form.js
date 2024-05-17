import getLinks from "../get-links";
import { clearModal } from "./clear-content";
import displayAllProjects from "./display-all-projects";
import { closeModal } from "./modal-close";

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