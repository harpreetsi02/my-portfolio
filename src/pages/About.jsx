import React from 'react'

export default function About(){
    return (
        <section className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                <h2 className="text-2xl font-semibold">About Me</h2>
                <p className="mt-3 text-slate-300 leading-7">
                    I’m Harpreet — a frontend‑first developer learning the full stack. I love clean UI,
                    simple architecture, and readable code. On the front I use React + Tailwind, on the back
                    I’m learning Node + Express + Mongo.
                </p>
                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4">
                        <h3 className="font-semibold">Learning</h3>
                        <ul className="mt-2 list-disc list-inside text-slate-300 space-y-1">
                            <li>React state patterns</li>
                            <li>REST APIs with Express</li>
                            <li>Auth basics (JWT)</li>
                        </ul>
                    </div>
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4">
                        <h3 className="font-semibold">Toolbox</h3>
                        <p className="mt-2 text-slate-300">Vite, React Router, TailwindCSS, Git.</p>
                    </div>
                </div>
            </div>
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold">Quick Facts</h3>
                <ul className="mt-3 space-y-2 text-slate-300">
                    <li>Based in Delhi</li>
                    <li>Design‑minded</li>
                    <li>Open to internships</li>
                </ul>
                <a className="inline-flex items-center gap-2 rounded-xl px-4 py-2 font-medium border border-white/10 hover:bg-white/10 mt-4" href="#">Resume</a>
            </div>
        </section>
    )
}