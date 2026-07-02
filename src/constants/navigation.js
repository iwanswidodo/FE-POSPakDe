import {
  FiBox,
  FiGrid,
  FiLayers,
  FiPieChart,
  FiShoppingCart,
  FiTag,
  FiUsers,
} from 'react-icons/fi'

export const navigationItems = [
  { label: 'Dashboard', path: '/dashboard', icon: FiGrid },
  { label: 'Kasir', path: '/kasir', icon: FiShoppingCart },
  { label: 'Produk', path: '/products', icon: FiBox },
  { label: 'Kategori', path: '/kategori', icon: FiTag },
  { label: 'Transaksi', path: '/transaksi', icon: FiLayers },
  { label: 'Laporan', path: '/laporan', icon: FiPieChart },
  { label: 'User', path: '/user', icon: FiUsers },
]
