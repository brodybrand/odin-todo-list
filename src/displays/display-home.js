import projects from "../data/projects";
import displayAllProjects from "./display-all-projects";
import displayForm from "./display-form";

const displayHome = () => {

    const content = document.querySelector('#content');
    
    // new project
    let newProjBtn = document.createElement('button')
    Object.assign(newProjBtn, {
        className: 'link',
        id: 'new-project-btn',
        textContent: 'New Project'
    });
    content.appendChild(newProjBtn);

    // new todo
    let newTodoBtn = document.createElement('button')
    Object.assign(newTodoBtn, {
        className: 'link',
        id: 'new-todo-btn',
        textContent: 'New Todo'
    });
    content.appendChild(newTodoBtn)


    // display projects
    displayAllProjects();
}

export default displayHome