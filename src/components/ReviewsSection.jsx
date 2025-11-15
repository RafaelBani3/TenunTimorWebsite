import React from 'react'

const reviews = [
  { name: 'Maria', photo: 'https://i.pravatar.cc/100?img=15', text: 'Kainnya indah sekali, motifnya autentik dan kualitasnya premium.' },
  { name: 'Johan', photo: 'https://i.pravatar.cc/100?img=12', text: 'Pengalaman belanja menyenangkan, pengiriman cepat dan rapi.' },
  { name: 'Ayu', photo: 'https://i.pravatar.cc/100?img=32', text: 'Detail tenunnya halus, cocok untuk hadiah keluarga.' },
  { name: 'Beni', photo: 'https://i.pravatar.cc/100?img=5', text: 'Layanan sewa praktis untuk acara, kainnya sangat elegan.' },
  { name: 'Sinta', photo: 'https://i.pravatar.cc/100?img=20', text: 'Warna alami terlihat hangat, sesuai foto dan deskripsi.' },
  { name: 'Rudi', photo: 'https://i.pravatar.cc/100?img=7', text: 'Harga sepadan dengan kualitas, pasti beli lagi.' },
  { name: 'Nita', photo: 'https://i.pravatar.cc/100?img=27', text: 'Tim support responsif, bantu memilih motif yang tepat.' },
  { name: 'Dian', photo: 'https://i.pravatar.cc/100?img=48', text: 'Pewarnaan alami membuat kain terasa istimewa.' },
]

const ReviewCard = ({ item, index }) => (
  <div
    className="group flex items-center gap-4 bg-white border border-gray-200 px-4 py-3 rounded-lg shadow-sm min-w-[320px] hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
    style={{ animationDelay: `${index * 120}ms` }}
  >
    <img src={item.photo} alt={item.name} className="h-12 w-12 rounded-full object-cover" />
    <div className="min-w-0">
      <p className="text-gray-900 font-medium truncate">{item.name}</p>
      <p className="text-gray-600 text-sm line-clamp-2">{item.text}</p>
    </div>
  </div>
)

const Row = ({ reverse = false, speed = 'medium' }) => (
  <div className="marquee mb-4">
    <div className={`marquee-inner ${reverse ? 'animate-marquee-right' : 'animate-marquee-left'} ${speed === 'fast' ? 'marquee-fast' : speed === 'slow' ? 'marquee-slow' : 'marquee-medium'}`}>
      {reviews.map((item, i) => (
        <div key={`a-${i}`} className="mx-2 animate-bounce-slow">
          <ReviewCard item={item} index={i} />
        </div>
      ))}
      {reviews.map((item, i) => (
        <div key={`b-${i}`} className="mx-2 animate-bounce-slow">
          <ReviewCard item={item} index={i} />
        </div>
      ))}
    </div>
  </div>
)

const ReviewsSection = () => {
  return (
    <section className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-light text-gray-900">Apa Kata Mereka</h2>
          <p className="text-gray-600">Ulasan pelanggan tentang koleksi tenun Timor</p>
        </div>
        <Row reverse={false} speed="slow" />
        <Row reverse={true} speed="medium" />
        <Row reverse={false} speed="fast" />
      </div>
    </section>
  )
}

export default ReviewsSection