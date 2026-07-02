import ProductRow from './ProductRow'

export default function ProductTable({ products, onView, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[820px] border-collapse text-left">
        <thead>
          <tr className="border-b border-charcoal-900/5 bg-cream-50/80">
            {['Gambar', 'Nama Produk', 'Kategori', 'Harga', 'Status', 'Aksi'].map(
              (heading) => (
                <th
                  key={heading}
                  scope="col"
                  className="whitespace-nowrap px-5 py-3.5 text-[10px] font-bold uppercase tracking-[0.12em] text-charcoal-700/45"
                >
                  {heading}
                </th>
              ),
            )}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductRow
              key={product.id}
              product={product}
              onView={onView}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}
