import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-white rounded">
                <span className="text-gray-900 font-bold text-lg flex items-center justify-center h-full">T</span>
              </div>
              <div>
                <h3 className="text-lg font-medium">TenunTimor</h3>
                <p className="text-sm text-gray-400">Kain Tenun Tradisional</p>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Menjaga dan melestarikan keindahan tenun tradisional Timor untuk 
              generasi mendatang dengan kualitas terbaik.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Tautan</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Beranda</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Produk</Link></li>
              <li><Link to="/products?filter=rental" className="hover:text-white transition-colors">Sewa</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Tentang</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4">Kontak</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@tenuntimor.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Kupang, NTT</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2024 TenunTimor. Hak cipta dilindungi.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link to="/privacy" className="hover:text-white transition-colors">Privasi</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer