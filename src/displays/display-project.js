import projects from "../data/projects";
import { closeModal } from "./modal-close";

const displayProject = (projectName) => {
    // define target project and todos
    let project = projects.filter(project => project.name === projectName)[0]
    let todos = project.todoLists

    const content = document.querySelector('#content');

    // add modal to display individual project
    let projectModal = document.createElement('dialog');
    projectModal.setAttribute('open', true);

    let cancel = closeModal(projectModal);
    projectModal.appendChild(cancel);

    content.appendChild(projectModal)

    // wrapper for project todos
    let todosWrapper = document.createElement('div');
    todosWrapper.setAttribute('class', 'todos-wrapper');
    
    // add todo items to display
    for (let i in todos) {
        let currentTodo = todos[i];
        let todoWrapper = document.createElement('ul')
        todoWrapper.textContent = project.name

        todosWrapper.appendChild(todoWrapper)

        for (const [key, value] of Object.entries(currentTodo)) {
            let todoItem = document.createElement('li')
            todoItem.textContent = `${key}: ${value}`;

            todoWrapper.appendChild(todoItem)
        }
    // todo content to project modal
    projectModal.appendChild(todosWrapper)
    }
}

export { displayProject }