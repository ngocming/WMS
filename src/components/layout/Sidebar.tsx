import { useState } from 'react'
import {
  LayoutDashboard, PackagePlus, PackageMinus,
  Boxes, ChartNoAxesCombined, Menu, X,
} from 'lucide-react'

const menuItems = [
  { label: 'Tổng quan',  icon: LayoutDashboard },
  { label: 'Nhập kho',   icon: PackagePlus },
  { label: 'Xuất kho',   icon: PackageMinus },
  { label: 'Tồn kho',    icon: Boxes },
  { label: 'Báo cáo',    icon: ChartNoAxesCombined },
]

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('Tổng quan')

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-50 rounded-lg bg-slate-800 p-2 text-slate-300 shadow-lg md:hidden"
        aria-label="Mở menu"
      >
        <Menu size={20} />
      </button>

      {/* Overlay (mobile) */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 flex w-64 flex-col
        border-r border-slate-800/60 bg-slate-950
        transition-transform duration-300 ease-in-out
        md:static md:translate-x-0 md:shrink-0
        ${open ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Logo */}
        <div className="flex items-center justify-between px-5 py-5">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 shadow-lg shadow-blue-600/25">
              <Boxes size={16} className="text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              WMS<span className="text-blue-400">.</span>
            </span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="rounded-md p-1 text-slate-500 hover:text-slate-300 md:hidden"
            aria-label="Đóng menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-0.5 px-3 py-2">
          {menuItems.map(({ label, icon: Icon }) => {
            const isActive = active === label
            return (
              <button
                key={label}
                onClick={() => { setActive(label); setOpen(false) }}
                className={`
                  group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium
                  transition-all duration-150
                  ${isActive
                    ? 'bg-blue-600/15 text-blue-400 shadow-inner'
                    : 'text-slate-400 hover:bg-slate-800/70 hover:text-slate-100'}
                `}
              >
                <Icon size={18} className={`shrink-0 transition-colors ${isActive ? 'text-blue-400' : 'group-hover:text-slate-200'}`} />
                <span>{label}</span>
                {isActive && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-blue-400" />}
              </button>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-slate-800/60 px-5 py-4">
          <p className="text-xs text-slate-600">WMS v1.0 · 2026</p>
        </div>
      </aside>
    </>
  )
}