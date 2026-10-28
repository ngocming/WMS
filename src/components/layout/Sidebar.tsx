import {
  LayoutDashboard,
  PackagePlus,
  PackageMinus,
  Boxes,
  ChartNoAxesCombined,
} from 'lucide-react'

const menuItems = [
  { label: 'Tổng quan', icon: LayoutDashboard },
  { label: 'Nhập kho', icon: PackagePlus },
  { label: 'Xuất kho', icon: PackageMinus },
  { label: 'Tồn kho', icon: Boxes },
  { label: 'Báo cáo', icon: ChartNoAxesCombined },
]

export default function Sidebar() {
  return (
    <aside className="w-64 shrink-0 border-r border-slate-800 bg-slate-900 p-5">
      <h2 className="mb-8 text-xl font-bold text-white">
        WMS<span className="text-blue-400">.</span>
      </h2>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.label}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-slate-400 transition hover:bg-slate-800 hover:text-white"
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}