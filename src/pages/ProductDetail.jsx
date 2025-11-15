import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ShoppingCart, ArrowLeft, Star, Info } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import { toast } from 'sonner'

const ProductDetail = () => {
  const { slug } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedVariant, setSelectedVariant] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  useEffect(() => {
    fetchProduct()
  }, [slug])

  const fetchProduct = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const { api } = await import('@/lib/api')
      const response = await api.get(`/products/${slug}`)
      const data = response.data
      setProduct(data.data)
      // Set default variant if available
      if (data.data?.variants?.length > 0) {
        setSelectedVariant(data.data.variants[0])
      }
    } catch (err) {
      setError(err.message)
      console.error('Error fetching product:', err)
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

  const handleAddToCart = () => {
    if (!product) return
    
    const availableStock = selectedVariant?.stock || product.variants?.[0]?.stock || 0
    if (quantity > availableStock) {
      toast.error('Stok tidak mencukupi', {
        description: `Stok tersedia hanya ${availableStock} pcs`
      })
      return
    }

    addToCart(product, selectedVariant, quantity)
    toast.success('Berhasil ditambahkan', {
      description: `${product.name} telah ditambahkan ke keranjang`
    })
  }

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="aspect-square bg-gray-100 animate-pulse"></div>
          <div className="space-y-6">
            <div className="h-8 w-3/4 bg-gray-100 animate-pulse"></div>
            <div className="h-4 w-full bg-gray-100 animate-pulse"></div>
            <div className="h-4 w-2/3 bg-gray-100 animate-pulse"></div>
            <div className="h-6 w-1/2 bg-gray-100 animate-pulse"></div>
            <div className="h-12 w-full bg-gray-100 animate-pulse"></div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white border border-gray-200 p-6 mb-6">
          <p className="text-gray-900">{error}</p>
        </div>
        <div className="flex gap-4">
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Produk
          </Link>
          <button
            onClick={fetchProduct}
            className="px-6 py-2 border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Coba Lagi
          </button>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h3 className="text-xl font-light text-gray-900 mb-4">
          Produk tidak ditemukan
        </h3>
        <Link
          to="/products"
          className="inline-flex items-center px-6 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
        >
          Lihat Produk Lainnya
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-gray-900 transition-colors">Beranda</Link>
        <span>/</span>
        <Link to="/products" className="hover:text-gray-900 transition-colors">Produk</Link>
        <span>/</span>
        <span className="text-gray-900">{product.name}</span>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-6">
          <div className="aspect-square bg-gray-100 overflow-hidden">
            <img
              src={product.images?.[0]?.path || 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Traditional%20Timor%20textile%20product%20detail%2C%20handwoven%20fabric%20close-up%2C%20earth%20tone%20colors%2C%20minimalist%20professional%20photography%2C%20premium%20texture%2C%20cultural%20heritage%2C%20fine%20detail%20shot&image_size=square'}
              alt={product.images?.[0]?.alt || product.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Traditional%20Timor%20textile%20product%20detail%2C%20handwoven%20fabric%20close-up%2C%20earth%20tone%20colors%2C%20minimalist%20professional%20photography%2C%20premium%20texture%2C%20cultural%20heritage%2C%20fine%20detail%20shot&image_size=square'
              }}
            />
          </div>
          
          {/* Thumbnail Images */}
          {product.images && product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {product.images.slice(1, 5).map((image, index) => (
                <div key={index} className="aspect-square bg-gray-100 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                  <img
                    src={image.path || 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Traditional%20Timor%20textile%20product%20detail%2C%20handwoven%20fabric%20close-up%2C%20earth%20tone%20colors%2C%20minimalist%20professional%20photography%2C%20premium%20texture%2C%20cultural%20heritage%2C%20fine%20detail%20shot&image_size=square'}
                    alt={image.alt || product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Traditional%20Timor%20textile%20product%20detail%2C%20handwoven%20fabric%20close-up%2C%20earth%20tone%20colors%2C%20minimalist%20professional%20photography%2C%20premium%20texture%2C%20cultural%20heritage%2C%20fine%20detail%20shot&image_size=square'
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm">
                {product.category?.name}
              </span>
              {product.is_rentable && (
                <span className="inline-block px-3 py-1 border border-gray-300 text-gray-700 text-sm">
                  Tersedia Sewa
                </span>
              )}
            </div>
            
            <h1 className="text-3xl font-light text-gray-900 mb-3">
              {product.name}
            </h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gray-400 text-gray-400" />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-500">(4.8) • 12 ulasan</span>
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Pricing */}
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <span className="text-3xl font-light text-gray-900">
                {formatPrice(product.price)}
              </span>
              {product.cost_price && (
                <span className="text-lg text-gray-400 line-through">
                  {formatPrice(product.cost_price * 1.5)}
                </span>
              )}
            </div>
            
            {product.is_rentable && product.rent_price && (
              <div className="text-gray-600">
                <span className="text-sm">Sewa:</span> {formatPrice(product.rent_price)} / hari
                {product.rent_deposit && (
                  <span className="text-sm text-gray-500 ml-2">
                    + Deposit: {formatPrice(product.rent_deposit)}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Variants */}
          {product.variants && product.variants.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Pilih Varian:</h3>
              <div className="flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-4 py-2 border transition-colors ${
                      selectedVariant?.id === variant.id 
                        ? 'bg-gray-900 text-white border-gray-900' 
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {Object.values(variant.attributes).join(' / ')}
                    {variant.price_override && (
                      <span className="ml-2 text-sm">
                        {formatPrice(variant.price_override)}
                      </span>
                    )}
                    <span className="ml-1 text-xs text-gray-500">
                      ({variant.stock})
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="space-y-4">
            <h3 className="font-medium text-gray-900">Jumlah:</h3>
            <div className="flex items-center space-x-4">
              <button
                className="w-10 h-10 border border-gray-300 hover:border-gray-400 transition-colors"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="text-lg font-medium w-12 text-center">{quantity}</span>
              <button
                className="w-10 h-10 border border-gray-300 hover:border-gray-400 transition-colors"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Stock Info */}
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Info className="h-4 w-4" />
            <span>
              Stok tersedia: {selectedVariant?.stock || product.variants?.[0]?.stock || 0} pcs
            </span>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button 
              className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 transition-colors flex items-center justify-center"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Tambah ke Keranjang
            </button>
            
            {product.is_rentable && (
              <button 
                className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 transition-colors"
              >
                Sewa Sekarang
              </button>
            )}
          </div>

          {/* Product Meta */}
          {product.meta && (
            <div className="border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-medium text-gray-900">Informasi Produk</h3>
              </div>
              <div className="p-4 space-y-3">
                {Object.entries(product.meta).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-sm">
                    <span className="text-gray-600 capitalize">
                      {key.replace('_', ' ')}:
                    </span>
                    <span className="text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail