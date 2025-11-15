import React from 'react'
import { Link } from 'react-router-dom'

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="mb-8">
            <Link to="/" className="text-amber-600 hover:text-amber-700 font-medium flex items-center mb-6">
              ← Kembali ke Beranda
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
              Syarat & Ketentuan
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Penerimaan Syarat dan Ketentuan</h2>
              <p>
                Dengan mengakses dan menggunakan situs web TenunTimor, Anda menyetujui untuk terikat oleh 
                syarat dan ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari syarat dan ketentuan ini, 
                Anda tidak boleh menggunakan situs web kami.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Penggunaan Situs Web</h2>
              <p>
                Anda setuju untuk menggunakan situs web ini hanya untuk tujuan yang sah dan dengan cara 
                yang tidak melanggar hak orang lain atau membatasi penggunaan dan kenikmatan mereka atas situs web.
              </p>
              <p>
                Dilarang keras menggunakan situs web ini untuk:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Menyebarkan konten yang bersifat menyinggung, memfitnah, atau tidak pantas</li>
                <li>Melakukan kegiatan yang melanggar hukum</li>
                <li>Mengganggu atau merusak situs web atau server</li>
                <li>Mengumpulkan informasi pribadi orang lain tanpa izin</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Produk dan Layanan</h2>
              <p>
                Semua produk yang ditampilkan di situs web kami tersedia sesuai dengan ketersediaan stok. 
                Kami berusaha untuk memastikan bahwa semua informasi produk, termasuk harga dan deskripsi, 
                adalah akurat dan terkini.
              </p>
              <p>
                Namun, kami berhak untuk:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mengubah harga produk tanpa pemberitahuan sebelumnya</li>
                <li>Membatalkan pesanan jika terjadi kesalahan dalam penentuan harga</li>
                <li>Memodifikasi atau menghentikan produk tanpa pemberitahuan sebelumnya</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Pembelian dan Pembayaran</h2>
              <p>
                Dengan melakukan pembelian, Anda menyetujui untuk membayar harga yang tertera untuk produk 
                yang Anda pesan, termasuk pajak dan biaya pengiriman yang berlaku.
              </p>
              <p>
                Kami menerima berbagai metode pembayaran yang akan ditampilkan saat checkout. 
                Semua pembayaran harus dilakukan sebelum produk dikirim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Pengiriman dan Pengembalian</h2>
              <p>
                Kami berusaha untuk memproses dan mengirim pesanan dalam waktu 1-3 hari kerja setelah pembayaran dikonfirmasi. 
                Waktu pengiriman dapat bervariasi tergantung pada lokasi Anda.
              </p>
              <p>
                Kebijakan pengembalian:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Produk dapat dikembalikan dalam waktu 7 hari setelah diterima</li>
                <li>Produk harus dalam kondisi asli dan tidak digunakan</li>
                <li>Biaya pengiriman pengembalian ditanggung oleh pembeli, kecuali jika produk cacat atau salah kirim</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Layanan Sewa</h2>
              <p>
                Untuk layanan sewa tenun, berlaku ketentuan khusus:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Minimal sewa adalah 3 hari</li>
                <li>Deposit diperlukan dan akan dikembalikan setelah tenun dikembalikan dalam kondisi baik</li>
                <li>Kerusakan pada tenun akan dikenakan biaya perbaikan atau penggantian</li>
                <li>Pengembalian terlambat akan dikenakan biaya tambahan</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Hak Kekayaan Intelektual</h2>
              <p>
                Semua konten di situs web ini, termasuk teks, gambar, logo, dan desain, adalah milik 
                TenunTimor atau pemberi lisensi kami dan dilindungi oleh hukum hak cipta dan merek dagang.
              </p>
              <p>
                Anda tidak boleh menggunakan, menyalin, atau mendistribusikan konten dari situs web ini 
                tanpa izin tertulis dari kami.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Pembatasan Tanggung Jawab</h2>
              <p>
                Kami tidak bertanggung jawab atas kerugian langsung, tidak langsung, insidental, khusus, 
                atau konsekuensial yang timbul dari penggunaan atau ketidakmampuan menggunakan situs web ini.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Perubahan Syarat dan Ketentuan</h2>
              <p>
                Kami berhak untuk mengubah syarat dan ketentuan ini kapan saja. 
                Perubahan akan diposting di halaman ini dengan tanggal efektif yang diperbarui.
              </p>
              <p>
                Penggunaan Anda yang berkelanjutan atas situs web setelah perubahan tersebut 
                merupakan penerimaan Anda atas syarat dan ketentuan yang telah direvisi.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Hukum yang Berlaku</h2>
              <p>
                Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Timor-Leste. 
                Setiap perselisihan yang timbul akan diselesaikan di yurisdiksi Timor-Leste.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Kontak</h2>
              <p>
                Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, silakan hubungi kami:
              </p>
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200 mt-4">
                <p className="text-gray-700">
                  <strong>Email:</strong> legal@tenuntimor.com<br/>
                  <strong>Telepon:</strong> +62 812-3456-7890<br/>
                  <strong>Alamat:</strong> Dili, Timor-Leste
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 p-6 bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl border border-amber-200">
            <p className="text-sm text-amber-800">
              <strong>Terakhir diperbarui:</strong> 15 November 2024<br/>
              Dengan menggunakan situs web TenunTimor, Anda menyetujui semua syarat dan ketentuan di atas.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Terms