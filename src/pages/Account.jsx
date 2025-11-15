import React from 'react'
import { Button } from '@/components/ui/button'

const Account = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Akun Saya</h1>
      <div className="text-center py-12">
        <div className="text-6xl mb-4">👤</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Silakan masuk untuk melihat akunmu
        </h3>
        <p className="text-gray-600 mb-6">
          Login untuk mengelola profil, alamat, dan riwayat pesananmu.
        </p>
      </div>
    </div>
  )
}

export default Account