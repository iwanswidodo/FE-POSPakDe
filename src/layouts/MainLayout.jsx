import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Sidebar from '@components/Sidebar'
import Navbar from '@components/Navbar'

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: 'Keluar dari aplikasi?',
      text: 'Sesi aktif Anda akan diakhiri.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Ya, keluar',
      cancelButtonText: 'Batal',
      confirmButtonColor: '#c98520',
      cancelButtonColor: '#444440',
    })

    if (result.isConfirmed) {
      localStorage.removeItem('auth_token')
      navigate('/login')
    }
  }

  return (
    <div className="min-h-screen bg-cream-50">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="min-h-screen lg:pl-[280px]">
        <Navbar onMenuClick={() => setSidebarOpen(true)} onLogout={handleLogout} />
        <main className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
