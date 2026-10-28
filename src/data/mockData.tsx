export type StatItem = {
    id?: string
    title: string
    value: string
    badge: {
        value: string
        isPositive?: boolean
        isNegative?: boolean
    }
    comparisonTitle: string
    comparisonDetail: string
    trend?: 'up' | 'down' | 'neutral'
}

export const stats: StatItem[] = [
    {
        title: 'Số Lượng Xuất Kho',
        value: '8,751',
        badge: {
            value: '-10.8%',
            isNegative: true,
        },
        comparisonTitle: 'Thấp hơn tháng trước',
        comparisonDetail: 'Giảm mạnh (34,532 đôi) so với kỳ trước',
        trend: 'down',
    },
    {
        title: 'Số Lượng Nhập Kho',
        value: '24,850',
        badge: {
            value: '+12.8%',
            isPositive: true,
        },
        comparisonTitle: 'Cao hơn tháng trước',
        comparisonDetail: 'Tăng trưởng (2,815 đôi) so với kỳ trước',
        trend: 'up',
    },
    {
        title: 'Tồn Kho Hiện Tại',
        value: '42,680',
        badge: {
            value: '+4.5%',
            isPositive: true,
        },
        comparisonTitle: 'Mức dự trữ an toàn',
        comparisonDetail: 'Đạt 95% công suất thiết kế của kho',
        trend: 'up',
    },
    {
        title: 'Vòng Quay Tồn Kho',
        value: '4.6x',
        badge: {
            value: '+0.4x',
            isPositive: true,
        },
        comparisonTitle: 'Tốc độ luân chuyển tốt',
        comparisonDetail: 'Cao hơn mức trung bình ngành 15%',
        trend: 'up',
    },
]
