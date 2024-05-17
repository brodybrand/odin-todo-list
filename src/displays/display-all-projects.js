import { getProjects } from "../data/get-projects";
import { loadProjects, saveProjects } from "../data/storage";
import displayForm from "./display-form";
import { clearContent, clearProjects } from "./clear-content";
import getLinks from "../get-links";

const displayAllProjects = () => {
    // let projects = getProjects();
    let projects = loadProjects();

    clearProjects();

    let content = document.querySelector('#content');

    let projectsWrapper = document.createElement('div');
    projectsWrapper.setAttribute('class', 'projects-wrapper');

    for (let i=0; i<projects.length; i++) {
        let currentProject = projects[i];

        let projectDiv = document.createElement('div');
        projectDiv.setAttribute('class', 'targeted-project link');
        projectDiv.setAttribute('id', currentProject.name);
        projectsWrapper.appendChild(projectDiv);

        let projectName = document.createElement('h2');
        projectName.setAttribute('class', 'project-name');
        projectName.textContent = currentProject.name
        projectDiv.appendChild(projectName);

        let projectDesc = document.createElement('div');
        projectDesc.setAttribute('class', 'project-desc');
        projectDesc.textContent = `Desc: ${currentProject.description}`
        projectDiv.appendChild(projectDesc);
    }

    content.appendChild(projectsWrapper);

    getLinks();
}

export default displayAllProjects;