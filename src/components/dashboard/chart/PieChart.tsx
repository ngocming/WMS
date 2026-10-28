import {
    ResponsiveContainer,
    PieChart, Pie, Cell, Legend,Tooltip,
} from 'recharts'

import { stockConditionData } from '../../../data/chartData'
import { tooltip, SectionTitle } from './tool'

const DONUT_COLORS = ['#3b82f6', '#f59e0b']
const TOTAL_STOCK = stockConditionData.reduce((s, d) => s + d.value, 0)

export default function Pie_Chart() {
    return (
        <section className="rounded-xl border border-slate-800 bg-black p-5">
                <SectionTitle
                    title="Tổng Quan Tồn Kho Hàng Lỗi"
                    sub="Cơ cấu tồn kho theo từng loại"
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
            </section>
    )
}