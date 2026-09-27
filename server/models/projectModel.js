
const projects = [
    {id: 1, title:"project 1"}, 
    {id: 2, title:"project 2"},
    {id: 3, title:"project 3"},
    {id: 4, title:"project 4"},
    {id: 5, title:"project 5"}
];

function getAllProjects(){
    return projects;
}

function getProjectById(id){
    return projects.find((p)=> p.id === Number(id));
}

function createProject(data){
    const newProject = {
        id: projects.length + 1,
        title: data.title,
    };

    projects.push(newProject);
    return newProject;
}

module.exports = {getAllProjects, getProjectById, createProject};