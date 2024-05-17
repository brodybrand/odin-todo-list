import { displayForm } from "./displays/display-form";
import { displayProject } from "./displays/display-project";
import projectForm from "./forms/project-form";
import todoForm from "./forms/todo-form";

const getLinks = () => {

    const links = document.querySelectorAll('.link');
    console.log(links)

    links.forEach(link => {
        let linkID = link.getAttribute('id')
        let LinkClass = link.getAttribute('class')

        link.addEventListener('click', () => {
            // new project
            if (linkID === 'new-project-btn') {
                displayForm(projectForm())
            }
            // new todo
            if (linkID === 'new-todo-btn') {
                displayForm(todoForm())
            }
            // open existing proj
            if (LinkClass.includes('project')) {
                displayProject(linkID)
            }
        })
    })
}

export default getLinks;