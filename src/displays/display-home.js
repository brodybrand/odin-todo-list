import displayAllProjects from "./display-all-projects";

const displayHome = () => {

    const content = document.querySelector('#content');
    
    // header
    let homeHeader = document.createElement('h1');
    homeHeader.textContent = 'Home'
    content.appendChild(homeHeader)

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