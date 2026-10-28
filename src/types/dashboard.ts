export type StatCardData = {
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