import { useState } from 'react'
import {
    Blocks,
    LayoutList,
    Container,
    Boxes,
    FileSearch,
    LayoutDashboard,
} from 'lucide-react'

const menuItems = [
    { label: 'Màn hình chính', icon: LayoutDashboard },
    { label: 'Quản lý chung',  icon: LayoutList },
    { label: 'Hệ thống RFID',  icon: Blocks },
    { label: 'Quản lý vận chuyển', icon: Container },
    { label: 'Tra cứu',        icon: FileSearch },
]

interface SidebarProps {
    collapsed: boolean
}

export default function Sidebar({ collapsed }: SidebarProps) {
    const [active, setActive] = useState('Màn hình chính')

    return (
        <aside className={`
            top-0 flex h-screen shrink-0 flex-col
            border-r border-slate-800 bg-black
            transition-all duration-300 ease-in-out
            ${collapsed ? 'w-16' : 'w-64'}
        `}>
            {/* Logo */}
            <div className="flex items-center gap-3 border-b border-slate-900 px-[14px] py-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-black shadow-sm">
                    <Boxes size={20} strokeWidth={2.2} />
                </div>
                {!collapsed && (
                    <div className="overflow-hidden leading-tight">
                        <span className="block text-xs font-bold uppercase tracking-wider text-white">
                            Warehouse
                        </span>
                        <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                            Management System
                        </span>
                    </div>
                )}
            </div>

            {/* Section label */}
            {!collapsed && (
                <div className="px-5 pb-2 pt-5 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Menu chính
                </div>
            )}

            {/* Nav */}
            <nav className="flex-1 space-y-1 px-2 py-2">
                {menuItems.map(({ label, icon: Icon }) => {
                    const isActive = active === label
                    return (
                        <button
                            key={label}
                            onClick={() => setActive(label)}
                            title={collapsed ? label : undefined}
                            className={`
                                flex w-full items-center rounded-lg py-2.5 text-sm font-medium transition-all
                                ${collapsed ? 'justify-center px-2' : 'gap-3 px-3.5'}
                                ${isActive
                                    ? 'bg-slate-800 font-semibold text-white shadow-inner'
                                    : 'text-slate-400 hover:bg-slate-900 hover:text-white'}
                            `}
                        >
                            <Icon size={18} className={`shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                            {!collapsed && <span>{label}</span>}
                        </button>
                    )
                })}
            </nav>

            {/* Footer */}
            <div className="border-t border-slate-900 px-5 py-4">
                {collapsed
                    ? <span className="block text-center text-xs text-slate-600">v1</span>
                    : <p className="text-xs text-slate-500">WMS v1.0 · 2026</p>}
            </div>
        </aside>
    )
}
