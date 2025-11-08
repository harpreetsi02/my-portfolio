import React from 'react'

const testimonials = [
    { name: 'Ananya', role: 'Designer', text: 'Strong UI sense and quick delivery.' },
    { name: 'Rahul', role: 'Developer', text: 'Clean code and reusable components.' },
    { name: 'Div', role: 'Product', text: 'On time with attention to detail.' },
]

export default function Testimonials(){
    return (
        <section>
            <h2 className="text-2xl font-semibold mb-6">Testimonials</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((t,i)=> (
                    <div key={i} className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 grid place-items-center">★</div>
                            <div>
                                <div className="font-medium">{t.name}</div>
                                <div className="text-xs text-slate-400">{t.role}</div>
                            </div>
                        </div>
                        <p className="mt-3 text-slate-300">“{t.text}”</p>
                    </div>
                ))}
            </div>
        </section>
    )
}