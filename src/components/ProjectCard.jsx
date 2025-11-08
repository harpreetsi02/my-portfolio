import React from 'react'

export default function ProjectCard({title,desc,tech=['React','Tailwind']}){
    return (
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:-translate-y-1 transition">
            <h3 className="font-semibold text-slate-100">{title}</h3>
            <p className="mt-2 text-slate-400 text-sm">{desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
                {tech.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/10 border border-white/10">{t}</span>
                ))}
            </div>
            <div className="mt-4 flex gap-3">
                <a href="#" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 font-medium border border-white/10 hover:bg-white/10">Code</a>
                <a href="#" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 font-medium border border-white/10 hover:bg-white/10">Live</a>
            </div>
        </div>
    )
}