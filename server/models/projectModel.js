
const projects = [
    {id: 1, title:"Food App"}, 
    {id: 2, title:"project 2"},
    {id: 3, title:"project 3"},
    {id: 4, title:"project 4"},
    {id: 5, title:"project 5"}
];

// Why nextId? Once we can DELETE, "projects.length + 1" can hand out an id
// that already exists (delete #2 from 5 items, next id = 5, but #5 exists).
let nextId = 6;

function getAllProjects(){
    return projects;
}

function getProjectById(id){
    return projects.find((p)=> p.id === Number(id));
}

function createProject(data){
    const newProject = {
        id: nextId++,
        title: data.title,
    };

    projects.push(newProject);
    return newProject;
}

function updateProject(id, data) {
  const project = projects.find((p) => p.id === Number(id));
  if (!project) return undefined;
 
  project.title = data.title;
  return project;
}

function deleteProject(id) {
  const index = projects.findIndex((p) => p.id === Number(id));
  if (index === -1) return false; 
 
  projects.splice(index, 1);
  return true;
}

module.exports = {getAllProjects, 
                getProjectById, 
                createProject,
                updateProject,
                deleteProject};