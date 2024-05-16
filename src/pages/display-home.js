import projects from "../data/projects";

const displayHome = () => {

    const content = document.querySelector('#content');

    for (let project in projects) {
        let currentProject = projects[project];
        console.log(currentProject);

        let projectDiv = document.createElement('div');
        projectDiv.setAttribute('class', 'project');
        projectDiv.setAttribute('id', currentProject.name);
        projectDiv.textContent = currentProject.name;

        content.appendChild(projectDiv);

        for (let todo in currentProject.todoLists) {
            let currentTodo = currentProject.todoLists[todo];
            console.log(currentTodo);

            let todoDiv = document.createElement('div');
            todoDiv.setAttribute('class', 'todo');

            projectDiv.appendChild(todoDiv);

            for (let todoItem in currentTodo) {
                let currentTodoItem = currentTodo[todoItem];
                console.log(currentTodoItem)

                let todoItemDiv = document.createElement('div');
                todoItemDiv.setAttribute('class', currentTodoItem)
                todoItemDiv.textContent = currentTodoItem;

                todoDiv.appendChild(todoItemDiv)
            }

        }
    }
}

export default displayHome