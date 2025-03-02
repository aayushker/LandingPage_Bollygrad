import { Theater, Users, Video } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    title: 'Stage Play',
    icon: Theater,
    description: 'Experience the magic of live theater with our captivating stage productions.',
    link: '/stage-play'
  },
  {
    title: 'Street Play',
    icon: Users,
    description: 'Witness powerful performances that bring social issues to life in public spaces.',
    link: '/street-play'
  },
  {
    title: 'Short Film',
    icon: Video,
    description: 'Explore compelling narratives through our award-winning short film productions.',
    link: '/short-film'
  }
]

export default function WhatWeDo() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-100 to-white transition-all duration-500">
      <div className="absolute inset-0">
        <img src="/whatwe.png" alt="Background" className="w-full h-full object-cover opacity-10" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-yellow-600">
            WHAT WE DO?
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white bg-opacity-90 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
              <div className="flex items-center justify-center h-48 bg-gradient-to-r from-red-600 to-yellow-600">
                <service.icon className="h-24 w-24 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <Link href={service.link} className="text-red-600 hover:text-red-800 font-semibold">
                    View All
                  </Link>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded transition duration-300">
                    Stay Here
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}