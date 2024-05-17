import displayAllProjects from "../displays/display-all-projects";
import { getProjects } from "./get-projects";

let projects = getProjects();

const saveProjects = () => {
    localStorage.clear();

    projects.forEach((project, index) => {
        localStorage.setItem(`project_${index}`, JSON.stringify(project));
    })
}

const loadProjects = () => {
    for (let i=0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        if (key.startsWith('project_')) {
            const project = JSON.parse(localStorage.getItem(key));
            projects.push(project)
            displayAllProjects();
        }
    }
}

export { saveProjects, loadProjects};