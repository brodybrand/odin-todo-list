import { projectCreator } from "./constructors/project";
import { getProjects } from "./data/get-projects";
import { deleteProject, loadProjects, saveProject } from "./data/storage";
import displayAllProjects from "./displays/display-all-projects";
import { displayForm } from "./displays/display-form";
import { displayProject } from "./displays/display-project";
import { closeModal } from "./displays/modal-close";
import { projectForm, getProjectValues } from "./forms/project-form";
import todoForm from "./forms/todo-form";

const getLinks = () => {

    const links = document.querySelectorAll('.link');
    // links.forEach(link => {
    //     console.log(link)
    // })

    let projects = loadProjects();

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

                // const name = getProjectValues().name;
                // const desc = getProjectValues().desc;
                // const newProject = projectCreator(name, desc);
                // projects.push(newProject);
                saveProject();

                let modal = document.querySelector('dialog');
                modal.remove();

                displayAllProjects();
                // displayProject();
            }
            //  cancel form links
            if (linkClass.includes('cancel')) {
                let modal = document.querySelector('dialog');
                modal.remove();
                displayAllProjects();
            }
            // open existing proj
            if (linkClass.includes('targeted-project')) {
                console.log(`project clicked`)
                displayProject(linkID)
            }
            // delete project
            if (linkClass.includes('delete-project')) {
                deleteProject(linkID);

                let modal = document.querySelector('dialog');
                modal.remove();
  
                displayAllProjects();
            }
        })
    })
}

export default getLinks;