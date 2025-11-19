import { motion } from 'framer-motion'
import { Shield, Zap, Receipt, BarChart3 } from 'lucide-react'

const items = [
  { icon: Shield, title: 'Bank‑grade security', desc: 'End‑to‑end encryption, role‑based access and audit trails.' },
  { icon: Zap, title: 'Instant invoicing', desc: 'Create, send and reconcile invoices with one click.' },
  { icon: Receipt, title: 'Subscriptions', desc: 'Automate billing cycles, proration and dunning.' },
  { icon: BarChart3, title: 'Analytics', desc: 'Real‑time revenue, MRR, churn and cohort insights.' },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-black via-black to-[#0b0b0b]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(46,204,113,0.08),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(255,158,44,0.08),transparent_35%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center text-3xl sm:text-4xl font-bold text-white">
          Built for finance teams
        </motion.h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.08 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition" style={{ background: 'radial-gradient(600px 120px at 50% 0%, rgba(46,204,113,0.15), transparent), radial-gradient(600px 120px at 80% 0%, rgba(255,158,44,0.15), transparent)' }} />
              <item.icon className="text-white/90" />
              <h3 className="mt-4 text-white font-semibold">{item.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
