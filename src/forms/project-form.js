import getLinks from "../get-links";

const projectForm = () => {

    let form = document.createElement('form');
    Object.assign(form, {
        id: 'project',
        className: 'project-form',
        method: 'post'
    });

    // project name
    let nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    form.appendChild(nameLabel);
    
    let projectName = document.createElement('input');
    Object.assign(projectName, {
        id: 'name',
        input: 'text',
        placeholder: 'New Project'
    });
    form.appendChild(projectName);

    // project desc
    let descLabel = document.createElement('label');
    descLabel.setAttribute('for', 'desc')

    let projectDesc = document.createElement('textarea');
    Object.assign(projectDesc, {
        id: 'desc',
        placeholder: 'New Project',
        rows: 5,
        cols: 33
    });
    form.appendChild(projectDesc);

    // submit 
    let submit = document.createElement('button');
    Object.assign(submit, {
        id: 'project',
        className: 'project-submit link',
        textContent: 'Submit'
    })
    // submit.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     const newProject = projectCreator(
    //         projectName.value, 
    //         projectDesc.value
    //     );

    //     let projects = getProjects();
    //     projects.push(newProject)
    //     saveProjects();
    //     closeModal()
    // })

    form.appendChild(submit);

    getLinks();

    return form;
}

const getProjectValues = () => {
    let form = document.querySelector('.project-form')

    let projectName = form.querySelector('#name').value;
    let projectDesc = form.querySelector('#desc').value;

    return {name: projectName, desc: projectDesc}
}

export { projectForm, getProjectValues} ;