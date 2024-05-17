const todos = []

const getTodos = (project) => {
    todos.push(project.todoLists)

    return todos
}

export {getTodos}