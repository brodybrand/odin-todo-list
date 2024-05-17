import projects from "../data/projects";

const todoForm = () => {

    let form = document.createElement('form');
    Object.assign(form, {
        className: 'todo-form',
        method: 'post'
    });

    let inputs = ['project', 'title', 'desc', 'due-date', 'priority']

    for (let input in inputs) {
        let currentInput = inputs[input];

        // labels
        let label = document.createElement('label');
        label.setAttribute('for', currentInput);
        form.appendChild(label);

        // project
        if (currentInput === 'project') {
            let project = document.createElement('select');
            Object.assign(project, {
                id: currentInput,
                name: 'projects'
            });
            form.appendChild(project);

            // add existing projects to dropdown
            console.log(projects)
            for (let i in projects) {
                let opt = document.createElement('option');
                Object.assign(opt, {
                    value: projects[i].name,
                    textContent: projects[i].name
                })
                project.appendChild(opt)
            }
        };

        // title
        if (currentInput === 'title') {
            let title = document.createElement('input');
            Object.assign(title, {
                type: 'text',
                id: currentInput
            });
            form.appendChild(title);
        };

        // desc
        if (currentInput === 'desc') {
            let desc = document.createElement('input');
            Object.assign(desc, {
                type: 'text',
                id: currentInput
            });
            form.appendChild(desc);
        };

        // due date
        if (currentInput === 'due-date') {
            let dueDate = document.createElement('input');
            Object.assign(dueDate, {
                type: 'date',
                id: currentInput
            });
            form.appendChild(dueDate);
        };

        // priority
        if (currentInput === 'priority') {
            let priority = document.createElement('input');
            Object.assign(priority, {
                type: 'number',
                id: currentInput
            });
            form.appendChild(priority);
        }
    }
    let submit = document.createElement('button');
    Object.assign(submit, {
        id: 'name',
        textContent: 'Submit'
    })
    form.appendChild(submit);

    return form;
}

export default todoForm;