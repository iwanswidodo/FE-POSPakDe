import { FiHash, FiLayers, FiTag } from 'react-icons/fi'
import { formatCurrency } from '../../utils/formatCurrency'
import ProductThumbnail from './ProductThumbnail'

export default function ProductDetail({ product, onEdit, onClose }) {
  if (!product) return null

  return (
    <div className="px-5 py-6 sm:px-6">
      <div className="flex flex-col items-center rounded-2xl bg-cream-50 p-6 text-center">
        <ProductThumbnail image={product.image} name={product.name} size="lg" />
        <h3 className="mt-4 text-xl font-extrabold text-charcoal-900">{product.name}</h3>
        <p className="mt-2 text-lg font-extrabold text-gold-700">{formatCurrency(product.price)}</p>
        <span
          className={`mt-3 inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide ${
            product.status === 'ACTIVE'
              ? 'bg-emerald-50 text-emerald-700'
              : 'bg-charcoal-900/5 text-charcoal-700/55'
          }`}
        >
          {product.status === 'ACTIVE' ? 'Aktif' : 'Nonaktif'}
        </span>
      </div>
      <dl className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-charcoal-900/5 p-4">
          <dt className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wide text-charcoal-700/40">
            <FiHash /> ID Produk
          </dt>
          <dd className="mt-2 text-sm font-bold text-charcoal-800">
            #{String(product.id).padStart(4, '0')}
          </dd>
        </div>
        <div className="rounded-xl border border-charcoal-900/5 p-4">
          <dt className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wide text-charcoal-700/40">
            <FiLayers /> Kategori
          </dt>
          <dd className="mt-2 text-sm font-bold text-charcoal-800">{product.category}</dd>
        </div>
      </dl>
      <div className="mt-6 flex flex-col-reverse gap-2 border-t border-charcoal-900/5 pt-5 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={onClose}
          className="rounded-xl border border-charcoal-900/10 px-5 py-3 text-sm font-bold text-charcoal-700 hover:bg-cream-100"
        >
          Tutup
        </button>
        <button
          type="button"
          onClick={() => onEdit(product)}
          className="flex items-center justify-center gap-2 rounded-xl bg-charcoal-900 px-5 py-3 text-sm font-bold text-white hover:bg-gold-500 hover:text-charcoal-950"
        >
          <FiTag />
          Edit Produk
        </button>
      </div>
    </div>
  )
}
