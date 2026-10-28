import { useState } from 'react'
import { LayoutDashboard, PackagePlus, PackageMinus, Boxes, ChartNoAxesCombined, Menu, X } from 'lucide-react'

const menuItems = [
  { label: 'Tổng quan', icon: LayoutDashboard },
  { label: 'Nhập kho',  icon: PackagePlus },
  { label: 'Xuất kho',  icon: PackageMinus },
  { label: 'Tồn kho',   icon: Boxes },
  { label: 'Báo cáo',   icon: ChartNoAxesCombined },
]

export default function Sidebar() {
  const [open, setOpen]     = useState(false)
  const [active, setActive] = useState('Tổng quan')

  return (
    <>
      {/* Mobile toggle */}
      <button onClick={() => setOpen(true)} aria-label="Mở menu"
        className="fixed left-4 top-4 z-50 rounded-lg bg-slate-800 p-2 text-slate-300 shadow md:hidden">
        <Menu size={20} />
      </button>

      {/* Overlay */}
      {open && <div className="fixed inset-0 z-40 bg-black/60 md:hidden" onClick={() => setOpen(false)} />}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-slate-800 bg-slate-950 transition-transform md:static md:translate-x-0 md:shrink-0 ${
        open ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Logo */}
        <div className="flex items-center justify-between px-5 py-5">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
              <Boxes size={16} />
            </div>
            <span className="text-lg font-bold text-white">
              WMS<span className="text-blue-400">.</span>
            </span>
          </div>
          <button onClick={() => setOpen(false)} aria-label="Đóng menu"
            className="rounded p-1 text-slate-500 hover:text-slate-300 md:hidden">
            <X size={18} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-1 px-3 py-2">
          {menuItems.map(({ label, icon: Icon }) => {
            const isActive = active === label
            return (
              <button key={label} onClick={() => { setActive(label); setOpen(false) }}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-600/15 text-blue-400'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}>
                <Icon size={18} />
                <span>{label}</span>
                {isActive && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-blue-400" />}
              </button>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-slate-800 px-5 py-4">
          <p className="text-xs text-slate-600">WMS v1.0 · 2026</p>
        </div>
      </aside>
    </>
  )
}
