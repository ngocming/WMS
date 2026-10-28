import { Bell, Search } from 'lucide-react'

export default function Header() {
    return (
        <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-slate-800/60 bg-slate-950/80 px-6 py-3 backdrop-blur-md">
            <div className="hidden md:block">
                <p className="text-sm font-medium text-slate-400">
                    Theo dõi hoạt động kho hàng của bạn
                </p>
            </div>

            <div className="ml-auto flex items-center gap-3">
                <div className="flex items-center gap-2 rounded-lg border border-slate-700/60 bg-slate-800/50 px-3 py-2 text-sm text-slate-400
                        transition-all focus-within:border-blue-500/50 focus-within:bg-slate-800 focus-within:text-slate-200">
                    <Search size={15} className="shrink-0" />
                    <input
                        placeholder="Tìm kiếm..."
                        className="w-28 bg-transparent text-sm text-white placeholder-slate-500 outline-none sm:w-40"
                    />
                </div>
                <Bell size={18} />
                <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-blue-500" />

                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                </div>
                <span className="hidden sm:inline">Admin</span>
            </div>
        </header>
    )
}