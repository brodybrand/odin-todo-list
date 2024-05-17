const Todo = (project, title, description, dueDate, priority, completion) => {
    this.project = project,
    this.title = title,
    this.description = description,
    this.dueDate = dueDate,
    this.priority = priority,
    this.completion = completion
}

const todoCreator = (project, title, description, dueDate, priority, completion) => {
    return {
        project: project,
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        completion: completion
    }
}

export {todoCreator}