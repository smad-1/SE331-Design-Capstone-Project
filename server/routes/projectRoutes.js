const express = require("express");
const router = express.Router();

const { getProjects, getProject, createProject } = require("../controllers/projectController");

router.get("/", getProjects);        // GET    /api/projects
router.get("/:id", getProject);      // GET    /api/projects/:id
router.post("/", createProject);     // POST   /api/projects
 
module.exports = router;