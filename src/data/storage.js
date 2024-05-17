import { projectCreator } from "../constructors/project";
import { todoCreator } from "../constructors/todo";
import { getProjectValues } from "../forms/project-form";
import { getTodoValues } from "../forms/todo-form";

let projects = [
    {name: 'test 1', description: 'desc test 1'},
    {name: 'test 2', description: 'desc test 2'},
    {name: 'test 3', description: 'desc test 3'}
]

let todos = [
    {
        project: 'test 1',
        title: 'todo title 1',
        description: 'todo description 1',
        dueDate: '2024-03-06',
        priority: 1,
        completion: 1
    },
    {
        project: 'test 2',
        title: 'todo title 2',
        description: 'todo description 2',
        dueDate: '2024-03-06',
        priority: 2,
        completion: 0
    },
    {
        project: 'test 3',
        title: 'todo title 3',
        description: 'todo description 3',
        dueDate: '2024-03-06',
        priority: 3,
        completion: 0
    }
]

const saveProject = () => {
    const name = getProjectValues().name
    const desc = getProjectValues().desc
    const newProject = projectCreator(name, desc)
    projects.push(newProject)
}

const loadProjects = () => {
    for (let i=0; i<projects.length; i++) {
        let currentProject = projects[i];
        localStorage.setItem(`project__${i}`, JSON.stringify(currentProject));
    }
    return projects;
}

const deleteProject = (targetName) => {
    let targetProject = projects.filter(proj => proj.name === targetName)[0];
    let index = projects.indexOf(targetProject);
    projects = [...projects.slice(0, index), ...projects.slice(index+1)]
}

const saveTodo = () => {
    const project = getTodoValues().project;
    const title = getTodoValues().title;
    const description = getTodoValues().description;
    const dueDate = getTodoValues().dueDate;
    const priority = getTodoValues().priority;
    const completion = getTodoValues().completion;

    const newTodo = todoCreator(project, title, description, dueDate, priority, completion)
    todos.push(newTodo)
};

const loadTodos = () => {
    for (let i=0; i<todos.length; i++) {
        let currentTodo = todos[i];
        localStorage.setItem(`todo__${i}`, JSON.stringify(currentTodo));
    }
    return todos;
};

const deleteTodo = (targetName) => {
    let targetTodo = todos.filter(todo => todo.name === targetName)[0];
    let index = todos.indexOf(targetTodo);
    todos = [...todos.slice(0, index), ...todos.slice(index+1)]
}

export { saveProject, loadProjects, deleteProject, saveTodo, loadTodos, deleteTodo}