const projectModel = require("../models/projectModel"); 

function getProjects(req, res) {
 const projects = projectModel.getAllProjects();
 
 res.status(200).json({
   success: true,
   count: projects.length,
   data: projects,
 });
}

function getProject(req, res) {
 // route params arrive on req.params -> /api/projects/:id
 const project = projectModel.getProjectById(req.params.id);
 
 if (!project) {
   return res.status(404).json({
     success: false,
     message: `No project found with id ${req.params.id}`,
   });
 }
 
 res.status(200).json({ success: true, data: project });
}


function createProject(req, res) {
 // request body arrives on req.body -> requires express.json() middleware
 if (!req.body.title) {
   return res.status(400).json({
     success: false,
     message: "Title is required",
   });
 }
 
const newProject = projectModel.createProject(req.body);
 res.status(201).json({ success: true, data: newProject });
}

function updateProject(req, res) {
  if (!req.body.title) {
    return res.status(400).json({ 
      success: false, 
      message: "Title is required" 
    });
  }
 
  const updated = projectModel.updateProject(req.params.id, req.body);
 
  if (!updated) {
    return res.status(404).json({
      success: false,
      message: `No project found with id ${req.params.id}`,
    });
  }
 
  res.status(200).json({ success: true, data: updated });
}

function deleteProject(req, res) {
  const deleted = projectModel.deleteProject(req.params.id);
 
  if (!deleted) {
    return res.status(404).json({
      success: false,
      message: `No project found with id ${req.params.id}`,
    });
  }
 
  res.status(200).json({ success: true, message: "Project deleted" });
}

module.exports = { getProjects, getProject, createProject, updateProject, deleteProject };
