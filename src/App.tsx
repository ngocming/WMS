import './App.css'
import StatCard from './components/dashboard/statcard'
import { stats } from './data/mockData'

export default function App() {
  return (
    <main className="min-h-screen bg-black p-4 text-slate-100 md:p-8">
      <header className="mb-8">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-neutral-400">
          Cung cấp số liệu tổng quan về các chỉ số chính, bao gồm thống kê và hoạt động nhập/xuất kho và các hoạt động khác
        </p>
      </header>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </section>
    </main>
  )
}

