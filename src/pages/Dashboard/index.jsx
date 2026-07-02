import { FiBox, FiCreditCard, FiShoppingBag, FiTag } from 'react-icons/fi'
import StatCard from '@components/StatCard'
import SalesChart from '@components/SalesChart'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import { formatCurrency } from '../../utils/formatCurrency'

const stats = [
  {
    label: 'Penjualan Hari Ini',
    value: formatCurrency(4850000),
    helper: 'dari kemarin',
    icon: FiCreditCard,
    accent: '#c98520',
  },
  {
    label: 'Total Transaksi',
    value: '128',
    helper: 'dari kemarin',
    icon: FiShoppingBag,
    accent: '#3c7a67',
  },
  {
    label: 'Total Produk',
    value: '342',
    helper: '12 produk baru',
    icon: FiBox,
    accent: '#5c65a8',
  },
  {
    label: 'Total Kategori',
    value: '24',
    helper: '2 kategori baru',
    icon: FiTag,
    accent: '#a65353',
  },
]

export default function Dashboard() {
  useDocumentTitle('Dashboard')

  return (
    <div className="mx-auto max-w-[1500px]">
      <section className="relative overflow-hidden rounded-3xl bg-charcoal-900 px-6 py-7 text-white shadow-xl shadow-charcoal-900/10 sm:px-8 sm:py-9">
        <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-gold-400/15" />
        <div className="absolute -bottom-24 right-32 h-48 w-48 rounded-full border-[32px] border-white/[0.025]" />
        <div className="relative max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-300">Dashboard utama</p>
          <h1 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
            Selamat datang kembali, Admin! 👋
          </h1>
          <p className="mt-3 text-sm leading-6 text-white/50">
            Berikut ringkasan performa toko hari ini. Semuanya terlihat berjalan dengan baik.
          </p>
        </div>
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.55fr_0.75fr]">
        <SalesChart />
        <section className="surface-card p-5 sm:p-6">
          <h2 className="font-bold text-charcoal-900">Aktivitas Terkini</h2>
          <p className="mt-1 text-xs text-charcoal-700/50">Transaksi terbaru hari ini</p>
          <div className="mt-6 space-y-5">
            {[
              ['#TRX-0128', 'Rp285.000', '10:42'],
              ['#TRX-0127', 'Rp156.000', '10:28'],
              ['#TRX-0126', 'Rp420.000', '09:51'],
              ['#TRX-0125', 'Rp98.000', '09:34'],
            ].map(([id, amount, time]) => (
              <div key={id} className="flex items-center gap-3">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gold-100 text-gold-700">
                  <FiShoppingBag size={15} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-charcoal-900">{id}</p>
                  <p className="mt-1 text-[10px] text-charcoal-700/40">{time} WIB</p>
                </div>
                <p className="text-xs font-bold text-charcoal-800">{amount}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
