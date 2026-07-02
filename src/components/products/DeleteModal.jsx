import { FiAlertTriangle, FiLoader } from 'react-icons/fi'
import ProductModal from './ProductModal'

export default function DeleteModal({ product, open, onClose, onConfirm, isDeleting }) {
  return (
    <ProductModal open={open} onClose={onClose} title="Hapus Produk">
      <div className="px-5 py-6 text-center sm:px-8">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-red-50 text-red-600">
          <FiAlertTriangle size={28} />
        </div>
        <h3 className="mt-5 text-lg font-extrabold text-charcoal-900">
          Hapus {product?.name}?
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-charcoal-700/50">
          Produk yang sudah dihapus tidak dapat dikembalikan. Tindakan ini hanya memengaruhi data dummy.
        </p>
        <div className="mt-7 flex flex-col-reverse gap-2 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-charcoal-900/10 px-5 py-3 text-sm font-bold text-charcoal-700 hover:bg-cream-100"
          >
            Batal
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={isDeleting}
            className="flex min-w-[130px] items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white hover:bg-red-700 disabled:cursor-wait disabled:opacity-60"
          >
            {isDeleting && <FiLoader className="animate-spin" />}
            Ya, Hapus
          </button>
        </div>
      </div>
    </ProductModal>
  )
}
