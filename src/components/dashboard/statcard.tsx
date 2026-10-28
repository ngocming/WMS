import { TrendingDown, TrendingUp } from 'lucide-react'
import type { StatCardData } from '../../types/dashboard'

type StatCardProps = StatCardData

export default function StatCard({
    title,
    value,
    badge,
    comparisonTitle,
    comparisonDetail,
    trend = 'down',
}: StatCardProps) {
    const isNegative = badge.isNegative ?? badge.value.startsWith('-')

    return (
        <article className="rounded-2xl border border-neutral-800/80 bg-neutral-800 p-5 shadow-sm transition-all duration-200 hover:border-white">
            <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-medium text-neutral-400 sm:text-base">
                    {title}
                </span>
                <div className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900/90 px-2.5 py-1 text-xs font-semibold">
                    {isNegative ? (
                        <TrendingDown className="h-3.5 w-3.5 text-red-500" strokeWidth={2.5} />
                    ) : (
                        <TrendingUp className="h-3.5 w-3.5 text-emerald-500" strokeWidth={2.5} />
                    )}
                    <span className="text-white tracking-tight">{badge.value}</span>
                </div>
            </div>

            <div className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-[40px]">
                {value}
            </div>

            <div className="mt-6 space-y-1">
                <div className="flex items-center gap-1.5 text-base font-semibold text-white">
                    <span>{comparisonTitle}</span>
                    {trend === 'down' ? (
                        <TrendingDown className="h-4 w-4 text-white shrink-0" strokeWidth={2.5} />
                    ) : (
                        <TrendingUp className="h-4 w-4 text-white shrink-0" strokeWidth={2.5} />
                    )}
                </div>
                <p className="text-sm text-neutral-400">{comparisonDetail}</p>
            </div>
        </article>
    )
}
