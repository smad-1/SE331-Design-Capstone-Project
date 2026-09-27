import React, { useState } from 'react'

const Home = () => {
    const projects = [
    {id: 1, title:"project 1"}, 
    {id: 2, title:"project 2"},
    {id: 3, title:"project 3"},
    {id: 4, title:"project 4"},
    {id: 5, title:"project 5"}
];

    const [fixed, setFixed] =useState("fixed");

  return (
    <div>
        <div className={fixed==="fixed"? "hero hero-fixed" : "hero hero-sliding"}>
            <div className='hero-overlay'>
            <h1>Welcome Back!</h1>
            <button onClick={()=> setFixed(fixed==="fixed"? "sliding": "fixed")}>Change BG</button>
        </div>
        </div>
        

        <h2>Projects</h2>
        <div className='card-list'>
            {projects.map((project) =>(
                <div key={project.id} className='card'> {project.title} </div>
            ))}
        </div>
        
    </div>
  )
}

export default Home