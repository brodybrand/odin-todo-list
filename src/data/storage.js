import { projectCreator } from "../constructors/project";
import { getProjectValues } from "../forms/project-form";

let projects = [
    {name: 'test 1', description: 'desc test 1'},
    {name: 'test 2', description: 'desc test 2'},
    {name: 'test 3', description: 'desc test 3'}
]

const saveProject = () => {
    const name = getProjectValues().name
    const desc = getProjectValues().desc
    const newProject = projectCreator(name, desc)
    projects.push(newProject)
}

const loadProjects = () => {
    for (let i=0; i<projects.length; i++) {
        let currentProject = projects[i];
        localStorage.setItem(`project__${i}`, JSON.stringify(currentProject));
    }

    return projects;
}

const deleteProject = (targetName) => {
    let targetProject = projects.filter(proj => proj.name === targetName)[0];
    let index = projects.indexOf(targetProject);
    projects = [...projects.slice(0, index), ...projects.slice(index+1)]
}

export { saveProject, loadProjects, deleteProject}