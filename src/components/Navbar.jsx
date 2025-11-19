import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2">
          <div className="w-8 h-8 rounded-md" style={{ background: 'linear-gradient(135deg, #2ecc71 0%, #ff9e2c 100%)' }} />
          <span className="text-white font-semibold tracking-tight">Ohminet</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-white/70 hover:text-white transition">Features</a>
          <a href="#preview" className="text-white/70 hover:text-white transition">Preview</a>
          <a href="#pricing" className="text-white/70 hover:text-white transition">Pricing</a>
        </nav>
        <button className="md:hidden p-2 text-white/80"><Menu size={22} /></button>
        <a href="#cta" className="hidden md:inline-flex items-center px-4 py-2 rounded-lg font-medium text-black" style={{ backgroundColor: '#2ecc71' }}>
          Get Started
        </a>
      </div>
    </header>
  )
}
