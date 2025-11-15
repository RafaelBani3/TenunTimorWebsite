import React from 'react'
import { Button } from '@/components/ui/button'

const Orders = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Pesanan Saya</h1>
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📦</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Belum ada pesanan
        </h3>
        <p className="text-gray-600 mb-6">
          Pesananmu akan muncul disini setelah kamu melakukan pembelian.
        </p>
      </div>
    </div>
  )
}

export default Orders