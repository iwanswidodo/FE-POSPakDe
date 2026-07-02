import { FiBell, FiLogOut, FiMenu } from 'react-icons/fi'

export default function Navbar({ onMenuClick, onLogout }) {
  return (
    <header className="sticky top-0 z-20 flex h-[76px] items-center justify-between border-b border-charcoal-900/5 bg-cream-50/85 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Buka menu"
          onClick={onMenuClick}
          className="grid h-10 w-10 place-items-center rounded-xl border border-charcoal-900/10 bg-white text-charcoal-800 lg:hidden"
        >
          <FiMenu size={20} />
        </button>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal-700/45">
            Kamis, 2 Juli 2026
          </p>
          <p className="mt-0.5 text-sm font-bold text-charcoal-900 sm:hidden">Dashboard</p>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          aria-label="Notifikasi"
          className="relative grid h-10 w-10 place-items-center rounded-xl border border-charcoal-900/10 bg-white text-charcoal-700 transition hover:border-gold-300 hover:text-gold-600"
        >
          <FiBell size={18} />
          <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full border-2 border-white bg-gold-500" />
        </button>

        <div className="hidden items-center gap-3 border-l border-charcoal-900/10 pl-3 sm:flex">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-charcoal-900 text-xs font-bold text-gold-300">
            AS
          </div>
          <div className="hidden leading-tight md:block">
            <p className="text-sm font-bold text-charcoal-900">Admin Surya</p>
            <p className="mt-1 text-[11px] text-charcoal-700/50">Administrator</p>
          </div>
        </div>

        <button
          type="button"
          onClick={onLogout}
          className="flex h-10 items-center gap-2 rounded-xl border border-charcoal-900/10 bg-white px-3 text-sm font-semibold text-charcoal-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
        >
          <FiLogOut size={17} />
          <span className="hidden md:inline">Keluar</span>
        </button>
      </div>
    </header>
  )
}
