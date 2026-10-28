export const monthlyData = [
    { month: 'Tháng 01', inbound: 120000, outbound: 75000 },
    { month: 'Tháng 02', inbound: 85000, outbound: 60000 },
    { month: 'Tháng 03', inbound: 95000, outbound: 70000 },
    { month: 'Tháng 04', inbound: 110000, outbound: 80000 },
    { month: 'Tháng 05', inbound: 130000, outbound: 110000 },
    { month: 'Tháng 06', inbound: 160000, outbound: 500000 },
    { month: 'Tháng 07', inbound: 210000, outbound: 180000 },
    { month: 'Tháng 08', inbound: 175000, outbound: 160000 },
    { month: 'Tháng 09', inbound: 145000, outbound: 130000 },
    { month: 'Tháng 10', inbound: 70000, outbound: 20000 },
    { month: 'Tháng 11', inbound: 0, outbound: 0 },
    { month: 'Tháng 12', inbound: 0, outbound: 0 },
]

export const netFlowData = [
    { month: 'Apr', netFlow: 35000 },
    { month: 'May', netFlow: 28000 },
    { month: 'Jun', netFlow: 15000 },
    { month: 'Jul', netFlow: 8000 },
    { month: 'Aug', netFlow: 22000 },
    { month: 'Sep', netFlow: 18000 },
]

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