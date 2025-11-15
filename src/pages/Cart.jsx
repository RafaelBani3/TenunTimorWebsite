import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'

const Cart = () => {
  const { items, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart()

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price)
  }

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-100 mx-auto mb-6 flex items-center justify-center">
            <ShoppingBag className="w-8 h-8 text-gray-400" />
          </div>
          <h1 className="text-2xl font-light text-gray-900 mb-4">
            Keranjang Belanja Anda Kosong
          </h1>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Yuk, tambahkan produk tenun tradisional Timor yang Anda sukai ke keranjang belanja Anda.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
          >
            Mulai Belanja
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Link to="/products">
            <button className="p-2 hover:bg-gray-100 transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </button>
          </Link>
          <h1 className="text-2xl font-light text-gray-900">
            Keranjang Belanja
          </h1>
        </div>
        <button 
          onClick={clearCart}
          className="text-gray-600 hover:text-gray-900 border border-gray-300 px-4 py-2 transition-colors"
        >
          <Trash2 className="w-4 h-4 mr-2 inline" />
          Kosongkan
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item, index) => (
            <div key={index} className="bg-white border border-gray-200">
              <div className="p-6">
                <div className="flex gap-6">
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-gray-100 flex-shrink-0 overflow-hidden">
                    <img
                      src={item.images?.[0]?.path || 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Traditional%20Timor%20textile%20product%2C%20handwoven%20fabric%2C%20earth%20tone%20colors%2C%20minimalist%20product%20photography%2C%20professional%20lighting%2C%20cultural%20heritage%2C%20premium%20texture&image_size=square'}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="min-w-0">
                        <h3 className="font-medium text-gray-900 mb-2">
                          {item.name}
                        </h3>
                        {item.variant && (
                          <p className="text-sm text-gray-500 mb-2">
                            Varian: {Object.values(item.variant.attributes).join(' / ')}
                          </p>
                        )}
                        {item.is_rentable && (
                          <span className="inline-block px-2 py-1 border border-gray-300 text-gray-600 text-xs mb-2">
                            Tersedia Sewa
                          </span>
                        )}
                        <p className="text-lg font-light text-gray-900">
                          {formatPrice(item.variant ? item.variant.price : item.price)}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.variant?.id)}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant?.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="w-8 h-8 border border-gray-300 hover:border-gray-400 transition-colors disabled:opacity-50"
                        >
                          <Minus className="h-4 w-4 mx-auto" />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant?.id, item.quantity + 1)}
                          className="w-8 h-8 border border-gray-300 hover:border-gray-400 transition-colors"
                        >
                          <Plus className="h-4 w-4 mx-auto" />
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Subtotal</p>
                        <p className="font-medium text-gray-900">
                          {formatPrice((item.variant ? item.variant.price : item.price) * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 sticky top-24">
            <div className="p-6 border-b border-gray-200">
              <h3 className="font-medium text-gray-900">Ringkasan Pesanan</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total Item</span>
                  <span className="text-gray-900">{items.length} item</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total Jumlah</span>
                  <span className="text-gray-900">
                    {items.reduce((total, item) => total + item.quantity, 0)} pcs
                  </span>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">Total Harga</span>
                  <span className="text-xl font-light text-gray-900">
                    {formatPrice(getCartTotal())}
                  </span>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 p-4">
                <p className="text-gray-600 text-sm">
                  Gratis ongkir untuk pembelian di atas Rp500.000
                </p>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-gray-900 text-white py-3 hover:bg-gray-800 transition-colors">
                  Lanjut ke Pembayaran
                </button>
                <Link to="/products">
                  <button className="w-full border border-gray-300 text-gray-700 py-3 hover:bg-gray-50 transition-colors">
                    Tambah Produk Lain
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart