import { FiFilter } from 'react-icons/fi'

export default function FilterBar({
  categories,
  category,
  status,
  onCategoryChange,
  onStatusChange,
}) {
  const selectClasses =
    'h-11 min-w-0 rounded-xl border border-charcoal-900/10 bg-white px-3 text-sm font-medium text-charcoal-700 outline-none transition focus:border-gold-400 focus:ring-4 focus:ring-gold-100'

  return (
    <div className="flex flex-1 flex-wrap items-center gap-2">
      <div className="hidden h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold-100 text-gold-700 sm:grid">
        <FiFilter />
      </div>
      <select
        value={category}
        onChange={(event) => onCategoryChange(event.target.value)}
        aria-label="Filter kategori"
        className={`${selectClasses} flex-1 sm:flex-none`}
      >
        <option value="ALL">Semua Kategori</option>
        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <select
        value={status}
        onChange={(event) => onStatusChange(event.target.value)}
        aria-label="Filter status"
        className={`${selectClasses} flex-1 sm:flex-none`}
      >
        <option value="ALL">Semua Status</option>
        <option value="ACTIVE">Aktif</option>
        <option value="INACTIVE">Nonaktif</option>
      </select>
    </div>
  )
}
