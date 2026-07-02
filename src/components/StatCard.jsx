import { FiArrowUpRight } from 'react-icons/fi'

export default function StatCard({ label, value, helper, icon: Icon, accent }) {
  return (
    <article className="surface-card group relative overflow-hidden p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div
        className="absolute -right-7 -top-8 h-24 w-24 rounded-full opacity-10 transition-transform duration-500 group-hover:scale-125"
        style={{ backgroundColor: accent }}
      />
      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold text-charcoal-700/55">{label}</p>
          <p className="mt-3 text-2xl font-extrabold tracking-tight text-charcoal-900">{value}</p>
        </div>
        <div
          className="grid h-11 w-11 place-items-center rounded-xl"
          style={{ backgroundColor: `${accent}18`, color: accent }}
        >
          <Icon size={20} />
        </div>
      </div>
      <p className="relative mt-4 flex items-center gap-1.5 text-[11px] text-charcoal-700/50">
        <span className="flex items-center font-bold text-emerald-600">
          <FiArrowUpRight />
          8.2%
        </span>
        {helper}
      </p>
    </article>
  )
}
