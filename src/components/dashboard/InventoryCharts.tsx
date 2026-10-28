import Bar_Chart from './chart/BarChart'
import Line_Chart from './chart/LineChart'
import Pie_Chart from './chart/PieChart'
import Area_Chart from './chart/AreaChart'

export default function InventoryCharts() {
    return (
        <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-2">
            <Bar_Chart />
            <Line_Chart />
            <Pie_Chart />
            <Area_Chart />
        </div>
    )
}
