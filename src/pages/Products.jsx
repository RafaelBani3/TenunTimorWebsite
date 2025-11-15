import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingCart, Eye } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import { toast } from 'sonner'

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const { addToCart } = useCart()
  
  const category = searchParams.get('category')
  const filter = searchParams.get('filter')

  useEffect(() => {
    fetchProducts()
  }, [category, filter])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      setError(null)
      
      let url = '/api/products'
      const params = new URLSearchParams()
      
      if (category) params.append('category', category)
      if (filter === 'rental') params.append('is_rentable', 'true')
      
      if (params.toString()) {
        url += `?${params.toString()}`
      }
      
      // Use the configured axios instance instead of direct fetch
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      })
      
      if (!response.ok) throw new Error('Failed to fetch products')
      
      const data = await response.json()
      
      console.log('Products data:', data) // Debug: lihat struktur data
      console.log('First product images:', data.data?.[0]?.images) // Debug: lihat struktur images
      setProducts(data.data || [])
    } catch (err) {
      setError(err.message)
      console.error('Error fetching products:', err)
    } finally {
      setLoading(false)
    }
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const ProductCard = ({ product }) => {
    const handleAddToCart = () => {
      addToCart(product, null, 1)
      toast.success('Berhasil ditambahkan', {
        description: `${product.name} telah ditambahkan ke keranjang`
      })
    }

    // Cek apakah ada images dan path yang valid
    const imageUrl = product.images?.[0]?.path || 
      'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Traditional%20Timor%20textile%20product%2C%20handwoven%20fabric%2C%20earth%20tone%20colors%2C%20minimalist%20product%20photography%2C%20professional%20lighting%2C%20cultural%20heritage%2C%20premium%20texture&image_size=square'
    
    const imageAlt = product.images?.[0]?.alt || product.name

    return (
      <div className="group bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300">
        <div className="aspect-square bg-gray-100 overflow-hidden relative">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.src = 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Traditional%20Timor%20textile%20product%2C%20handwoven%20fabric%2C%20earth%20tone%20colors%2C%20minimalist%20product%20photography%2C%20professional%20lighting%2C%20cultural%20heritage%2C%20premium%20texture&image_size=square'
            }}
          />
        </div>
        
        <div className="p-6">
          <div className="mb-2">
            <span className="text-xs text-gray-500 uppercase tracking-wide">
              {product.category?.name || 'Kain Tenun'}
            </span>
          </div>
          
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {product.name}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.short_description}
          </p>
          
          <div className="flex items-center justify-between mb-4">
            <span className="text-xl font-medium text-gray-900">
              {formatPrice(product.price)}
            </span>
            {product.is_rentable && product.rent_price && (
              <span className="text-sm text-gray-500">
                Sewa: {formatPrice(product.rent_price)}/hari
              </span>
            )}
          </div>
          
          <div className="flex gap-2">
            <Link to={`/product/${product.slug}`} className="flex-1">
              <button className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 text-sm transition-colors">
                Detail
              </button>
            </Link>
            <button 
              className="flex-1 bg-gray-900 text-white hover:bg-gray-800 py-2 text-sm transition-colors"
              onClick={handleAddToCart}
            >
              Beli
            </button>
          </div>
        </div>
      </div>
    )
  }

  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="bg-white border border-gray-200">
          <div className="aspect-square bg-gray-100 animate-pulse"></div>
          <div className="p-6 space-y-3">
            <div className="h-3 bg-gray-100 animate-pulse w-1/3"></div>
            <div className="h-5 bg-gray-100 animate-pulse w-3/4"></div>
            <div className="h-3 bg-gray-100 animate-pulse w-full"></div>
            <div className="h-3 bg-gray-100 animate-pulse w-2/3"></div>
            <div className="h-6 bg-gray-100 animate-pulse w-1/2 mb-4"></div>
            <div className="flex gap-3">
              <div className="flex-1 h-9 bg-gray-100 animate-pulse"></div>
              <div className="flex-1 h-9 bg-gray-100 animate-pulse"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-16">
        <LoadingSkeleton />
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center">
          <div className="text-6xl mb-4">🧵</div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">Terjadi Kesalahan</h3>
          <p className="text-gray-600 mb-6">{error}</p>
          <button onClick={fetchProducts} className="bg-gray-900 text-white px-6 py-2 hover:bg-gray-800 transition-colors">
            Coba Lagi
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-3xl font-light text-gray-900 mb-3">
          {filter === 'rental' ? 'Sewa Tenun' : 'Koleksi Tenun'}
        </h1>
        <p className="text-gray-600 max-w-2xl">
          {filter === 'rental' 
            ? 'Pilih tenun untuk disewa untuk acara spesial Anda dengan berbagai motif tradisional Timor.'
            : 'Temukan kain tenun dan produk tradisional Timor yang autentik, dibuat dengan tangan oleh pengrajin lokal.'
          }
        </p>
      </div>

      {/* Products Grid */}
      {products.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🧵</div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">Belum ada produk</h3>
          <p className="text-gray-600">Produk akan segera ditambahkan. Silakan cek kembali nanti.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Products