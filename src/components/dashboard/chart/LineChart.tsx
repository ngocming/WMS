import { useState } from 'react'
import {
    ResponsiveContainer,
    LineChart, Line,
    XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts'

import { TrendingDown } from 'lucide-react'
import { netFlowData } from '../../../data/chartData'
import { tooltip, SectionTitle } from './tool'

export interface NetFlowPoint {
    month: string
    netFlow: number
}

interface LineChartProps {
    data?: NetFlowPoint[]
}

export default function Line_Chart({ data }: LineChartProps) {
    const [history] = useState<NetFlowPoint[]>(data ?? netFlowData)
    const visibleData = (data ?? history).slice(-6)

    const firstMonth = visibleData[0]?.month ?? ''
    const lastMonth = visibleData[visibleData.length - 1]?.month ?? ''

    return (
        <section className="rounded-xl border border-slate-800 bg-black p-5">
            <SectionTitle
                title="Dòng Hàng Ròng"
                sub="Dòng chảy ròng hàng hóa (chênh lệch giữa nhập và xuất của kho theo thời gian) trong 6 tháng"
            />
            <div className="h-52">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={visibleData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                        <XAxis dataKey="month" stroke="#475569" tick={{ fontSize: 10, fill: '#64748b' }} tickLine={false} axisLine={false} />
                        <YAxis stroke="#475569" tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} tick={{ fontSize: 10, fill: '#64748b' }} tickLine={false} axisLine={false} />
                        <Tooltip {...tooltip} formatter={(v: number) => [v.toLocaleString(), 'Chênh lệch']} />
                        <Line
                            type="monotone" dataKey="netFlow"
                            stroke="#3b82f6" strokeWidth={2}
                            dot={{ fill: '#3b82f6', r: 3, strokeWidth: 0 }}
                            activeDot={{ r: 5, fill: '#60a5fa' }}
                            isAnimationActive={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="mt-3 border-t border-slate-800 pt-3">
                <p className="flex items-center gap-1.5 text-xs font-medium">
                    Xu hướng giảm mạnh (−26.22%) tháng này<TrendingDown className="h-3 w-3" />
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                    {firstMonth && lastMonth ? `${firstMonth} – ${lastMonth} · 6 tháng gần nhất` : '6 tháng gần nhất'}
                </p>
            </div>
        </section>
    )
}