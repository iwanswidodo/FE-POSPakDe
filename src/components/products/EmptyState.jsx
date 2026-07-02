import { FiPackage, FiPlus, FiRefreshCw } from 'react-icons/fi'

export default function EmptyState({ isFiltered, onAdd, onReset }) {
  return (
    <div className="flex min-h-[360px] flex-col items-center justify-center px-6 text-center">
      <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gold-100 text-gold-700">
        <FiPackage size={28} />
      </div>
      <h3 className="mt-5 text-lg font-extrabold text-charcoal-900">
        {isFiltered ? 'Produk tidak ditemukan' : 'Belum ada produk'}
      </h3>
      <p className="mt-2 max-w-sm text-sm leading-6 text-charcoal-700/50">
        {isFiltered
          ? 'Coba ubah kata kunci atau filter untuk melihat produk lainnya.'
          : 'Tambahkan produk pertama agar dapat mulai mencatat transaksi.'}
      </p>
      <button
        type="button"
        onClick={isFiltered ? onReset : onAdd}
        className="mt-6 flex items-center gap-2 rounded-xl bg-charcoal-900 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-gold-500 hover:text-charcoal-950"
      >
        {isFiltered ? <FiRefreshCw /> : <FiPlus />}
        {isFiltered ? 'Reset filter' : 'Tambah Produk'}
      </button>
    </div>
  )
}
