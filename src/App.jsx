import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Preview from './components/Preview'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Features />
      <Preview />
      <CTA />
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Ohminet. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-white/60 hover:text-white">Privacy</a>
            <a href="#" className="text-white/60 hover:text-white">Terms</a>
            <a href="#" className="text-white/60 hover:text-white">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
