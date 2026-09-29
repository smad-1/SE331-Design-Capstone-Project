import React, { useEffect, useState } from 'react'
import { getProjects } from "../api/projectService";
import { Link } from "react-router-dom"

const Home = () => {
    const [fixed, setFixed] =useState("fixed");
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchProjects() {
        try {
            setLoading(true);
            const result = await getProjects(); 
            setProjects(result.data);
            setError(null);
        } catch (err) {
            setError("Could not load projects. Is the backend running?");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {    
        fetchProjects();
    }, []); // empty dependency array -> runs once, when the component mounts

  return (
    <div>
        <div className={fixed==="fixed"? "hero hero-fixed" : "hero hero-sliding"}>
            <div className='hero-overlay'>
            <h1>Welcome Back!</h1>
            <button onClick={()=> setFixed(fixed==="fixed"? "sliding": "fixed")}>Change BG</button>
        </div>
        </div>
        

        <h2>Projects</h2>
        {loading && <p>Loading projects...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        
        {!loading && !error && ( 
            <div className='card-list'>
                {projects.map((project) =>(
                    <Link 
                    to={`/projects/${project.id}`} 
                    className='card' 
                    key={project.id}>
                        {project.title}
                    </Link>
                ))}
            </div>
        )}
    </div>
  );
}

export default Home