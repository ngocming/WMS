import { useState } from 'react'
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { stockConditionData } from '../../../data/chartData'

const COLORS = ['#3b82f6', '#f59e0b']
const TOTAL = stockConditionData.reduce((s, d) => s + d.value, 0)

export default function Pie_Chart() {
    const [selected, setSelected] = useState(stockConditionData[0].name)

    const selectedItem = stockConditionData.find(d => d.name === selected)

    return (
        <section className="flex h-full flex-col rounded-xl border border-slate-400/20 bg-black p-5 hover:border-gray-500">
            <h3 className="text-lg font-medium">Tổng Quan Tồn Kho Hàng Lỗi</h3>
            <p className="mt-0.5 text-sm text-zinc-400">
                Cơ cấu tồn kho hàng lỗi theo từng loại.
            </p>
            <div className="relative h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={stockConditionData}
                            dataKey="value"
                            cx="50%" cy="50%"
                            innerRadius={62} outerRadius={90}
                            paddingAngle={2}
                            stroke="none"
                            isAnimationActive={false}
                        >
                            {stockConditionData.map((_, i) => (
                                <Cell
                                    key={i}
                                    fill={COLORS[i]}
                                />
                            ))}
                        </Pie>
                        <Pie
                            data={stockConditionData}
                            dataKey="value"
                            cx="50%" cy="50%"
                            innerRadius={93} outerRadius={100}
                            paddingAngle={2}
                            stroke="none"
                            isAnimationActive={false}
                        >
                            {stockConditionData.map((d, i) => (
                                <Cell
                                    key={i}
                                    fill={d.name === selected ? COLORS[i] : 'transparent'}
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold tabular-nums text-white">
                        {(selectedItem?.value ?? TOTAL).toLocaleString()}
                    </span>
                    <span className="mt-0.5 text-xs text-slate-500">Đôi</span>
                </div>
            </div>

            <div className="mt-0.5 flex justify-center">
                <div className="relative inline-block">
                    <span
                        className="absolute left-3 top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: COLORS[stockConditionData.findIndex(d => d.name === selected)] }}
                    />
                    <select
                        value={selected}
                        onChange={e => setSelected(e.target.value)}
                        className="appearance-none rounded-lg border border-slate-700 bg-black py-2 pl-8 pr-8 text-sm text-slate-200"
                    >
                        {stockConditionData.map(d => (
                            <option key={d.name} value={d.name}>{d.name}</option>
                        ))}
                    </select>
                    <svg className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4M8 15l4 4 4-4" />
                    </svg>
                </div>
            </div>

            <div className="mt-auto border-t border-slate-800 pt-4">
                <p className="text-sm font-semibold text-white">
                    Số lượng kiểm kê : {TOTAL.toLocaleString('vi-VN')} (prs/pcs)
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                    Tổng số lượng tồn kho được cập nhật theo kiểm kê mới nhất.
                </p>
            </div>
        </section >
    )
}