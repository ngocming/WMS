import { useState } from 'react'
import { LayoutDashboard, PackagePlus, PackageMinus, Boxes, ChartNoAxesCombined } from 'lucide-react'

const menuItems = [
    { label: 'Tổng quan', icon: LayoutDashboard },
    { label: 'Nhập kho', icon: PackagePlus },
    { label: 'Xuất kho', icon: PackageMinus },
    { label: 'Tồn kho', icon: Boxes },
    { label: 'Báo cáo', icon: ChartNoAxesCombined },
]

export default function Sidebar() {
    const [active, setActive] = useState('Tổng quan')

    return (
        <aside className="top-0 flex h-screen w-60 shrink-0 flex-col border-r border-slate-800 bg-slate-950">
            <div className="flex items-center gap-2.5 px-5 py-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                    <Boxes size={18} />
                </div>
                <span className="text-base font-bold text-white tracking-wide">
                    WMS<span className="text-blue-400">.</span>
                </span>
            </div>
            <nav className="flex-1 space-y-1 px-3 py-2">
                {menuItems.map(({ label, icon: Icon }) => {
                    const isActive = active === label
                    return (
                        <button
                            key={label}
                            onClick={() => setActive(label)}
                            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive
                                    ? 'bg-blue-600/15 text-blue-400'
                                    : 'text-slate-400 hover:bg-slate-800/60 hover:text-white'
                                }`}
                        >
                            <Icon size={18} />
                            <span>{label}</span>
                            {isActive && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-blue-400" />}
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
