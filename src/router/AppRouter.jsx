import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from '@layouts/MainLayout'
import Login from '@pages/Login'
import Dashboard from '@pages/Dashboard'
import Products from '@pages/Products'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/produk" element={<Navigate to="/products" replace />} />
      </Route>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}
