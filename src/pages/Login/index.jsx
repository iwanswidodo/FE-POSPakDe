import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiEye, FiEyeOff, FiLock, FiUser } from 'react-icons/fi'
import Swal from 'sweetalert2'
import Brand from '@components/Brand'
import heroImage from '@assets/login-hero.svg'
import useDocumentTitle from '../../hooks/useDocumentTitle'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({ username: '', password: '' })
  const navigate = useNavigate()
  useDocumentTitle('Login')

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!form.username || !form.password) {
      await Swal.fire({
        title: 'Data belum lengkap',
        text: 'Masukkan username dan password Anda.',
        icon: 'warning',
        confirmButtonColor: '#c98520',
      })
      return
    }

    localStorage.setItem('auth_token', 'demo-token')
    await Swal.fire({
      title: 'Selamat datang!',
      text: `Halo, ${form.username}.`,
      icon: 'success',
      timer: 1100,
      showConfirmButton: false,
    })
    navigate('/dashboard')
  }

  return (
    <main className="grid min-h-screen bg-cream-50 lg:grid-cols-[1.05fr_0.95fr]">
      <section
        className="relative hidden overflow-hidden bg-charcoal-900 bg-cover bg-center p-12 lg:flex lg:flex-col lg:justify-between"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <Brand inverse />
        <div className="relative max-w-xl">
          <div className="mb-6 h-1 w-14 rounded-full bg-gold-400" />
          <h1 className="text-5xl font-extrabold leading-[1.08] tracking-[-0.04em] text-white">
            Kelola bisnis,
            <br />
            <span className="text-gold-300">layani lebih baik.</span>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/55">
            Satu sistem yang ringkas untuk transaksi, produk, dan laporan toko Anda.
          </p>
        </div>
        <p className="text-xs text-white/30">© 2026 POS Pak De Surya</p>
      </section>

      <section className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-10">
        <div className="w-full max-w-[430px]">
          <div className="mb-10 lg:hidden">
            <Brand />
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">Selamat datang</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-charcoal-900 sm:text-4xl">
            Masuk ke akun Anda
          </h2>
          <p className="mt-3 text-sm leading-6 text-charcoal-700/55">
            Gunakan kredensial Anda untuk melanjutkan ke dashboard.
          </p>

          <form onSubmit={handleSubmit} className="mt-9 space-y-5">
            <label className="block">
              <span className="mb-2 block text-xs font-bold text-charcoal-700">Username</span>
              <div className="flex items-center rounded-xl border border-charcoal-900/10 bg-white px-4 transition focus-within:border-gold-400 focus-within:ring-4 focus-within:ring-gold-100">
                <FiUser className="shrink-0 text-charcoal-700/35" />
                <input
                  type="text"
                  autoComplete="username"
                  placeholder="Masukkan username"
                  value={form.username}
                  onChange={(event) => setForm({ ...form, username: event.target.value })}
                  className="w-full bg-transparent px-3 py-3.5 text-sm outline-none placeholder:text-charcoal-700/30"
                />
              </div>
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-bold text-charcoal-700">Password</span>
              <div className="flex items-center rounded-xl border border-charcoal-900/10 bg-white px-4 transition focus-within:border-gold-400 focus-within:ring-4 focus-within:ring-gold-100">
                <FiLock className="shrink-0 text-charcoal-700/35" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder="Masukkan password"
                  value={form.password}
                  onChange={(event) => setForm({ ...form, password: event.target.value })}
                  className="w-full bg-transparent px-3 py-3.5 text-sm outline-none placeholder:text-charcoal-700/30"
                />
                <button
                  type="button"
                  aria-label={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-charcoal-700/35 transition hover:text-gold-600"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </label>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-charcoal-700/55">
                <input type="checkbox" className="h-4 w-4 accent-gold-500" />
                Ingat saya
              </label>
              <button type="button" className="font-bold text-gold-600 hover:text-gold-700">
                Lupa password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-charcoal-900 px-5 py-4 text-sm font-bold text-white shadow-xl shadow-charcoal-900/15 transition hover:-translate-y-0.5 hover:bg-gold-500 hover:text-charcoal-950"
            >
              Masuk ke Dashboard
            </button>
          </form>

          <p className="mt-8 text-center text-[11px] text-charcoal-700/35">
            Akses aman · Data terenkripsi · Dukungan 24/7
          </p>
        </div>
      </section>
    </main>
  )
}
