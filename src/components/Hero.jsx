import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(46,204,113,0.25),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(255,158,44,0.2),transparent_30%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-28">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium bg-white/10 text-white/80 ring-1 ring-white/15 backdrop-blur">
            Fintech Billing Suite · Secure · Real-time
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-bold leading-tight text-white tracking-tight">
            Power your billing with Ohminet
          </h1>
          <p className="mt-4 text-lg text-white/80">
            A modern, secure and automated billing platform. Generate invoices, track subscriptions and reconcile payments in minutes — not months.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#preview" className="inline-flex items-center justify-center px-5 py-3 rounded-lg font-semibold text-black" style={{ backgroundColor: '#2ecc71' }}>
              View Dashboard
            </a>
            <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-lg font-semibold border border-white/15 text-white/90 hover:bg-white/5 transition">
              Explore Features
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
