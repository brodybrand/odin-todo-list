import { getProjects } from "../data/get-projects";
import projects from "../data/projects";
import { loadProjects } from "../data/storage";
import getLinks from "../get-links";
import { clearModal } from "./clear-content";
import { closeModal } from "./modal-close";

const displayProject = (projectName) => {
    const projects = loadProjects();
    // define target project and todos
    let project = projects.filter(project => project.name === projectName)[0]
    // let todos = project.todoLists

    const content = document.querySelector('#content');

    // add modal to display individual project
    let projectModal = document.createElement('dialog');
    projectModal.setAttribute('open', true);
    content.appendChild(projectModal)

    let cancel = document.createElement('button')
    cancel.setAttribute('class', 'cancel link')
    cancel.textContent = 'X'
    projectModal.appendChild(cancel);
    
    // project header
    let projectHeader = document.createElement('h2');
    projectHeader.textContent = project.name;
    projectModal.appendChild(projectHeader)

    // project desc
    let projectDesc = document.createElement('div');
    projectDesc.setAttribute('class', 'project-desc');
    projectDesc.textContent = `Desc: ${project.description}`
    projectModal.appendChild(projectDesc);


    // wrapper for project todos
    let todosWrapper = document.createElement('div');
    todosWrapper.setAttribute('class', 'todos-wrapper');
    
    // add todo items to display
    // for (let i in todos) {
    //     let currentTodo = todos[i];
    //     let todoWrapper = document.createElement('ul')
    //     todoWrapper.textContent = project.name

    //     todosWrapper.appendChild(todoWrapper)

    //     for (const [key, value] of Object.entries(currentTodo)) {
    //         let todoItem = document.createElement('li')
    //         todoItem.textContent = `${key}: ${value}`;

    //         todoWrapper.appendChild(todoItem)
    //     }
    // todo content to project modal
    projectModal.appendChild(todosWrapper)

    // delete project
    let deleteProject = document.createElement('button');
    Object.assign(deleteProject, {
        id: project.name,
        className: 'delete-project link',
        textContent: 'Delete Project'
    });
    projectModal.appendChild(deleteProject);

    getLinks();
    // }
}

export { displayProject }