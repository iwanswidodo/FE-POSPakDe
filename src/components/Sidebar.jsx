import { NavLink } from 'react-router-dom'
import { FiX } from 'react-icons/fi'
import Brand from './Brand'
import { navigationItems } from '../constants/navigation'

export default function Sidebar({ open, onClose }) {
  return (
    <>
      <button
        type="button"
        aria-label="Tutup sidebar"
        onClick={onClose}
        className={`fixed inset-0 z-30 bg-charcoal-950/55 backdrop-blur-sm transition-opacity lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-[280px] flex-col bg-charcoal-900 px-5 py-6 text-white shadow-sidebar transition-transform duration-300 lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-2">
          <Brand inverse />
          <button
            type="button"
            aria-label="Tutup menu"
            onClick={onClose}
            className="grid h-9 w-9 place-items-center rounded-lg text-white/60 hover:bg-white/10 hover:text-white lg:hidden"
          >
            <FiX size={20} />
          </button>
        </div>

        <p className="mb-3 mt-10 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
          Menu utama
        </p>
        <nav className="space-y-1.5">
          {navigationItems.map(({ label, path, icon: Icon }) => (
            <NavLink
              key={label}
              to={path}
              onClick={onClose}
              className={({ isActive }) =>
                `group flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium transition ${
                  isActive
                    ? 'bg-gold-400 text-charcoal-950 shadow-lg shadow-black/20'
                    : 'text-white/60 hover:bg-white/[0.07] hover:text-white'
                }`
              }
            >
              <Icon size={19} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <p className="text-xs font-semibold text-white/80">Butuh bantuan?</p>
          <p className="mt-1.5 text-[11px] leading-relaxed text-white/40">
            Hubungi tim dukungan untuk bantuan operasional.
          </p>
        </div>
      </aside>
    </>
  )
}
