import React from 'react'

export default function SkillBar({label,value}){
    return (
        <div className="flex items-center gap-3">
            <span className="w-28 text-slate-300 text-sm">{label}</span>
            <div className="h-2 flex-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-sky-400 to-blue-500" style={{width: value+'%'}} />
            </div>
            <span className="w-10 text-right text-slate-400 text-sm">{value}%</span>
        </div>
    )
}