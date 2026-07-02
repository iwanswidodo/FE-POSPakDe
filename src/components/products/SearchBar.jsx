import { FiSearch, FiX } from 'react-icons/fi'

export default function SearchBar({ value, onChange }) {
  return (
    <div className="flex h-11 w-full items-center rounded-xl border border-charcoal-900/10 bg-white px-3.5 transition focus-within:border-gold-400 focus-within:ring-4 focus-within:ring-gold-100 lg:max-w-sm">
      <FiSearch className="shrink-0 text-charcoal-700/40" />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Cari nama produk..."
        aria-label="Cari produk"
        className="min-w-0 flex-1 bg-transparent px-2.5 text-sm outline-none placeholder:text-charcoal-700/35"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="Hapus pencarian"
          className="grid h-7 w-7 place-items-center rounded-lg text-charcoal-700/40 hover:bg-cream-100 hover:text-charcoal-900"
        >
          <FiX />
        </button>
      )}
    </div>
  )
}
