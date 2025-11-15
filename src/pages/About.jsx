import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Tentang <span className="font-medium">Tenun Timor</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Melestarikan keindahan warisan budaya Timor melalui kain tenun tradisional yang autentik
            </p>
          </div>
        </div>
      </section>

      {/* Sejarah Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8">
                Sejarah <span className="font-medium">Kain Tenun Timor</span>
              </h2>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Kain tenun Timor memiliki sejarah yang panjang dan kaya, berakar pada tradisi budaya masyarakat 
                  Nusa Tenggara Timur selama berabad-abad. Teknik pembuatan kain tenun diwariskan dari generasi ke generasi, 
                  menjaga keaslian dan nilai-nilai budaya yang terkandung di dalamnya.
                </p>
                
                <p>
                  <strong>Proses pembuatan kain tenun Timor</strong> melibatkan berbagai tahap yang membutuhkan 
                  kesabaran, keterampilan, dan pengetahuan tradisional. Dimulai dari pemilihan bahan baku alami, 
                  pemintalan benang, pewarnaan menggunakan bahan alami, hingga proses tenun yang memakan waktu berhari-hari.
                </p>
                
                <p>
                  Setiap <strong>motif dalam kain tenun Timor</strong> memiliki makna dan cerita tersendiri. 
                  Motif-motif ini sering kali terinspirasi oleh alam sekitar, kepercayaan tradisional, dan 
                  pengalaman kehidupan sehari-hari masyarakat Timor.
                </p>
              </div>
              
              <div className="mt-8 p-6 bg-white border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-3">Nilai Budaya</h3>
                <p className="text-gray-600 leading-relaxed">
                  Kain tenun Timor bukan hanya sekadar kain, tetapi merupakan simbol identitas, 
                  kebanggaan budaya, dan media untuk melestarikan warisan leluhur. Setiap helai 
                  kain adalah karya seni yang unik dan tidak tergantikan.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="aspect-square bg-gray-100 overflow-hidden">
                <img
                  src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Traditional%20Timor%20textile%20weaving%20process%2C%20woman%20weaving%20on%20backstrap%20loom%2C%20authentic%20traditional%20clothing%2C%20earth%20tone%20colors%2C%20minimalist%20professional%20photography%2C%20soft%20natural%20lighting%2C%20cultural%20heritage%20documentation&image_size=square"
                  alt="Proses pembuatan kain tenun tradisional Timor"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Traditional%20Timor%20textile%20weaving%20process%2C%20woman%20weaving%20on%20backstrap%20loom%2C%20authentic%20traditional%20clothing%2C%20earth%20tone%20colors%2C%20minimalist%20professional%20photography%2C%20soft%20natural%20lighting%2C%20cultural%20heritage%20documentation&image_size=square'
                  }}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <img
                    src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Traditional%20Timor%20textile%20tools%2C%20wooden%20weaving%20shuttles%2C%20natural%20yarn%20spools%2C%20earth%20tone%20colors%2C%20minimalist%20flat%20lay%20photography%2C%20professional%20lighting%2C%20cultural%20craftsmanship&image_size=square"
                    alt="Alat tenun tradisional"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Traditional%20Timor%20textile%20tools%2C%20wooden%20weaving%20shuttles%2C%20natural%20yarn%20spools%2C%20earth%20tone%20colors%2C%20minimalist%20flat%20lay%20photography%2C%20professional%20lighting%2C%20cultural%20craftsmanship&image_size=square'
                    }}
                  />
                </div>
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <img
                    src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Natural%20dye%20materials%20for%20Timor%20textile%2C%20tree%20bark%2C%20leaves%2C%20roots%2C%20earth%20pigments%2C%20earth%20tone%20colors%2C%20minimalist%20professional%20photography%2C%20soft%20lighting%2C%20traditional%20craft%20materials&image_size=square"
                    alt="Bahan pewarna alami"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Natural%20dye%20materials%20for%20Timor%20textile%2C%20tree%20bark%2C%20leaves%2C%20roots%2C%20earth%20pigments%2C%20earth%20tone%20colors%2C%20minimalist%20professional%20photography%2C%20soft%20lighting%2C%20traditional%20craft%20materials&image_size=square'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teknik Pembuatan Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Teknik <span className="font-medium">Pembuatan</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proses tradisional yang membutuhkan kesabaran dan keahlian khusus
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Persiapan Benang",
                description: "Pemilihan dan pemintalan benang katun atau kapas alami"
              },
              {
                step: "02",
                title: "Pewarnaan Alami",
                description: "Pewarnaan menggunakan tumbuhan dan tanah alami"
              },
              {
                step: "03",
                title: "Pemasangan Loom",
                description: "Pemasangan alat tenun tradisional backstrap loom"
              },
              {
                step: "04",
                title: "Penenunan",
                description: "Proses tenun yang membutuhkan ketelitian dan kesabaran"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-100 flex items-center justify-center mb-6 mx-auto">
                  <span className="text-gray-900 font-medium text-lg">{item.step}</span>
                </div>
                <h3 className="font-medium text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motif Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Motif <span className="font-medium">Khas Timor</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Setiap motif memiliki makna dan cerita yang unik
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Kaif",
                meaning: "Kedamaian dan Keselarasan",
                description: "Motif ini melambangkan kehidupan yang damai dan harmonis, sangat populer dalam upacara adat."
              },
              {
                name: "Tais Maleo",
                meaning: "Keberanian dan Kekuatan",
                description: "Menggambarkan keberanian masyarakat Timor dalam menghadapi tantangan hidup."
              },
              {
                name: "Tais Laran",
                meaning: "Cinta dan Kasih Sayang",
                description: "Melambangkan cinta kasih antar sesama dan pentingnya persatuan dalam masyarakat."
              }
            ].map((motif, index) => (
              <div key={index} className="bg-white p-8 border border-gray-200">
                <h3 className="text-xl font-medium text-gray-900 mb-2">{motif.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{motif.meaning}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{motif.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-4">
            Pelajari Lebih Lanjut tentang <span className="font-medium">Tenun Timor</span>
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Kunjungi galeri kami dan temukan koleksi lengkap kain tenun tradisional Timor yang autentik
          </p>
          <Link
            to="/products"
            className="inline-flex items-center px-8 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
          >
            Lihat Koleksi Kami
            <span className="ml-2">→</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About