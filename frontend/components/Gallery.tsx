import Image from 'next/image'

const images = Array.from({ length: 20 }, (_, i) => `/gallery-${i + 1}.jpg`)

export default function Gallery() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-white">
          Gallery
        </h2>
        <div className="relative overflow-hidden" style={{ height: '300px' }}>
          <div className="flex animate-scroll">
            {[...images, ...images].map((src, index) => (
              <div key={index} className="flex-none w-64 h-64 p-2">
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  width={250}
                  height={250}
                  className="rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

