import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export default function Pagination({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
}) {
  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * pageSize + 1
  const endItem = Math.min(currentPage * pageSize, totalItems)

  return (
    <div className="flex flex-col gap-3 border-t border-charcoal-900/5 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <p className="text-xs text-charcoal-700/50">
        Menampilkan <span className="font-bold text-charcoal-800">{startItem}–{endItem}</span> dari{' '}
        <span className="font-bold text-charcoal-800">{totalItems}</span> produk
      </p>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Halaman sebelumnya"
          className="grid h-9 w-9 place-items-center rounded-lg border border-charcoal-900/10 text-charcoal-700 transition hover:border-gold-300 hover:text-gold-700 disabled:cursor-not-allowed disabled:opacity-35"
        >
          <FiChevronLeft />
        </button>
        <span className="min-w-[100px] text-center text-xs font-semibold text-charcoal-700">
          Halaman {currentPage} dari {totalPages}
        </span>
        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Halaman berikutnya"
          className="grid h-9 w-9 place-items-center rounded-lg border border-charcoal-900/10 text-charcoal-700 transition hover:border-gold-300 hover:text-gold-700 disabled:cursor-not-allowed disabled:opacity-35"
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  )
}
