import { useMemo, useState } from 'react'
import { FiPackage, FiPlus, FiRefreshCw } from 'react-icons/fi'
import Swal from 'sweetalert2'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import useProducts from '../../hooks/useProducts'
import SearchBar from '@components/products/SearchBar'
import FilterBar from '@components/products/FilterBar'
import ProductTable from '@components/products/ProductTable'
import ProductModal from '@components/products/ProductModal'
import ProductForm from '@components/products/ProductForm'
import ProductDetail from '@components/products/ProductDetail'
import DeleteModal from '@components/products/DeleteModal'
import EmptyState from '@components/products/EmptyState'
import LoadingSpinner from '@components/products/LoadingSpinner'
import Pagination from '@components/products/Pagination'

const PAGE_SIZE = 10

export default function Products() {
  useDocumentTitle('Produk')
  const {
    products,
    isLoading,
    isMutating,
    error,
    reload,
    createProduct,
    updateProduct,
    deleteProduct,
  } = useProducts()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('ALL')
  const [status, setStatus] = useState('ALL')
  const [currentPage, setCurrentPage] = useState(1)
  const [modal, setModal] = useState({ type: null, product: null })

  const categories = useMemo(
    () => [...new Set(products.map((product) => product.category))].sort(),
    [products],
  )

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase()

    return products.filter((product) => {
      const matchesSearch =
        !normalizedSearch || product.name.toLowerCase().includes(normalizedSearch)
      const matchesCategory = category === 'ALL' || product.category === category
      const matchesStatus = status === 'ALL' || product.status === status

      return matchesSearch && matchesCategory && matchesStatus
    })
  }, [products, search, category, status])

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PAGE_SIZE))
  const safeCurrentPage = Math.min(currentPage, totalPages)
  const paginatedProducts = filteredProducts.slice(
    (safeCurrentPage - 1) * PAGE_SIZE,
    safeCurrentPage * PAGE_SIZE,
  )
  const hasActiveFilter = Boolean(search) || category !== 'ALL' || status !== 'ALL'

  const updateFilter = (setter) => (value) => {
    setter(value)
    setCurrentPage(1)
  }

  const resetFilters = () => {
    setSearch('')
    setCategory('ALL')
    setStatus('ALL')
    setCurrentPage(1)
  }

  const closeModal = () => {
    if (!isMutating) setModal({ type: null, product: null })
  }

  const handleSave = async (values) => {
    try {
      const isEdit = modal.type === 'edit'

      if (isEdit) {
        await updateProduct(modal.product.id, values)
      } else {
        await createProduct(values)
      }

      setModal({ type: null, product: null })
      await Swal.fire({
        title: isEdit ? 'Produk diperbarui' : 'Produk ditambahkan',
        text: `${values.name} berhasil disimpan.`,
        icon: 'success',
        timer: 1300,
        showConfirmButton: false,
      })
    } catch (saveError) {
      await Swal.fire({
        title: 'Gagal menyimpan',
        text: saveError.message,
        icon: 'error',
      })
    }
  }

  const handleDelete = async () => {
    try {
      const deletedName = modal.product.name
      await deleteProduct(modal.product.id)
      setModal({ type: null, product: null })
      await Swal.fire({
        title: 'Produk dihapus',
        text: `${deletedName} telah dihapus.`,
        icon: 'success',
        timer: 1300,
        showConfirmButton: false,
      })
    } catch (deleteError) {
      await Swal.fire({
        title: 'Gagal menghapus',
        text: deleteError.message,
        icon: 'error',
      })
    }
  }

  const openEditFromDetail = (product) => setModal({ type: 'edit', product })

  return (
    <div className="mx-auto max-w-[1500px]">
      <header className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-gold-600">
            <FiPackage />
            Katalog
          </div>
          <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-charcoal-900 sm:text-3xl">
            Manajemen Produk
          </h1>
          <p className="mt-2 text-sm leading-6 text-charcoal-700/50">
            Kelola menu, harga, kategori, dan ketersediaan produk.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setModal({ type: 'add', product: null })}
          className="flex items-center justify-center gap-2 rounded-xl bg-charcoal-900 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-charcoal-900/10 transition hover:-translate-y-0.5 hover:bg-gold-500 hover:text-charcoal-950"
        >
          <FiPlus size={18} />
          Tambah Produk
        </button>
      </header>

      <section className="surface-card mt-6 overflow-hidden">
        <div className="flex flex-col gap-3 border-b border-charcoal-900/5 p-4 sm:p-5 xl:flex-row xl:items-center">
          <SearchBar value={search} onChange={updateFilter(setSearch)} />
          <FilterBar
            categories={categories}
            category={category}
            status={status}
            onCategoryChange={updateFilter(setCategory)}
            onStatusChange={updateFilter(setStatus)}
          />
          <div className="text-xs text-charcoal-700/45 xl:ml-auto">
            <span className="font-extrabold text-charcoal-800">{filteredProducts.length}</span> produk
          </div>
        </div>

        {isLoading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="flex min-h-[360px] flex-col items-center justify-center px-6 text-center">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-red-50 text-red-600">
              <FiRefreshCw size={24} />
            </div>
            <h3 className="mt-4 font-extrabold text-charcoal-900">Data gagal dimuat</h3>
            <p className="mt-2 text-sm text-charcoal-700/50">{error}</p>
            <button
              type="button"
              onClick={reload}
              className="mt-5 rounded-xl bg-charcoal-900 px-4 py-2.5 text-sm font-bold text-white"
            >
              Coba Lagi
            </button>
          </div>
        ) : filteredProducts.length === 0 ? (
          <EmptyState
            isFiltered={hasActiveFilter}
            onReset={resetFilters}
            onAdd={() => setModal({ type: 'add', product: null })}
          />
        ) : (
          <>
            <ProductTable
              products={paginatedProducts}
              onView={(product) => setModal({ type: 'view', product })}
              onEdit={(product) => setModal({ type: 'edit', product })}
              onDelete={(product) => setModal({ type: 'delete', product })}
            />
            <Pagination
              currentPage={safeCurrentPage}
              totalPages={totalPages}
              totalItems={filteredProducts.length}
              pageSize={PAGE_SIZE}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </section>

      <ProductModal
        open={modal.type === 'add' || modal.type === 'edit'}
        title={modal.type === 'edit' ? 'Edit Produk' : 'Tambah Produk'}
        description={
          modal.type === 'edit'
            ? 'Perbarui informasi produk yang dipilih.'
            : 'Lengkapi informasi produk baru di bawah ini.'
        }
        onClose={closeModal}
      >
        <ProductForm
          product={modal.type === 'edit' ? modal.product : null}
          onSubmit={handleSave}
          onCancel={closeModal}
          isSubmitting={isMutating}
        />
      </ProductModal>

      <ProductModal
        open={modal.type === 'view'}
        title="Detail Produk"
        description="Informasi lengkap produk yang dipilih."
        onClose={closeModal}
      >
        <ProductDetail
          product={modal.product}
          onEdit={openEditFromDetail}
          onClose={closeModal}
        />
      </ProductModal>

      <DeleteModal
        open={modal.type === 'delete'}
        product={modal.product}
        onClose={closeModal}
        onConfirm={handleDelete}
        isDeleting={isMutating}
      />
    </div>
  )
}
