import { useEffect } from 'react'
import { FiX } from 'react-icons/fi'

export default function ProductModal({ open, title, description, onClose, children }) {
  useEffect(() => {
    if (!open) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.classList.add('overflow-hidden')

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('overflow-hidden')
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-5">
      <button
        type="button"
        aria-label="Tutup modal"
        onClick={onClose}
        className="absolute inset-0 bg-charcoal-950/55 backdrop-blur-sm"
      />
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        className="relative max-h-[95vh] w-full overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:max-w-xl sm:rounded-3xl"
      >
        <header className="sticky top-0 z-10 flex items-start justify-between border-b border-charcoal-900/5 bg-white/95 px-5 py-5 backdrop-blur sm:px-6">
          <div>
            <h2 id="product-modal-title" className="text-lg font-extrabold text-charcoal-900">
              {title}
            </h2>
            {description && (
              <p className="mt-1 text-xs leading-5 text-charcoal-700/50">{description}</p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-charcoal-700/45 hover:bg-cream-100 hover:text-charcoal-900"
          >
            <FiX size={19} />
          </button>
        </header>
        {children}
      </section>
    </div>
  )
}
