import Image from 'next/image'
import { Twitter, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

const founders = [
  {
    name: 'Dr. Ramendra Chakarwarti',
    role: 'Managing Director',
    image: '/ramendra.png',
    bio: 'Dr. Ramendra Kumar Chakarwarti has been active in theatre both in theory and practice for about two decades.',
    socialLinks: {
      twitter: '#',
      facebook: '#',
      instagram: '#',
      linkedin: '#',
      youtube: '#'
    }
  },
  {
    name: 'Dr. Rajkumar Yadav',
    role: 'Managing Director',
    image: '/rajkumar.jpg',
    bio: 'Dr. Rajkumar Yadav is currently the Director of Bollygrad Studioz. He has completed his PhD in Russian Linguistics from JNU.',
    socialLinks: {
      twitter: '#',
      facebook: '#',
      instagram: '#',
      linkedin: '#',
      youtube: '#'
    }
  }
]

export default function Founders() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-700 text-white transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">
            FOUNDERS
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 justify-center">
          {founders.map((founder) => (
            <div key={founder.name} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
              <div className="relative mx-auto" style={{ width: '300px', height: '296px' }}>
                <Image
                  src={founder.image}
                  alt={founder.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold">{founder.name}</h3>
                    <p className="text-xl text-red-400">{founder.role}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">{founder.bio}</p>
                <div className="flex justify-center space-x-4">
                  <a href={founder.socialLinks.twitter} className="text-gray-400 hover:text-white transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href={founder.socialLinks.facebook} className="text-gray-400 hover:text-white transition-colors">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href={founder.socialLinks.instagram} className="text-gray-400 hover:text-white transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href={founder.socialLinks.linkedin} className="text-gray-400 hover:text-white transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href={founder.socialLinks.youtube} className="text-gray-400 hover:text-white transition-colors">
                    <Youtube className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}