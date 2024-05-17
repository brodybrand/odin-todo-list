const clearContent = () => {
    const content = document.querySelector('#content')

    content.innerHTML = '';
}

const clearProjects = () => {
    const projects = document.querySelector('.projects-wrapper');
    // if (projects.innerHTML) {
    //     projects.innerHTML = '';
    // }
}

const clearModal = () => {
    const modal = document.querySelector('dialog')
    modal.remove()
}

export { clearContent, clearProjects, clearModal }