import { projectCreator } from "./constructors/project";
import { getProjects } from "./data/get-projects";
import { saveProjects } from "./data/storage";
import displayAllProjects from "./displays/display-all-projects";
import { displayForm } from "./displays/display-form";
import { displayProject } from "./displays/display-project";
import { closeModal } from "./displays/modal-close";
import { projectForm, getProjectValues } from "./forms/project-form";
import todoForm from "./forms/todo-form";

const getLinks = () => {

    const links = document.querySelectorAll('.link');

    const projects = getProjects();

    links.forEach(link => {
        let linkID = link.getAttribute('id')
        let linkClass = link.getAttribute('class')

        link.addEventListener('click', (e) => {
            // new project form display
            if (linkID === 'new-project-btn') {
                displayForm(projectForm())
            }
            // new todo form display
            if (linkID === 'new-todo-btn') {
                displayForm(todoForm())
            }
            // new todo submit
            if (linkID == 'todo-submit') {

            }
            // new project submit 
            if (linkClass.includes('project-submit')) {
                console.log('submit clicked');
                e.preventDefault();

                const name = getProjectValues().name;
                const desc = getProjectValues().desc;
                const newProject = projectCreator(name, desc);
                projects.push(newProject);
                saveProjects();

                let modal = document.querySelector('dialog');
                modal.remove();

                displayAllProjects();
                displayProject(newProject.name);
            }
            //  cancel form links
            if (linkClass.includes('cancel')) {
                let modal = document.querySelector('dialog');
                modal.remove();
                console.log('modal removed')
                displayAllProjects();
            }
            // open existing proj
            // if (linkClass.includes('project')) {
            //     displayProject(linkID)
            // }

        })
    })
}

export default getLinks;