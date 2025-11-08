import React from 'react'
import ProjectCard from '../components/ProjectCard.jsx'

const items = [
    {title:'Portfolio Website', desc:'Personal site with motion.'},
    {title:'Task Manager', desc:'CRUD + filters + local storage', tech:['React','Zustand']},
    {title:'Code Editor', desc:'In‑browser editor', tech:['Monaco','Vite']},
    {title:'Deals Bot', desc:'Affiliate deals collector', tech:['Node','Express','MongoDB']},
]

export default function Projects(){
    return (
        <section>
            <h2 className="text-2xl font-semibold mb-6">Projects</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map(p=> <ProjectCard key={p.title} {...p} />)}
            </div>
        </section>
    )
}