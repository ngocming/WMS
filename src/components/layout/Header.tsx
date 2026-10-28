import { Bell, Search, Menu, Home, ChevronRight } from 'lucide-react'

interface HeaderProps {
    onToggleSidebar: () => void
}

export default function Header({ onToggleSidebar }: HeaderProps) {
    return (
        <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-slate-800 bg-black px-6 py-3">
            <div className="flex items-center gap-3">
                <button
                    type="button"
                    onClick={onToggleSidebar}
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-900 hover:text-white"
                    title="Thu gọn / Mở rộng menu"
                >
                    <Menu size={18} />
                </button>
                <div className="h-4 w-px bg-slate-800" />
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
                    <button
                        type="button"
                        className="flex items-center text-slate-400 transition-colors hover:text-white"
                        title="Trang chủ"
                    >
                        <Home size={16} />
                    </button>
                    <ChevronRight size={14} className="text-slate-600" />
                    <span className="font-semibold text-white">Màn hình chính</span>
                </nav>
            </div>

            <div className="ml-auto flex items-center gap-3">
                <div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-1.5 text-sm text-slate-400 focus-within:border-slate-600 focus-within:text-white">
                    <Search size={15} />
                    <input
                        placeholder="Tìm kiếm..."
                        className="w-28 bg-transparent text-sm text-white placeholder-slate-500 outline-none sm:w-40"
                    />
                </div>
                <button
                    type="button"
                    className="relative flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-900 hover:text-white"
                    title="Thông báo"
                >
                    <Bell size={18} />
                    <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-blue-500" />
                </button>

                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-white border border-slate-700">
                    A
                </div>
            </div>
        </header>
    )
}
