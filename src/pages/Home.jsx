import React from 'react'
import SkillBar from '../components/SkillBar.jsx'
import ProjectCard from '../components/ProjectCard.jsx'


export default function Home(){
    return (
        <div className="space-y-8">

            {/* Hero */}

            <section className="text-center pt-4">
                <h1 className="text-5xl sm:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-sky-400 via-cyan-300 to-blue-500">HARPREET</h1>
                <p className="mt-3 text-slate-400">Full‑Stack Learner • Frontend‑first • Clean UI</p>
                <div className="mt-6 flex justify-center gap-3">
                    <a href="/projects" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 font-medium border border-white/10 hover:bg-white/10">View Projects</a>
                    <a href="/contact" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 font-medium border border-white/10 hover:bg-white/10">Contact</a>
                </div>
            </section>

            {/* Featured */}

            <section className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h2 className="text-xl font-semibold mb-4">Featured Projects</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <ProjectCard title="Portfolio Website" desc="Modern personal site with responsive layout." />
                        <ProjectCard title="Task Manager" desc="Simple CRUD app with filters and local storage." tech={["React","Zustand","LocalStorage"]} />
                    </div>
                </div>
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h2 className="text-xl font-semibold mb-4">Skills Snapshot</h2>
                    <div className="space-y-3">
                        <SkillBar label="HTML/CSS" value={90} />
                        <SkillBar label="React" value={80} />
                        <SkillBar label="Node.js" value={60} />
                        <SkillBar label="MongoDB" value={55} />
                        <SkillBar label="UI/UX" value={75} />
                    </div>
                </div>
            </section>
        </div>
    )
}