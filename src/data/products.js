export const productsData = [
  {
    id: 1,
    slug: 'tenun-timor-koleksi-premium-1',
    name: 'Tenun Timor Koleksi Premium 1',
    short_description: 'Kain tenun premium motif geometris khas Timor.',
    price: 1250000,
    is_rentable: true,
    rent_price: 95000,
    category: { name: 'Kain Tenun' },
    images: [
      {
        path: 'https://images.unsplash.com/photo-1547825407-2d060b3a58f2?q=80&w=1200&auto=format&fit=crop',
        alt: 'Kain tenun premium Timor'
      }
    ],
    variants: [
      { id: 11, price: 1250000, stock: 8, attributes: { warna: 'Coklat', ukuran: '2m' } },
      { id: 12, price: 1290000, stock: 5, attributes: { warna: 'Beige', ukuran: '2m' } }
    ]
  },
  {
    id: 2,
    slug: 'selendang-tenun-motif-klasik',
    name: 'Selendang Tenun Motif Klasik',
    short_description: 'Selendang tenun tradisional dengan motif klasik.',
    price: 450000,
    is_rentable: false,
    category: { name: 'Aksesoris' },
    images: [
      {
        path: 'https://images.unsplash.com/photo-1520975922284-0ce648bc78dd?q=80&w=1200&auto=format&fit=crop',
        alt: 'Selendang tenun motif klasik'
      }
    ],
    variants: [
      { id: 21, price: 450000, stock: 20, attributes: { warna: 'Merah Bata', ukuran: '170cm' } }
    ]
  },
  {
    id: 3,
    slug: 'tenun-timor-heritage-2',
    name: 'Tenun Timor Heritage 2',
    short_description: 'Kain tenun heritage dengan pewarnaan alami.',
    price: 980000,
    is_rentable: true,
    rent_price: 80000,
    category: { name: 'Kain Tenun' },
    images: [
      {
        path: 'https://images.unsplash.com/photo-1503919545888-5a66d3c9c600?q=80&w=1200&auto=format&fit=crop',
        alt: 'Kain tenun heritage Timor'
      }
    ],
    variants: [
      { id: 31, price: 980000, stock: 10, attributes: { warna: 'Coklat Gelap', ukuran: '2m' } }
    ]
  },
  {
    id: 4,
    slug: 'sarung-tenun-timor-modern',
    name: 'Sarung Tenun Timor Modern',
    short_description: 'Sarung tenun dengan desain modern dan elegan.',
    price: 650000,
    is_rentable: false,
    category: { name: 'Pakaian' },
    images: [
      {
        path: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=1200&auto=format&fit=crop',
        alt: 'Sarung tenun Timor modern'
      }
    ],
    variants: [
      { id: 41, price: 650000, stock: 14, attributes: { warna: 'Hitam', ukuran: 'L' } },
      { id: 42, price: 650000, stock: 9, attributes: { warna: 'Navy', ukuran: 'M' } }
    ]
  },
  {
    id: 5,
    slug: 'tas-tenun-timor-handmade',
    name: 'Tas Tenun Timor Handmade',
    short_description: 'Tas handmade dari kain tenun Timor.',
    price: 380000,
    is_rentable: false,
    category: { name: 'Aksesoris' },
    images: [
      {
        path: 'https://images.unsplash.com/photo-1444718070081-b02e08f616bd?q=80&w=1200&auto=format&fit=crop',
        alt: 'Tas tenun handmade Timor'
      }
    ],
    variants: [
      { id: 51, price: 380000, stock: 25, attributes: { warna: 'Coklat', ukuran: 'Medium' } }
    ]
  },
  {
    id: 6,
    slug: 'tenun-timor-collection-3',
    name: 'Tenun Timor Collection 3',
    short_description: 'Koleksi tenun dengan motif kontemporer.',
    price: 1150000,
    is_rentable: true,
    rent_price: 90000,
    category: { name: 'Kain Tenun' },
    images: [
      {
        path: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop',
        alt: 'Koleksi tenun kontemporer'
      }
    ],
    variants: [
      { id: 61, price: 1150000, stock: 6, attributes: { warna: 'Cream', ukuran: '2m' } }
    ]
  },
  {
    id: 7,
    slug: 'ikat-tenun-mini-decor',
    name: 'Ikat Tenun Mini Decor',
    short_description: 'Dekorasi dinding kecil dari kain tenun.',
    price: 210000,
    is_rentable: false,
    category: { name: 'Dekorasi' },
    images: [
      {
        path: 'https://images.unsplash.com/photo-1520974735194-6cc7ea1b4d5e?q=80&w=1200&auto=format&fit=crop',
        alt: 'Ikat tenun dekorasi'
      }
    ],
    variants: [
      { id: 71, price: 210000, stock: 30, attributes: { warna: 'Natural', ukuran: '40cm' } }
    ]
  },
  {
    id: 8,
    slug: 'selimut-tenun-timor-warm',
    name: 'Selimut Tenun Timor Warm',
    short_description: 'Selimut hangat dari kain tenun pilihan.',
    price: 780000,
    is_rentable: false,
    category: { name: 'Pakaian' },
    images: [
      {
        path: 'https://images.unsplash.com/photo-1493456477828-209efa3a8e3f?q=80&w=1200&auto=format&fit=crop',
        alt: 'Selimut tenun Timor'
      }
    ],
    variants: [
      { id: 81, price: 780000, stock: 12, attributes: { warna: 'Coklat', ukuran: 'XL' } }
    ]
  }
]

export const getProducts = ({ category, isRentable }) => {
  let items = productsData
  if (category) items = items.filter(p => (p.category?.name || '').toLowerCase() === category.toLowerCase())
  if (isRentable) items = items.filter(p => p.is_rentable)
  return items
}

export const getProductBySlug = (slug) => productsData.find(p => p.slug === slug)