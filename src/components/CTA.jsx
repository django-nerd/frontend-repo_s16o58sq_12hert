import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 bg-[#0b0b0b]">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(600px 160px at 10% 0%, rgba(46,204,113,0.14), transparent), radial-gradient(600px 160px at 90% 0%, rgba(255,158,44,0.12), transparent)' }} />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-white">
          Get started with Ohminet today
        </motion.h2>
        <p className="mt-3 text-white/70">
          Start a free trial and ship your first invoices in minutes. No credit card required.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#" className="px-5 py-3 rounded-lg font-semibold text-black" style={{ backgroundColor: '#2ecc71' }}>
            Start free trial
          </a>
          <a href="#pricing" className="px-5 py-3 rounded-lg font-semibold border border-white/15 text-white/90 hover:bg-white/5 transition">
            View pricing
          </a>
        </div>
      </div>
    </section>
  )
}
