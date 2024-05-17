import { deleteProject, saveProject, saveTodo } from "./data/storage";
import displayAllProjects from "./displays/display-all-projects";
import { displayForm } from "./displays/display-form";
import { displayProject } from "./displays/display-project";
import { getProjectValues, projectForm } from "./forms/project-form";
import {getTodoValues, todoForm } from "./forms/todo-form";

const getLinks = () => {

    const links = document.querySelectorAll('.link');
    // links.forEach(link => {
    //     console.log(link)
    // })

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
                let targetProject = getTodoValues().project

                e.preventDefault();
                saveTodo();
                
                let modal = document.querySelector('dialog');
                modal.remove();

                displayProject(targetProject);
            }
            // new project submit 
            if (linkClass.includes('project-submit')) {
                let targetProject = getProjectValues().name

                e.preventDefault();
                saveProject();

                let modal = document.querySelector('dialog');
                modal.remove();

                displayProject(targetProject);
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