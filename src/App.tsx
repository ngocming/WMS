import StatCard from './components/dashboard/statcard'
import { stats } from './data/mockData'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import InventoryCharts from './components/dashboard/InventoryCharts'

export default function App() {
  return (
    <div className="flex min-h-screen bg-[#0b0f17] text-slate-200">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-x-hidden">
        <Header />

        <main className="flex-1 px-4 py-6 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6">
              <h1 className="text-xl font-bold text-white md:text-2xl">Dashboard</h1>
              <p className="mt-1 text-xs text-slate-400 md:text-sm">
                Tổng quan số liệu và hoạt động xuất nhập kho hàng ngày
              </p>
            </div>

            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <StatCard key={stat.title} {...stat} />
              ))}
            </section>

            <InventoryCharts />
          </div>
        </main>
      </div>
    </div>
  )
}

