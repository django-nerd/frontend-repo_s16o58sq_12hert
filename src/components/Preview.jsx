import { motion } from 'framer-motion'

export default function Preview() {
  return (
    <section id="preview" className="relative py-24 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(46,204,113,0.08),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(255,158,44,0.08),transparent_35%)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-white">
            See the dashboard in action
          </motion.h2>
          <p className="mt-3 text-white/70 max-w-2xl">
            A quick look at billing flows, subscription management and real‑time analytics.
          </p>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-10 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
            <div className="aspect-video w-full">
              <video className="w-full h-full object-cover" controls poster="https://images.unsplash.com/photo-1551281044-8d8d0d8e8a1b?q=80&w=1920&auto=format&fit=crop">
                <source src="https://cdn.coverr.co/videos/coverr-doing-business-1205/1080p.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>

          <div className="mt-6 text-white/50 text-xs">
            Demo footage for illustration purposes
          </div>
        </div>
      </div>
    </section>
  )
}
