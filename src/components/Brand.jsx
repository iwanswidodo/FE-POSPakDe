import { FiShoppingBag } from 'react-icons/fi'

export default function Brand({ compact = false, inverse = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold-400 text-xl text-charcoal-950 shadow-lg shadow-gold-950/20">
        <FiShoppingBag />
      </div>
      {!compact && (
        <div className="leading-tight">
          <p className={`text-sm font-extrabold tracking-tight ${inverse ? 'text-white' : 'text-charcoal-900'}`}>
            POS Pak De Surya
          </p>
          <p className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] ${inverse ? 'text-white/45' : 'text-charcoal-700/60'}`}>
            Point of Sale
          </p>
        </div>
      )}
    </div>
  )
}
