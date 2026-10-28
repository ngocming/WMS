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
    const TrendIcon = trend === 'down' ? TrendingDown : TrendingUp

    return (
        <article className="
            group relative overflow-hidden rounded-xl
            border border-slate-800/60 bg-slate-900
            p-5 shadow-sm
            transition-all duration-200
            hover:border-slate-700 hover:shadow-lg hover:shadow-black/20
            hover:-translate-y-0.5
        ">
            {/* Subtle glow on hover */}
            <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 ring-1 ring-inset ring-blue-500/10 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Title + Badge */}
            <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-medium text-slate-400">{title}</span>
                <span className={`
                    inline-flex items-center gap-1 rounded-md px-2 py-0.5
                    text-xs font-semibold tracking-tight
                    ${isNegative
                        ? 'bg-red-500/10 text-red-400 ring-1 ring-red-500/20'
                        : 'bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20'}
                `}>
                    {isNegative
                        ? <TrendingDown className="h-3 w-3" strokeWidth={2.5} />
                        : <TrendingUp   className="h-3 w-3" strokeWidth={2.5} />}
                    {badge.value}
                </span>
            </div>

            {/* Value */}
            <div className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {value}
            </div>

            {/* Separator + Comparison */}
            <div className="mt-4 border-t border-slate-800/80 pt-3.5 space-y-0.5">
                <div className="flex items-center gap-1.5 text-sm font-medium text-slate-300">
                    <TrendIcon className="h-3.5 w-3.5 shrink-0 text-slate-400" strokeWidth={2.5} />
                    {comparisonTitle}
                </div>
                <p className="text-xs leading-relaxed text-slate-500">{comparisonDetail}</p>
            </div>
        </article>
    )
}
