import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from '@/components/Carousel'
import { Star } from 'lucide-react'
import { useScrollAnimation, scrollAnimationClasses } from '@/hooks/useScrollAnimation'

const Home = () => {
  // Scroll animations for different sections
  const aboutAnimation = useScrollAnimation()
  const featuresAnimation = useScrollAnimation()
  const ctaAnimation = useScrollAnimation()
  
  const feature1Animation = useScrollAnimation()
  const feature2Animation = useScrollAnimation()
  const feature3Animation = useScrollAnimation()
  const reviews = [
    { name: 'Rina', photo: 'https://i.pravatar.cc/80?img=32', text: 'Kainnya autentik dan kualitasnya sangat bagus. Cocok untuk acara resmi.' },
    { name: 'Andi', photo: 'https://i.pravatar.cc/80?img=12', text: 'Motifnya unik, terasa budaya Timor yang kuat. Pengiriman cepat!' },
    { name: 'Maya', photo: 'https://i.pravatar.cc/80?img=45', text: 'Sangat puas, bahan lembut dan nyaman. Warna alami terlihat elegan.' },
    { name: 'Budi', photo: 'https://i.pravatar.cc/80?img=7', text: 'Pernah sewa untuk lamaran, tampilannya mewah sekali. Recommended.' },
    { name: 'Sinta', photo: 'https://i.pravatar.cc/80?img=31', text: 'Detail tenunnya luar biasa. Cocok jadi koleksi pribadi.' },
    { name: 'Eka', photo: 'https://i.pravatar.cc/80?img=22', text: 'Pelayanan ramah, produk berkualitas. Akan beli lagi.' },
    { name: 'Dian', photo: 'https://i.pravatar.cc/80?img=50', text: 'Harga sebanding dengan kualitas. Foto asli bahkan lebih cantik.' },
    { name: 'Yudi', photo: 'https://i.pravatar.cc/80?img=15', text: 'Sewa untuk acara adat, semua tamu memuji. Terima kasih!' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Carousel Section */}
      <section>
        <div className="max-w-7xl mx-auto">
          <Carousel />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div 
              ref={aboutAnimation.ref}
              className={scrollAnimationClasses(aboutAnimation.isVisible, 'fade-left')}
            >
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                Warisan Budaya <span className="font-medium">Timor</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Kain tenun Timor adalah warisan budaya yang kaya dari Nusa Tenggara Timur. 
                  Setiap helai kain dtenun dengan tangan menggunakan teknik tradisional 
                  yang telah diwariskan selama berabad-abad.
                </p>
                <p>
                  Proses pembuatan yang memakan waktu berminggu-minggu menghasilkan kain 
                  dengan kualitas premium dan motif yang unik, mencerminkan kearifan lokal 
                  dan kedalaman budaya Timor.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/about">
                  <button className="text-gray-900 font-medium border-b border-gray-900 hover:border-gray-600 transition-all duration-300 hover:scale-105">
                    Pelajari Selengkapnya →
                  </button>
                </Link>
              </div>
            </div>
            <div 
              ref={aboutAnimation.ref}
              className={scrollAnimationClasses(aboutAnimation.isVisible, 'fade-right')}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Traditional%20Timor%20weaving%20process%2C%20artisan%20hands%20working%20on%20backstrap%20loom%2C%20natural%20light%2C%20earth%20tone%20colors%2C%20minimalist%20documentary%20photography%2C%20cultural%20heritage%2C%20professional%20composition&image_size=portrait_4_3"
                  alt="Proses pembuatan tenun Timor"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div 
            ref={featuresAnimation.ref}
            className={scrollAnimationClasses(featuresAnimation.isVisible, 'fade-up')}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-4">
                Mengapa Memilih <span className="font-medium">Tenun Timor</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Kami menghadirkan keindahan budaya Timor dalam setiap helai tenun 
                dengan standar kualitas tertinggi dan desain yang autentik.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div 
              ref={feature1Animation.ref}
              className={scrollAnimationClasses(feature1Animation.isVisible, 'scale')}
            >
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-6 flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🧵</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">Autentik Tradisional</h3>
                <p className="text-gray-600 leading-relaxed">
                  Setiap kain dibuat dengan teknik tradisional oleh pengrajin lokal asli Timor, 
                  menjaga keaslian budaya yang telah ada selama berabad-abad.
                </p>
              </div>
            </div>

            <div 
              ref={feature2Animation.ref}
              className={scrollAnimationClasses(feature2Animation.isVisible, 'scale')}
            >
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-6 flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">✨</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">Kualitas Premium</h3>
                <p className="text-gray-600 leading-relaxed">
                  Menggunakan bahan alami berkualitas tinggi dengan proses pembuatan 
                  yang teliti menghasilkan kain yang tahan lama dan elegan.
                </p>
              </div>
            </div>

            <div 
              ref={feature3Animation.ref}
              className={scrollAnimationClasses(feature3Animation.isVisible, 'scale')}
            >
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-6 flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🔄</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">Fleksibel & Modern</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tersedia pilihan beli untuk koleksi atau sewa untuk acara spesial, 
                  dengan desain yang sesuai untuk gaya hidup modern.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div 
            ref={ctaAnimation.ref}
            className={scrollAnimationClasses(ctaAnimation.isVisible, 'scale')}
          >
            <h2 className="text-3xl font-light text-white mb-4">
              Temukan Koleksi <span className="font-medium">Tenun Timor</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Jelajahi keindahan tenun tradisional Timor yang autentik dan 
              nikmati keanggunan budaya dalam gaya hidup Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <button className="bg-white text-gray-900 px-8 py-3 font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg transform">
                  Lihat Semua Produk
                </button>
              </Link>
              <Link to="/products?filter=rental">
                <button className="border border-white text-white px-8 py-3 font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-lg transform">
                  Sewa Tenun
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-2">Apa Kata Mereka</h2>
            <p className="text-gray-600">Testimoni pelanggan tentang keindahan dan kualitas Tenun Timor</p>
          </div>

          <div className="space-y-8">
            <div className="auto-slider mask-fade pause-on-hover">
              <div className="auto-slider-track reverse" style={{ animationDuration: '30s' }}>
                {[...reviews, ...reviews].map((r, i) => (
                  <div key={`row1-${i}`} className="inline-flex items-center bg-white border border-gray-200 rounded-2xl px-6 py-4 shadow-sm flex-shrink-0 min-w-[18rem]">
                    <img src={r.photo} alt={r.name} className="h-12 w-12 rounded-full object-cover mr-4" />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-gray-900">{r.name}</span>
                        <div className="flex items-center text-yellow-500">
                          <Star className="h-3 w-3 fill-current" />
                          <Star className="h-3 w-3 fill-current" />
                          <Star className="h-3 w-3 fill-current" />
                          <Star className="h-3 w-3 fill-current" />
                          <Star className="h-3 w-3 fill-current" />
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 leading-relaxed">{r.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="auto-slider mask-fade pause-on-hover">
              <div className="auto-slider-track" style={{ animationDuration: '34s' }}>
                {[...reviews.slice().reverse(), ...reviews.slice().reverse()].map((r, i) => (
                  <div key={`row2-${i}`} className="inline-flex items-center bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 shadow-sm flex-shrink-0 min-w-[18rem]">
                    <img src={r.photo} alt={r.name} className="h-12 w-12 rounded-full object-cover mr-4" />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-gray-900">{r.name}</span>
                        <div className="flex items-center text-yellow-500">
                          <Star className="h-3 w-3 fill-current" />
                          <Star className="h-3 w-3 fill-current" />
                          <Star className="h-3 w-3 fill-current" />
                          <Star className="h-3 w-3 fill-current" />
                          <Star className="h-3 w-3 fill-current" />
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 leading-relaxed">{r.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home