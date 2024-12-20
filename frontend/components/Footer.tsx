import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'What we do?', href: '/what-we-do' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/hashtag/bollygradstudioz' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/Bollygrad' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/bollygradstudioz/?__coig_restricted=1' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/bollygradstudioz/?originalSubdomain=in' },
    { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/BollygradStudioz' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Punchline */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/logo.png"
              alt="Bollygrad Studioz Logo"
              width={150}
              height={50}
              className="mb-4"
            />
            <p className="text-sm text-gray-400 text-center md:text-left">
              Cinema or theatre is a different world where one can not only see dreams but make them real too.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-center md:text-left">Quick Links</h3>
            <ul className="space-y-2 text-center md:text-left">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-center md:text-left">Connect With Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="h-6 w-6" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Bollygrad Studioz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
