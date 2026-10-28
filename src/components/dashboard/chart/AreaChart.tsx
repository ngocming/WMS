import { useState } from 'react'
import {
    ResponsiveContainer,
    AreaChart, Area,
    XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts'
import { areaData3M, areaData30D, areaData7D } from '../../../data/chartData'
import { tooltip, SectionTitle } from './tool'

export default function Area_Chart() {
    const [activeRange, setActiveRange] = useState<'3m' | '30d' | '7d'>('3m')
    const ranges = [
        { key: '3m', label: '3 tháng gần nhất' },
        { key: '30d', label: '30 ngày gần nhất' },
        { key: '7d', label: '7 ngày gần nhất' },
    ] as const

    const areaData = activeRange === '30d' ? areaData30D
        : activeRange === '7d' ? areaData7D
            : areaData3M

    return (
        <section className="xl:col-span-2 rounded-xl border border-slate-800 bg-black p-5">
            <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <SectionTitle
                    title="Sản Lượng Thành Phẩm"
                    sub="Chi tiết theo nhãn hàng"
                />

                <div className="flex rounded-lg border border-slate-700 bg-black p-0.5">
                    {ranges.map(({ key, label }) => (
                        <button
                            key={key}
                            onClick={() => setActiveRange(key)}
                            className={`rounded px-3 py-1.5 text-xs font-medium transition-colors ${activeRange === key
                                ? 'bg-blue-600 text-white'
                                : 'text-slate-400 hover:text-white'
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mb-5 flex flex-wrap gap-6">
                {[['UGG', '183,892'], ['TEVA', '0'], ['KOOLABURRA', '0']].map(([brand, val]) => (
                    <div key={brand}>
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">{brand}</p>
                        <p className="text-xl font-bold text-white">{val}</p>
                    </div>
                ))}
            </div>

            <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={areaData}>
                        <defs>
                            <linearGradient id="ugGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.25} />
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                        <XAxis dataKey="date" stroke="#475569" tick={{ fontSize: 9, fill: '#64748b' }} tickLine={false} axisLine={false} />
                        <YAxis stroke="#475569" tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} tick={{ fontSize: 10, fill: '#64748b' }} tickLine={false} axisLine={false} />
                        <Tooltip {...tooltip} formatter={(v: number) => [v.toLocaleString(), 'UGG']} />
                        <Area type="monotone" dataKey="UGG" stroke="#3b82f6" strokeWidth={2} fill="url(#ugGrad)" dot={false} activeDot={{ r: 4, fill: '#60a5fa' }} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </section>
    )
}
