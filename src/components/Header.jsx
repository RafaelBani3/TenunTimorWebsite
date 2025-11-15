import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ShoppingCart, User, Search } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(true)
  const location = useLocation()
  const { getCartItemCount } = useCart()
  const cartItemCount = getCartItemCount()

  const isActive = (path) => {
    // Handle query parameters for rental filter
    if (path.includes('?')) {
      const [pathname, search] = path.split('?')
      return location.pathname === pathname && location.search === `?${search}`
    }
    return location.pathname === path
  }

  const navigation = [
    { name: 'Beranda', href: '/' },
    { name: 'Produk', href: '/products' },
    { name: 'Sewa', href: '/products?filter=rental' },
    { name: 'Tentang', href: '/about' },
  ]

  // Add some styling classes to body for better scroll behavior
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Entrance animation effect - lebih smooth
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 800) // Longer delay for smoother entrance

    return () => clearTimeout(timer)
  }, [])

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className={`flex items-center space-x-3 group hover:scale-105 transition-transform duration-300 ${
            isAnimating ? 'animate-slide-in-left opacity-0' : 'opacity-100'
          }`}>
            <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
              <span className="text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">T</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                TenunTimor
              </h1>
              <p className="text-xs text-gray-500 font-medium group-hover:text-gray-600 transition-colors duration-300">Kain Tenun Tradisional</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isActive(item.href)
                    ? 'text-gray-900 border-b-2 border-gray-900'
                    : 'text-gray-600 hover:text-gray-900 hover:border-b-2 hover:border-gray-300'
                } ${
                  isAnimating ? 'animate-fade-in-up opacity-0' : 'opacity-100'
                }`}
                style={{
                  animationDelay: isAnimating ? `${200 + index * 100}ms` : '0ms'
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className={`flex items-center space-x-2 ${
            isAnimating ? 'animate-slide-in-right opacity-0' : 'opacity-100'
          }`}>
            {/* Search */}
            <button 
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-300 hover:scale-110"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Cart */}
            <Link to="/cart">
              <button 
                className="p-2 relative text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-medium animate-pulse">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </Link>

            {/* User Account */}
            <Link to="/auth/login">
              <button 
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <User className="h-5 w-5" />
              </button>
            </Link>

            {/* Mobile menu button */}
            <button
              className="p-2 lg:hidden text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-gray-900 bg-gray-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-gray-200">
                <Link to="/auth/login">
                  <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 transform">
                    Masuk
                  </button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header