import { Bell, Search, UserRound } from 'lucide-react'

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-slate-800 px-6 py-4">
      <div>
        <h1 className="text-xl font-semibold text-white">
          Tổng quan kho hàng
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Theo dõi hoạt động kho hàng của bạn
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 md:flex">
          <Search size={18} className="text-slate-400" />
          <input
            placeholder="Tìm kiếm..."
            className="w-32 bg-transparent text-sm text-white outline-none"
          />
        </div>

        <button
          aria-label="Thông báo"
          className="text-slate-400 hover:text-white"
        >
          <Bell size={20} />
        </button>

        <button
          aria-label="Tài khoản"
          className="flex items-center gap-2 text-slate-300"
        >
          <UserRound size={20} />
          <span className="hidden sm:inline">Admin</span>
        </button>
      </div>
    </header>
  )
}