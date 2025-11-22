import React from 'react'

export default function Footer(){
    return (
        <footer className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <h4 className="font-semibold">Harpreet Singh</h4>
                    <p className="text-sm text-slate-400">Clean UI • React • Tailwind</p>
                </div>
                <div className="text-sm text-slate-400">© {new Date().getFullYear()} Harpreet</div>
            </div>
        </footer>
    )
}