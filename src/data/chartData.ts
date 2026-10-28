export interface MonthlyDataPoint {
    month: string
    inbound: number
    outbound: number
}

export const monthlyData: MonthlyDataPoint[] = [
    { month: 'Tháng 01', inbound: 124580, outbound: 78320 },
    { month: 'Tháng 02', inbound: 89410, outbound: 62150 },
    { month: 'Tháng 03', inbound: 97840, outbound: 71290 },
    { month: 'Tháng 04', inbound: 113650, outbound: 84720 },
    { month: 'Tháng 05', inbound: 135290, outbound: 112480 },
    { month: 'Tháng 06', inbound: 168430, outbound: 147810 },
    { month: 'Tháng 07', inbound: 214760, outbound: 386350 },
    { month: 'Tháng 08', inbound: 179240, outbound: 163890 },
    { month: 'Tháng 09', inbound: 148920, outbound: 132470 },
    { month: 'Tháng 10', inbound: 72680, outbound: 23410 },
    { month: 'Tháng 11', inbound: 0, outbound: 0 },
    { month: 'Tháng 12', inbound: 0, outbound: 0 },
]

export const netFlowData = monthlyData
    .filter((d) => d.inbound > 0 || d.outbound > 0)
    .map((d) => ({
        month: d.month.replace('Tháng ', 'T'),
        netFlow: Math.abs(d.inbound - d.outbound),
    }))

export const stockConditionData = [
    { name: 'Loại B', value: 1868 },
    { name: 'Loại khác', value: 709 },
]

const seed = (i: number, base: number, amp: number, phase = 0) =>
    Math.floor(base + Math.sin(i * 0.8 + phase) * amp)

export const areaData3M = [
    '29 thg 7', '1 thg 8', '5 thg 8', '8 thg 8', '12 thg 8',
    '15 thg 8', '19 thg 8', '22 thg 8', '26 thg 8', '29 thg 8',
    '2 thg 9', '5 thg 9', '9 thg 9', '12 thg 9', '14 thg 9',
].map((date, i) => ({ date, UGG: seed(i, 150000, 80000) }))

export const areaData30D = Array.from({ length: 30 }, (_, i) => ({
    date: `${i + 1} thg 10`,
    UGG: seed(i, 130000, 60000, 1),
}))

export const areaData7D = [
    '8 thg 10', '9 thg 10', '10 thg 10',
    '11 thg 10', '12 thg 10', '13 thg 10', '14 thg 10',
].map((date, i) => ({ date, UGG: seed(i, 120000, 40000, 2) }))

export const areaChartData = areaData3M
