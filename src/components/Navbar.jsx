import React from 'react'
import { NavLink } from 'react-router-dom'

const linkBase = 'px-3 py-2 rounded-lg font-medium hover:bg-white/10'

export default function Navbar(){
    const [open,setOpen] = React.useState(false)
    const link = ({isActive}) => `${linkBase} ${isActive? 'text-sky-300 bg-white/10':'text-slate-200'}`
    return (
        <header className="sticky top-0 z-20 border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-black/30">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <NavLink to="/" className="flex items-center gap-3">
                    <div className="h-9 w-9 grid place-items-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 font-bold">H</div>
                    <div className="leading-tight">
                        <div className="text-sm">Harpreet</div>
                        <div className="text-xs text-slate-400">Full‑Stack Learner</div>
                    </div>
                </NavLink>

                <nav className="hidden md:flex items-center gap-1">
                    <NavLink className={link} to="/">Home</NavLink>
                    <NavLink className={link} to="/about">About</NavLink>
                    <NavLink className={link} to="/projects">Projects</NavLink>
                    <NavLink className={link} to="/testimonials">Testimonials</NavLink>
                    <NavLink className={link} to="/contact">Contact</NavLink>
                </nav>

                <button className="md:hidden p-2 rounded-lg hover:bg-white/10" onClick={()=>setOpen(v=>!v)}>
                    <span className="sr-only">Toggle menu</span>
                    <div className="h-0.5 w-5 bg-white mb-1"/>
                    <div className="h-0.5 w-5 bg-white mb-1"/>
                    <div className="h-0.5 w-5 bg-white"/>
                </button>
            </div>

            {open && (
                <div className="md:hidden px-4 pb-3">
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-2 space-y-1">
                        <NavLink onClick={()=>setOpen(false)} className={link} to="/">Home</NavLink>
                        <NavLink onClick={()=>setOpen(false)} className={link} to="/about">About</NavLink>
                        <NavLink onClick={()=>setOpen(false)} className={link} to="/projects">Projects</NavLink>
                        <NavLink onClick={()=>setOpen(false)} className={link} to="/testimonials">Testimonials</NavLink>
                        <NavLink onClick={()=>setOpen(false)} className={link} to="/contact">Contact</NavLink>
                    </div>
                </div>
            )}
        </header>
    )
}