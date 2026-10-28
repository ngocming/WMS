import {
    ResponsiveContainer,
    BarChart, Bar,
    XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts'
import { monthlyData } from '../../../data/chartData'
import { tooltip } from '../UI/Tooltip'
import { CalendarDays } from 'lucide-react'
export default function Bar_Chart() {
    return (
        <section className="rounded-xl border border-slate-400/20 bg-black p-5 xl:col-span-2 ">
            <div className="mb-4 flex flex-wrap items-start justify-between gap-3 ">
                <div>
                    <h3 className="text-lg font-medium">Tổng Quan Nhập / Xuất Kho</h3>
                    <p className="mt-0.5 text-sm text-zinc-400">
                        Tháng 01 – Tháng 12 · 2026
                    </p>
                </div>
                <span className="rounded-lg border border-gray-400/20 bg-black px-3 py-1.5 text-xs text-slate-400 flex items-center gap-2">
                    <CalendarDays size={16} className='text-white' />
                    <select
                        className='bg-transparent text-white border-none outline-none'
                        value='2026'
                        onChange={(e) => console.log(e.target.value)}
                    >
                        <option value="2026" className="bg-slate-800">2026</option>
                    </select>
                </span>
            </div>
            <div className="h-72 px-4">
                <ResponsiveContainer width="100%" height="100%" >
                    <BarChart data={monthlyData} barCategoryGap="25%" barGap={3}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                        <XAxis dataKey="month" stroke="#475569" tick={{ fontSize: 10, fill: '#64748b' }} tickLine={false} axisLine={false} />
                        <YAxis stroke="#aaaeb3ff" tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} tick={{ fontSize: 10, fill: '#64748b' }} tickLine={true} axisLine={true} />
                        <Tooltip {...tooltip} formatter={(value: number, name: string) => [
                            Number(value).toLocaleString('vi-VN'), name
                        ]} />
                        <Legend
                            iconType="square"
                            iconSize={10}
                            formatter={(value: string) => (
                                <span className="text-xs font-normal text-slate-100 ml-1.5 mr-6">
                                    {value}
                                </span>
                            )}
                        />
                        <Bar dataKey="inbound" name="Số lượng nhập kho" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="outbound" name="Số lượng xuất kho" fill="#ec4899" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </section>
    )
}
