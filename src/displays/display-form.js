import projectForm from "../forms/project-form";
import todoForm from "../forms/todo-form";
import { closeModal } from "./modal-close";

const displayForm = (form) => {
    
    const content = document.querySelector('#content');

    let formModal = document.createElement('dialog');
    formModal.setAttribute('open', true);
    content.appendChild(formModal);

    let cancel = closeModal(formModal);
    formModal.appendChild(cancel);

    formModal.appendChild(form);
}

export { displayForm };