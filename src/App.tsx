import './App.css'
import StatCard from './components/dashboard/statcard'
import { stats } from './data/mockData'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import InventoryCharts from './components/dashboard/InventoryCharts'

export default function App() {
  return (
    <div className="flex h-screen bg-slate-950 text-slate-200">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-screen-2xl px-4 py-6 sm:px-6 lg:px-8">

            {/* Page heading */}
            <header className="mb-6">
              <h1 className="text-2xl font-bold tracking-tight text-white">Dashboard</h1>
              <p className="mt-1 text-sm text-slate-500">
                Cung cấp số liệu tổng quan về các chỉ số chính — thống kê và hoạt động nhập/xuất kho
              </p>
            </header>

            {/* Stat cards – responsive: 1 → 2 → 4 cols */}
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <StatCard key={stat.title} {...stat} />
              ))}
            </section>

            {/* Charts */}
            <InventoryCharts />

          </div>
        </main>
      </div>
    </div>
  )
}
