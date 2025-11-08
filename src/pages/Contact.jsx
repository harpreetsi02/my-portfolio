import React from 'react'

export default function Contact(){
    return (
        <section className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                <h2 className="text-2xl font-semibold">Get in Touch</h2>
                <form className="mt-4 grid sm:grid-cols-2 gap-4">
                    <input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none" placeholder="Your name" />
                    <input type="email" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none" placeholder="Email" />
                    <input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none sm:col-span-2" placeholder="Subject" />
                    <textarea rows={6} className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none sm:col-span-2" placeholder="Message"></textarea>
                    <button type="button" className="sm:col-span-2 inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium border border-white/10 hover:bg-white/10">Send Message</button>
                </form>
            </div>
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold">Reach me</h3>
                <div className="mt-3 space-y-2 text-slate-300">
                    <div>Email: ninjasingh27619@gmail.com</div>
                    <div>GitHub: github.com/harpreetsi02</div>
                    <div>LinkedIn: linkedin.com/in/harpreet</div>
                </div>
            </div>
        </section>
    )
}