import { getProjects } from "../data/get-projects";
import { loadProjects } from "../data/storage";
import displayForm from "./display-form";
import { clearContent, clearProjects } from "./clear-content";

const displayAllProjects = () => {
    let projects = getProjects();

    let content = document.querySelector('#content');

    let projectsWrapper = document.createElement('div');
    projectsWrapper.setAttribute('class', 'projects-wrapper');

    clearProjects();

    for (let i=0; i<projects.length; i++) {
        let currentProject = projects[i];
        console.log(`display-all-projects ${currentProject.name}`)

        let projectDiv = document.createElement('div');
        projectDiv.setAttribute('class', 'project link');
        projectDiv.setAttribute('id', currentProject.name);
        projectDiv.textContent = currentProject.name;

        projectsWrapper.appendChild(projectDiv);
    }

    content.appendChild(projectsWrapper);
}

export default displayAllProjects;