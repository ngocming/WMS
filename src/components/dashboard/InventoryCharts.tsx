import {
    ResponsiveContainer,
    BarChart, Bar,
    XAxis, YAxis, CartesianGrid, Tooltip, Legend,
    LineChart, Line,
    PieChart, Pie, Cell,
    AreaChart, Area,
} from 'recharts'
import { useState } from 'react'
import { monthlyData, stockConditionData, areaData3M, areaData30D, areaData7D } from '../../data/chartData'

const DONUT_COLORS = ['#3b82f6', '#f59e0b']
const TOTAL_STOCK = stockConditionData.reduce((s, d) => s + d.value, 0)

const netFlowData = monthlyData.map((d) => ({
    month: d.month,
    netFlow: Math.abs(d.inbound - d.outbound),
}))

const tooltip = {
    contentStyle: {
        backgroundColor: '#0f172a',
        border: '1px solid #1e293b',
        borderRadius: '10px',
        fontSize: '13px',
        color: '#e2e8f0',
    },
    cursor: { fill: 'rgba(255,255,255,0.04)' },
}

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return (
        <section className={`rounded-xl border border-slate-800 bg-slate-900 p-5 ${className}`}>
            {children}
        </section>
    )
}

function SectionTitle({ title, sub }: { title: string; sub?: string }) {
    return (
        <div className="mb-4">
            <h2 className="text-base font-semibold text-white">{title}</h2>
            {sub && <p className="mt-0.5 text-xs text-slate-500">{sub}</p>}
        </div>
    )
}

export default function InventoryCharts() {
    const [activeRange, setActiveRange] = useState<'3m' | '30d' | '7d'>('3m')
    const ranges = [
        { key: '3m', label: '3 tháng' },
        { key: '30d', label: '30 ngày' },
        { key: '7d', label: '7 ngày' },
    ] as const

    const areaData = activeRange === '30d' ? areaData30D
        : activeRange === '7d' ? areaData7D
            : areaData3M

    return (
        <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-2">
            <Card className="xl:col-span-2">
                <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                    <SectionTitle
                        title="Tổng Quan Nhập / Xuất Kho"
                        sub="Tháng 01 – Tháng 12 · 2026"
                    />
                    <span className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs text-slate-400">
                        2026
                    </span>
                </div>
                <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={monthlyData} barCategoryGap="25%" barGap={3}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                            <XAxis dataKey="month" stroke="#475569" tick={{ fontSize: 10, fill: '#64748b' }} tickLine={false} axisLine={false} />
                            <YAxis stroke="#475569" tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} tick={{ fontSize: 10, fill: '#64748b' }} tickLine={false} axisLine={false} />
                            <Tooltip {...tooltip} formatter={(value: number, name: string) => [
                                Number(value).toLocaleString('vi-VN'), name
                            ]} />
                            <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '12px' }} />
                            <Bar dataKey="inbound" name="Nhập kho" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="outbound" name="Xuất kho" fill="#ec4899" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </Card>

            <Card>
                <SectionTitle
                    title="Dòng Hàng Ròng"
                    sub="Chênh lệch theo tháng"
                />
                <div className="h-52">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={netFlowData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                            <XAxis dataKey="month" stroke="#475569" tick={{ fontSize: 10, fill: '#64748b' }} tickLine={false} axisLine={false} />
                            <YAxis stroke="#475569" tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} tick={{ fontSize: 10, fill: '#64748b' }} tickLine={false} axisLine={false} />
                            <Tooltip {...tooltip} formatter={(v: number) => [v.toLocaleString(), 'Chênh lệch']} />
                            <Line
                                type="monotone" dataKey="netFlow"
                                stroke="#3b82f6" strokeWidth={2}
                                dot={{ fill: '#3b82f6', r: 3, strokeWidth: 0 }}
                                activeDot={{ r: 5, fill: '#60a5fa' }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="mt-3 border-t border-slate-800 pt-3">
                    <p className="flex items-center gap-1.5 text-xs font-medium text-red-400">
                        <span>↘</span> Xu hướng giảm mạnh (−26.22%) tháng này
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">1 thg 4 – 27 thg 10 · 2026</p>
                </div>
            </Card>

            <Card>
                <SectionTitle
                    title="Tồn Kho Hàng Lỗi"
                    sub="Cơ cấu theo từng loại"
                />
                <div className="relative h-52">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={stockConditionData} dataKey="value"
                                cx="50%" cy="50%"
                                innerRadius={58} outerRadius={86}
                                startAngle={90} endAngle={-270}
                                paddingAngle={3}
                            >
                                {stockConditionData.map((_, i) => (
                                    <Cell key={i} fill={DONUT_COLORS[i]} stroke="transparent" />
                                ))}
                            </Pie>
                            <Tooltip {...tooltip} formatter={(v: number) => [v.toLocaleString(), '']} />
                            <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '8px' }} />
                        </PieChart>
                    </ResponsiveContainer>

                    <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center pb-5">
                        <span className="text-2xl font-bold tabular-nums text-white">{TOTAL_STOCK.toLocaleString()}</span>
                        <span className="text-xs text-slate-500">Đôi</span>
                    </div>
                </div>

                <div className="mt-2 border-t border-slate-800 pt-3">
                    <p className="text-sm text-slate-300">
                        Kiểm kê: <span className="font-semibold text-white">2,577 prs/pcs</span>
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">Cập nhật theo đợt kiểm kê mới nhất</p>
                </div>
            </Card>

            <Card className="xl:col-span-2">
                <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                    <SectionTitle
                        title="Sản Lượng Thành Phẩm"
                        sub="Chi tiết theo nhãn hàng"
                    />

                    <div className="flex rounded-lg border border-slate-700 bg-slate-800 p-0.5">
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
            </Card>

        </div>
    )
}