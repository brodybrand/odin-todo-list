const projectForm = () => {

    let form = document.createElement('form');
    Object.assign(form, {
        className: 'todo-form',
        method: 'post'
    });

    let label = document.createElement('label');
    label.setAttribute('for', 'name');
    form.appendChild(label);
    
    let input = document.createElement('input');
    Object.assign(input, {
        id: 'name',
        input: 'text',
        placeholder: 'New Project'
    });
    form.appendChild(input);

    let submit = document.createElement('button');
    Object.assign(submit, {
        id: 'name',
        textContent: 'Submit'
    })
    form.appendChild(submit);

    return form;
}

export default projectForm;