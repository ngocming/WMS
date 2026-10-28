import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    LineChart,
    Line,
    PieChart,
    Pie,
    Cell,
} from 'recharts'

import {
    monthlyData,
    stockConditionData,
} from '../../data/chartData'

const COLORS = ['#34d399', '#f87171']

export default function InventoryCharts() {
    const netFlowData = monthlyData.map((item) => ({
        month: item.month,
        netFlow: item.inbound - item.outbound,
    }))

    return (
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <section className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                <h2 className="mb-5 text-lg font-semibold text-white">
                    Nhập kho và xuất kho
                </h2>

                <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={monthlyData}>
                            <CartesianGrid
                                strokeDasharray="3 3"
                                stroke="#596243ff"
                            />

                            <XAxis dataKey="month" stroke="#94a3b8" />
                            <YAxis stroke="#94a3b8" />

                            <Tooltip
                                contentStyle={{
                                    backgroundColor: '#0f172a',
                                    border: '1px solid #334155',
                                    borderRadius: '8px',
                                }}
                            />

                            <Legend />

                            <Bar
                                dataKey="inbound"
                                name="Nhập kho"
                                fill="#60a5fa"
                                radius={[4, 4, 0, 0]}
                            />

                            <Bar
                                dataKey="outbound"
                                name="Xuất kho"
                                fill="#a78bfa"
                                radius={[4, 4, 0, 0]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </section>
            <section className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                <h2 className="mb-5 text-lg font-semibold text-white">
                    Luồng hàng ròng
                </h2>
                <p>
                    Dòng chảy ròng hàng hóa (chênh lệch giữa nhập và xuất của kho hàng trong 6 tháng vừa qua)
                </p>
                <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={netFlowData}>
                            <CartesianGrid
                                strokeDasharray="3 3"
                                stroke="#334155"
                            />

                            <XAxis dataKey="month" stroke="#94a3b8" />
                            <YAxis stroke="#94a3b8" />
                            <Tooltip />
                            <Legend />

                            <Line
                                type="monotone"
                                dataKey="netFlow"
                                name="Nhập - Xuất"
                                stroke="#34d399"
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </section>
            <section className="rounded-xl border border-slate-800 bg-slate-900 p-5 xl:col-span-2">
                <h2 className="mb-5 text-lg font-semibold text-white">
                    Tình trạng hàng tồn kho
                </h2>
                 <p>
                    Cơ cấu tồn kho hàng lỗi theo từng loại
                </p>                   
                <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={stockConditionData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={95}
                                label={({ name, percent }) =>
                                    `${name}: ${((percent ?? 0) * 100).toFixed(0)}%`
                                }
                            >
                                {stockConditionData.map((item, index) => (
                                    <Cell
                                        key={item.name}
                                        fill={COLORS[index]}
                                    />
                                ))}
                            </Pie>

                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </section>
        </div>
    )
}