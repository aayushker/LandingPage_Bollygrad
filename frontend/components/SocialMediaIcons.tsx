import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'

export default function SocialMediaIcons() {
  return (
    <div className="fixed left-4 bottom-4 z-30">
      <div className="flex flex-col space-y-2">
        <a href="#" className="bg-red-600 p-2 rounded-full text-white hover:bg-red-700 transition-colors">
          <Youtube className="h-6 w-6" />
        </a>
        <a href="#" className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition-colors">
          <Facebook className="h-6 w-6" />
        </a>
        <a href="#" className="bg-sky-500 p-2 rounded-full text-white hover:bg-sky-600 transition-colors">
          <Twitter className="h-6 w-6" />
        </a>
        <a href="#" className="bg-pink-600 p-2 rounded-full text-white hover:bg-pink-700 transition-colors">
          <Instagram className="h-6 w-6" />
        </a>
        <a href="#" className="bg-blue-800 p-2 rounded-full text-white hover:bg-blue-900 transition-colors">
          <Linkedin className="h-6 w-6" />
        </a>
      </div>
    </div>
  )
}
