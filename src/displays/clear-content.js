const clearContent = () => {
    const content = document.querySelector('#content');
    content.innerHTML = '';
}

const clearProjects = () => {
    const projects = document.querySelector('.projects-wrapper');
    if (projects) {
        projects.remove();
    }
}

const clearModal = () => {
    const modal = document.querySelector('dialog')
    modal.remove()
}

export { clearContent, clearProjects, clearModal }