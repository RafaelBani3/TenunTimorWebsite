import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  
  // Gambar kain tenun Timor NTT yang autentik - nuansa minimalis profesional
  const slides = [
    {
      id: 1,
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Traditional%20Timor%20textile%20weaving%2C%20handwoven%20fabric%20with%20geometric%20patterns%2C%20natural%20dyes%2C%20brown%20beige%20cream%20colors%2C%20minimalist%20professional%20photography%2C%20soft%20lighting%2C%20Indonesian%20traditional%20craft&image_size=landscape_16_9',
      title: 'Tenun Tradisional Timor',
      description: 'Kain tenun autentik buatan tangan oleh pengrajin lokal NTT',
      alt: 'Kain tenun tradisional Timor NTT dengan motif geometris khas',
      cta: 'Jelajahi Koleksi'
    },
    {
      id: 2,
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Timor%20textile%20patterns%20close-up%2C%20traditional%20woven%20fabric%20texture%2C%20earth%20tone%20colors%2C%20brown%20cream%20beige%2C%20handcraft%20detail%2C%20minimalist%20professional%20photography%2C%20cultural%20heritage&image_size=landscape_16_9',
      title: 'Detail Motif Tenun',
      description: 'Keindahan detail motif yang memiliki makna budaya dalam',
      alt: 'Detail motif tenun Timor dengan tekstur khas tangan',
      cta: 'Lihat Detail'
    },
    {
      id: 3,
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Traditional%20Timor%20woven%20fabric%20display%2C%20textile%20art%2C%20natural%20materials%2C%20earthy%20tones%2C%20professional%20product%20photography%2C%20minimalist%20style%2C%20Indonesian%20cultural%20heritage%2C%20premium%20quality&image_size=landscape_16_9',
      title: 'Koleksi Premium',
      description: 'Koleksi kain tenun premium dari pengrajin terbaik Timor',
      alt: 'Koleksi kain tenun premium Timor NTT berkualitas tinggi',
      cta: 'Lihat Produk'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  // Entrance animation effect - lebih smooth
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 1000); // Longer delay for smoother entrance

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-gray-100 group rounded-2xl shadow-2xl">
      {/* Slides */}
      <div 
        className="flex transition-transform duration-1000 ease-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            {/* Subtle Overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
            
            {/* Content - Minimalis dengan animasi yang lebih smooth */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`text-center text-white max-w-2xl px-6 ${
                isAnimating ? 'opacity-0' : 'opacity-100'
              }`}>
                <h2 className={`text-3xl md:text-4xl font-light mb-4 tracking-wide transition-all duration-1500 ease-out ${
                  isAnimating ? 'transform translate-y-12' : 'transform translate-y-0'
                }`}>
                  {slide.title}
                </h2>
                <p className={`text-lg md:text-xl mb-8 font-light opacity-90 transition-all duration-1500 ease-out delay-300 ${
                  isAnimating ? 'transform translate-y-12' : 'transform translate-y-0'
                }`}>
                  {slide.description}
                </p>
                <button className={`bg-white/95 text-gray-900 px-10 py-4 font-medium tracking-wide hover:bg-white hover:scale-105 hover:shadow-xl transition-all duration-500 ease-out transform delay-600 rounded-full ${
                  isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}>
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons - Smooth & Rounded */}
      <button
        onClick={prevSlide}
        className={`absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-all duration-500 ease-out hover:scale-110 hover:shadow-2xl opacity-0 group-hover:opacity-100 backdrop-blur-sm ${
          isAnimating ? 'translate-x-8' : 'translate-x-0'
        }`}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className={`absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-all duration-500 ease-out hover:scale-110 hover:shadow-2xl opacity-0 group-hover:opacity-100 backdrop-blur-sm ${
          isAnimating ? '-translate-x-8' : 'translate-x-0'
        }`}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator - Smooth & Rounded */}
      <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 transition-all duration-1000 delay-700 ease-out ${
        isAnimating ? 'translate-y-6 opacity-0' : 'translate-y-0 opacity-100'
      }`}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all duration-500 ease-out hover:scale-125 ${
              currentSlide === index
                ? 'bg-white w-8 h-2'
                : 'bg-white/40 hover:bg-white/70 w-2 h-2'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;