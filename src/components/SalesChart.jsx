const data = [38, 52, 44, 69, 61, 82, 73]
const labels = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min']

export default function SalesChart() {
  return (
    <section className="surface-card p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-bold text-charcoal-900">Ringkasan Penjualan</h2>
          <p className="mt-1 text-xs text-charcoal-700/50">Performa tujuh hari terakhir</p>
        </div>
        <select
          aria-label="Periode grafik"
          className="rounded-lg border border-charcoal-900/10 bg-cream-50 px-3 py-2 text-xs font-semibold text-charcoal-700 outline-none"
        >
          <option>Minggu ini</option>
        </select>
      </div>

      <div className="mt-7 flex h-52 items-end gap-3 sm:gap-5">
        {data.map((height, index) => (
          <div key={labels[index]} className="flex h-full flex-1 flex-col items-center justify-end gap-2.5">
            <div className="group flex h-full w-full items-end rounded-t-lg bg-cream-100">
              <div
                className="w-full rounded-t-lg bg-gradient-to-t from-gold-500 to-gold-300 transition-all duration-500 group-hover:from-charcoal-900 group-hover:to-charcoal-700"
                style={{ height: `${height}%` }}
                title={`${labels[index]}: ${height}%`}
              />
            </div>
            <span className="text-[10px] font-medium text-charcoal-700/45">{labels[index]}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
