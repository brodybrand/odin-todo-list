import projects from "../data/projects";
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
    for (let project in projects) {
        let currentProject = projects[project];

        let projectDiv = document.createElement('div');
        projectDiv.setAttribute('class', 'project link');
        projectDiv.setAttribute('id', currentProject.name);
        projectDiv.textContent = currentProject.name;

        content.appendChild(projectDiv);

        // display todos
        // for (let todo in currentProject.todoLists) {
        //     let currentTodo = currentProject.todoLists[todo];

        //     let todoDiv = document.createElement('div');
        //     todoDiv.setAttribute('class', 'todo');

        //     projectDiv.appendChild(todoDiv);

        //     for (let todoItem in currentTodo) {
        //         let currentTodoItem = currentTodo[todoItem];

        //         let todoItemDiv = document.createElement('div');
        //         todoItemDiv.setAttribute('class', currentTodoItem)
        //         todoItemDiv.textContent = currentTodoItem;

        //         todoDiv.appendChild(todoItemDiv)
        //     }
        // }
    }
}

export default displayHome