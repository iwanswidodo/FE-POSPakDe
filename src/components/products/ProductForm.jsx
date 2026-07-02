import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { FiImage, FiLoader, FiUploadCloud, FiX } from 'react-icons/fi'
import ProductThumbnail from './ProductThumbnail'

const productSchema = z.object({
  name: z.string().trim().min(3, 'Nama produk minimal 3 karakter.'),
  category: z.string().min(1, 'Kategori wajib dipilih.'),
  price: z.coerce.number().min(1, 'Harga harus lebih dari Rp0.'),
  status: z.enum(['ACTIVE', 'INACTIVE']),
})

const inputClasses =
  'mt-2 w-full rounded-xl border border-charcoal-900/10 bg-white px-3.5 py-3 text-sm text-charcoal-900 outline-none transition placeholder:text-charcoal-700/30 focus:border-gold-400 focus:ring-4 focus:ring-gold-100'

export default function ProductForm({ product, onSubmit, onCancel, isSubmitting }) {
  const [imagePreview, setImagePreview] = useState(product?.image || 'placeholder')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: product?.name || '',
      category: product?.category || '',
      price: product?.price || '',
      status: product?.status || 'ACTIVE',
    },
  })

  useEffect(() => {
    reset({
      name: product?.name || '',
      category: product?.category || '',
      price: product?.price || '',
      status: product?.status || 'ACTIVE',
    })
    setImagePreview(product?.image || 'placeholder')
  }, [product, reset])

  const handleImageChange = (event) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => setImagePreview(reader.result)
    reader.readAsDataURL(file)
  }

  const submitForm = (values) =>
    onSubmit({
      ...values,
      image: imagePreview || 'placeholder',
    })

  return (
    <form onSubmit={handleSubmit(submitForm)} className="px-5 py-5 sm:px-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className="text-xs font-bold text-charcoal-700">Nama Produk</span>
          <input
            type="text"
            placeholder="Contoh: Mie Ayam Original"
            {...register('name')}
            className={inputClasses}
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-600">{errors.name.message}</p>}
        </label>

        <label className="block">
          <span className="text-xs font-bold text-charcoal-700">Kategori</span>
          <select {...register('category')} className={inputClasses}>
            <option value="">Pilih kategori</option>
            <option value="Mie Ayam">Mie Ayam</option>
            <option value="Topping">Topping</option>
            <option value="Minuman">Minuman</option>
          </select>
          {errors.category && (
            <p className="mt-1.5 text-xs text-red-600">{errors.category.message}</p>
          )}
        </label>

        <label className="block">
          <span className="text-xs font-bold text-charcoal-700">Harga</span>
          <div className="relative">
            <span className="pointer-events-none absolute left-3.5 top-1/2 mt-1 -translate-y-1/2 text-sm font-semibold text-charcoal-700/40">
              Rp
            </span>
            <input
              type="number"
              min="1"
              placeholder="0"
              {...register('price')}
              className={`${inputClasses} pl-10`}
            />
          </div>
          {errors.price && <p className="mt-1.5 text-xs text-red-600">{errors.price.message}</p>}
        </label>

        <label className="block sm:col-span-2">
          <span className="text-xs font-bold text-charcoal-700">Status</span>
          <select {...register('status')} className={inputClasses}>
            <option value="ACTIVE">Aktif</option>
            <option value="INACTIVE">Nonaktif</option>
          </select>
        </label>

        <div className="sm:col-span-2">
          <span className="text-xs font-bold text-charcoal-700">Gambar Produk</span>
          <div className="mt-2 flex items-center gap-4 rounded-2xl border border-dashed border-charcoal-900/15 bg-cream-50 p-4">
            <ProductThumbnail
              image={imagePreview}
              name={product?.name || 'Preview produk'}
              size="lg"
            />
            <div className="min-w-0 flex-1">
              <p className="flex items-center gap-2 text-xs font-bold text-charcoal-800">
                <FiImage className="text-gold-600" />
                Preview gambar
              </p>
              <p className="mt-1.5 text-[11px] leading-5 text-charcoal-700/45">
                PNG atau JPG. Gambar hanya disimpan sebagai preview.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-charcoal-900 px-3 py-2 text-xs font-bold text-white hover:bg-gold-500 hover:text-charcoal-950">
                  <FiUploadCloud />
                  Pilih Gambar
                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    onChange={handleImageChange}
                    className="sr-only"
                  />
                </label>
                {imagePreview !== 'placeholder' && (
                  <button
                    type="button"
                    onClick={() => setImagePreview('placeholder')}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-charcoal-900/10 px-3 py-2 text-xs font-bold text-charcoal-700 hover:bg-white"
                  >
                    <FiX />
                    Hapus
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-7 flex flex-col-reverse gap-2 border-t border-charcoal-900/5 pt-5 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-xl border border-charcoal-900/10 px-5 py-3 text-sm font-bold text-charcoal-700 transition hover:bg-cream-100"
        >
          Batal
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex min-w-[142px] items-center justify-center gap-2 rounded-xl bg-charcoal-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-gold-500 hover:text-charcoal-950 disabled:cursor-wait disabled:opacity-60"
        >
          {isSubmitting && <FiLoader className="animate-spin" />}
          {product ? 'Simpan Perubahan' : 'Tambah Produk'}
        </button>
      </div>
    </form>
  )
}
