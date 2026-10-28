export const tooltip = {
    contentStyle: {
        backgroundColor: '#0f172a',
        border: '1px solid #1e293b',
        borderRadius: '10px',
        fontSize: '13px',
        color: '#e2e8f0',
    },
    cursor: { fill: 'rgba(255,255,255,0.04)' },
}

export function SectionTitle({ title, sub }: { title: string; sub?: string }) {
    return (
        <div className= "mb-4" >
        <h2 className="text-base font-semibold text-white" > { title } </h2>
    { sub && <p className="mt-0.5 text-xs text-slate-500" > { sub } </p> }
    </div>
    )
}