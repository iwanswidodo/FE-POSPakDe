import { FiEdit2, FiEye, FiTrash2 } from 'react-icons/fi'
import { formatCurrency } from '../../utils/formatCurrency'
import ProductThumbnail from './ProductThumbnail'

export default function ProductRow({ product, onView, onEdit, onDelete }) {
  const actions = [
    {
      label: `Lihat ${product.name}`,
      icon: FiEye,
      onClick: () => onView(product),
      className: 'hover:bg-blue-50 hover:text-blue-600',
    },
    {
      label: `Edit ${product.name}`,
      icon: FiEdit2,
      onClick: () => onEdit(product),
      className: 'hover:bg-gold-100 hover:text-gold-700',
    },
    {
      label: `Hapus ${product.name}`,
      icon: FiTrash2,
      onClick: () => onDelete(product),
      className: 'hover:bg-red-50 hover:text-red-600',
    },
  ]

  return (
    <tr className="group border-b border-charcoal-900/5 last:border-0 hover:bg-cream-50/70">
      <td className="px-5 py-4">
        <ProductThumbnail image={product.image} name={product.name} />
      </td>
      <td className="whitespace-nowrap px-5 py-4">
        <p className="text-sm font-bold text-charcoal-900">{product.name}</p>
        <p className="mt-1 text-[11px] text-charcoal-700/40">ID #{String(product.id).padStart(4, '0')}</p>
      </td>
      <td className="whitespace-nowrap px-5 py-4 text-sm text-charcoal-700/65">{product.category}</td>
      <td className="whitespace-nowrap px-5 py-4 text-sm font-bold text-charcoal-800">
        {formatCurrency(product.price)}
      </td>
      <td className="whitespace-nowrap px-5 py-4">
        <span
          className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${
            product.status === 'ACTIVE'
              ? 'bg-emerald-50 text-emerald-700'
              : 'bg-charcoal-900/5 text-charcoal-700/55'
          }`}
        >
          {product.status === 'ACTIVE' ? 'Aktif' : 'Nonaktif'}
        </span>
      </td>
      <td className="px-5 py-4">
        <div className="flex items-center gap-1">
          {actions.map(({ label, icon: Icon, onClick, className }) => (
            <button
              key={label}
              type="button"
              onClick={onClick}
              aria-label={label}
              title={label}
              className={`grid h-9 w-9 place-items-center rounded-lg text-charcoal-700/45 transition ${className}`}
            >
              <Icon size={16} />
            </button>
          ))}
        </div>
      </td>
    </tr>
  )
}
