export default function LoadingSpinner({ label = 'Memuat data produk...' }) {
  return (
    <div className="flex min-h-[360px] flex-col items-center justify-center px-6 text-center">
      <div className="relative h-11 w-11">
        <div className="absolute inset-0 rounded-full border-4 border-gold-100" />
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-gold-500" />
      </div>
      <p className="mt-4 text-sm font-semibold text-charcoal-700/55">{label}</p>
    </div>
  )
}
