import { getProjects } from "../data/get-projects";
import { loadProjects, saveProjects } from "../data/storage";
import displayForm from "./display-form";
import { clearContent, clearProjects } from "./clear-content";
import getLinks from "../get-links";

const displayAllProjects = () => {
    // let projects = getProjects();
    let projects = getProjects();

    clearProjects();

    let content = document.querySelector('#content');

    let projectsWrapper = document.createElement('div');
    projectsWrapper.setAttribute('class', 'projects-wrapper');

    let projectsHeader = document.createElement('h2');
    projectsHeader.textContent = 'Projects';
    projectsWrapper.appendChild(projectsHeader);

    for (let i=0; i<projects.length; i++) {
        let currentProject = projects[i];

        let projectDiv = document.createElement('div');
        projectDiv.setAttribute('class', 'project link');
        projectDiv.setAttribute('id', currentProject.name);
        projectDiv.textContent = currentProject.name;

        projectsWrapper.appendChild(projectDiv);
    }

    content.appendChild(projectsWrapper);

    getLinks();
}

export default displayAllProjects;