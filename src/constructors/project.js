const Project = (name, description) => {
    this.name = name;
    // this.todoLists = [];
    this.description = description

    // const addTodo = (todo) => {
    //     todoLists.push(todo);
    // }
}

const projectCreator = (name, description) => {
    return {
        name: name,
        description: description,
        // todoLists: todoLists
    }
}

export { Project, projectCreator };