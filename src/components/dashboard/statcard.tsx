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
        <div className="rounded-xl border border-[#1e293b] bg-[#111827] p-5 hover:border-slate-700">
            <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">{title}</span>
                <span className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs font-semibold ${
                    isNegative ? 'bg-rose-950/60 text-rose-400' : 'bg-emerald-950/60 text-emerald-400'
                }`}>
                    <TrendIcon className="h-3 w-3" />
                    {badge.value}
                </span>
            </div>

            <div className="mt-3 text-2xl font-bold text-white">
                {value}
            </div>

            <div className="mt-4 border-t border-[#1e293b] pt-3">
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-300">
                    <TrendIcon className="h-3.5 w-3.5 text-slate-400" />
                    <span>{comparisonTitle}</span>
                </div>
                <p className="mt-1 text-[11px] text-slate-500">{comparisonDetail}</p>
            </div>
        </div>
    )
}


