import React from 'react'
import { Link } from 'react-router-dom'

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="mb-8">
            <Link to="/" className="text-amber-600 hover:text-amber-700 font-medium flex items-center mb-6">
              ← Kembali ke Beranda
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
              Kebijakan Privasi
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Informasi yang Kami Kumpulkan</h2>
              <p>
                Kami mengumpulkan informasi pribadi yang Anda berikan secara sukarela saat menggunakan layanan kami, 
                termasuk namun tidak terbatas pada nama, alamat email, nomor telepon, dan informasi pembayaran 
                saat Anda melakukan pembelian atau mendaftar akun.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Penggunaan Informasi</h2>
              <p>
                Informasi yang kami kumpulkan digunakan untuk:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Memproses pesanan dan transaksi Anda</li>
                <li>Memberikan layanan pelanggan</li>
                <li>Mengirimkan informasi tentang produk dan promosi</li>
                <li>Memperbaiki dan mengoptimalkan pengalaman pengguna</li>
                <li>Mematuhi kewajiban hukum dan peraturan yang berlaku</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Perlindungan Informasi</h2>
              <p>
                Kami menerapkan berbagai langkah keamanan untuk menjaga keamanan informasi pribadi Anda. 
                Kami menggunakan enkripsi SSL untuk melindungi data sensitif yang dikirimkan melalui situs web kami.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Pembagian Informasi kepada Pihak Ketiga</h2>
              <p>
                Kami tidak menjual, memperdagangkan, atau mentransfer informasi pribadi Anda kepada pihak ketiga 
                tanpa pemberitahuan sebelumnya, kecuali jika diwajibkan oleh hukum atau untuk memenuhi layanan yang Anda minta.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Hak Anda</h2>
              <p>
                Anda memiliki hak untuk:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mengakses informasi pribadi yang kami miliki tentang Anda</li>
                <li>Memperbaiki informasi yang tidak akurat atau tidak lengkap</li>
                <li>Meminta penghapusan informasi pribadi Anda</li>
                <li>Menolak pemrosesan data untuk tujuan pemasaran langsung</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies</h2>
              <p>
                Situs web kami menggunakan cookies untuk meningkatkan pengalaman pengguna. 
                Cookies digunakan untuk menyimpan preferensi pengguna dan informasi keranjang belanja.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Perubahan Kebijakan Privasi</h2>
              <p>
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. 
                Perubahan akan diposting di halaman ini dengan tanggal efektif yang diperbarui.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Kontak Kami</h2>
              <p>
                Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi kami:
              </p>
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200 mt-4">
                <p className="text-gray-700">
                  <strong>Email:</strong> privacy@tenuntimor.com<br/>
                  <strong>Telepon:</strong> +62 812-3456-7890<br/>
                  <strong>Alamat:</strong> Dili, Timor-Leste
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 p-6 bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl border border-amber-200">
            <p className="text-sm text-amber-800">
              <strong>Terakhir diperbarui:</strong> 15 November 2024<br/>
              Kebijakan ini berlaku untuk semua pengguna situs web TenunTimor.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Privacy