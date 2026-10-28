import type { StatCardData } from "../types/dashboard"
import { monthlyData } from "./chartData"

const validMonths = monthlyData.filter((d) => d.inbound > 0 || d.outbound > 0)

const currentMonth = validMonths[validMonths.length - 1] ?? { inbound: 0, outbound: 0 }

const prevMonth = validMonths[validMonths.length - 2] ?? { inbound: 0, outbound: 0 }

let currentStock = currentMonth.inbound - currentMonth.outbound
if (currentStock < 0) {
    currentStock = 0
}

let prevStock = prevMonth.inbound - prevMonth.outbound
if (prevStock < 0) {
    prevStock = 0
}
const calcChange = (curr: number, prev: number) => {
    if (prev === 0) return { pct: '0%', isNegative: false, diffText: '0' }
    const diff = curr - prev
    const pct = ((diff / prev) * 100).toFixed(1)
    return {
        pct: `${diff >= 0 ? '+' : ''}${pct}%`,
        isNegative: diff < 0,
        diffText: `${Math.abs(diff).toLocaleString('vi-VN')} đôi`,
    }
}

const outboundDiff = calcChange(currentMonth.outbound, prevMonth.outbound)
const inboundDiff = calcChange(currentMonth.inbound, prevMonth.inbound)
const StockDiff = calcChange(currentStock, prevStock)

export const stats: StatCardData[] = [
    {
        title: 'Số Lượng Xuất Kho (Tháng này)',
        value: currentMonth.outbound.toLocaleString('vi-VN'),
        badge: {
            value: outboundDiff.pct,
            isNegative: outboundDiff.isNegative,
        },
        comparisonTitle: outboundDiff.isNegative ? 'Thấp hơn tháng trước' : 'Cao hơn tháng trước',
        comparisonDetail: `${outboundDiff.isNegative ? 'Giảm' : 'Tăng'} (${outboundDiff.diffText}) so với kỳ trước`,
        trend: outboundDiff.isNegative ? 'down' : 'up',
    },
    {
        title: 'Số Lượng Nhập Kho (Tháng này)',
        value: currentMonth.inbound.toLocaleString('vi-VN'),
        badge: {
            value: inboundDiff.pct,
            isPositive: !inboundDiff.isNegative,
            isNegative: inboundDiff.isNegative,
        },
        comparisonTitle: inboundDiff.isNegative ? 'Thấp hơn tháng trước' : 'Cao hơn tháng trước',
        comparisonDetail: `${inboundDiff.isNegative ? 'Giảm' : 'Tăng'} (${inboundDiff.diffText}) so với kỳ trước`,
        trend: inboundDiff.isNegative ? 'down' : 'up',
    },
    {
        title: 'Tồn Kho Hiện Tại',
        value: currentStock.toLocaleString('vi-VN'),
        badge: {
            value: StockDiff.pct,
            isPositive: !StockDiff.isNegative,
            isNegative: StockDiff.isNegative,
        },
        comparisonTitle: StockDiff.isNegative ? 'Thấp hơn tháng trước' : 'Cao hơn tháng trước',
        comparisonDetail: `${StockDiff.isNegative ? 'Giảm' : 'Tăng'} (${StockDiff.diffText}) so với kỳ trước`,
        trend: StockDiff.isNegative ? 'down' : 'up',
    },
    {
        title: 'Vòng Quay Tồn Kho',
        value: '4.6',
        badge: {
            value: '+0.4',
            isPositive: true,
        },
        comparisonTitle: 'Cao hơn tháng trước',
        comparisonDetail: 'Tăng mạnh so với kỳ trước',
        trend: 'up',
    },
]

