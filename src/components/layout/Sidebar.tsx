import { useState } from 'react'
import { Blocks, LayoutList, Container, Boxes, FileSearchCorner, Gauge } from 'lucide-react'

const menuItems = [
    { label: 'Màn hình chính', icon: Gauge },
    { label: 'Quản lý chung', icon: LayoutList },
    { label: 'Hệ thống RFID', icon: Blocks },
    { label: 'Quản lý vận chuyển', icon: Container },
    { label: 'Tra cứu', icon: FileSearchCorner },
]

export default function Sidebar() {
    const [active, setActive] = useState('Tổng quan')

    return (
        <aside className="top-0 flex h-screen w-60 shrink-0 flex-col border-r border-slate-400/20 bg-black">
            <div className="flex items-center gap-2.5 px-5 py-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black">
                    <Boxes size={18} />
                </div>
                <span className="text-base font-bold text-white tracking-wide">
                    WMS
                </span>
            </div>
            <div className="text-white font-semibold text-slate-500 uppercase tracking-wider px-5 pt-4 pb-2">
                Menu chính
            </div>
            <nav className="flex-1 space-y-1 px-3 py-2 ">
                {menuItems.map(({ label, icon: Icon }) => {
                    const isActive = active === label
                    return (
                        <button
                            key={label}
                            onClick={() => setActive(label)}
                            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors text-white-400 ${isActive
                                ? 'bg-gray-700 text-white-400'
                                : 'text-slate-400 hover:bg-slate-800/60 hover:text-white'
                                }`}
                        >
                            <Icon size={18} />
                            <span>{label}</span>
                        </button>
                    )
                })}
            </nav>
            <div className="border-t border-slate-800 px-5 py-4">
                <p className="text-xs text-slate-500">WMS v1.0 · 2026</p>
            </div>
        </aside>
    )
}
