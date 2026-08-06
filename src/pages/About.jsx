import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, HeartPulse } from 'lucide-react';
import { greenVillagePractices, manfaat, phbsItems } from '../data/aboutData';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-[#F4F6F3] border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-emerald-800 font-semibold text-xs tracking-wider uppercase mb-3"
            >
              <Leaf className="w-4 h-4 text-emerald-600" />
              <span>Tentang Program</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-slate-900 font-display leading-tight"
            >
              Mengenal Green Village
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-slate-600 text-lg leading-relaxed"
            >
              Gerakan dan program pengelolaan lingkungan terpadu di Desa Tegalsari Timur yang hadir untuk 
              mewujudkan lingkungan desa yang bersih, sehat, dan berkelanjutan.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Apa Itu Green Village */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="max-w-4xl">
            <div className="bg-[#FAFAFA] rounded-2xl p-8 sm:p-12 border border-stone-200/80">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center">
                  <Leaf className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 font-display">Apa Itu Green Village?</h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4 text-base">
                <strong className="text-slate-900 font-semibold">Green Village</strong> adalah program dan gerakan sosial berbasis masyarakat
                yang bertujuan mewujudkan lingkungan desa yang bersih, sehat, dan berkelanjutan. Program ini mengajak seluruh 
                warga desa untuk berperan aktif menjaga kebersihan lingkungan melalui praktik-praktik nyata di kehidupan sehari-hari.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4 text-base">
                Konsep Green Village berfokus pada prinsip <strong className="text-slate-900 font-semibold">3R (Reduce, Reuse, Recycle)</strong> — yaitu mengurangi sampah, 
                menggunakan kembali, dan mendaur ulang. Dengan pendekatan ini, sampah yang dibuang ke Tempat 
                Pembuangan Akhir (TPA) berkurang drastis, sekaligus memberi nilai ekonomi tambahan dari sampah yang dikelola.
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                Penerapannya mencakup 6 perilaku utama warga serta dukungan terhadap 10 indikator Perilaku Hidup Bersih dan Sehat (PHBS) dalam rumah tangga.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6 Perilaku Green Village */}
      <section className="py-20 bg-[#F4F6F3] border-y border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-14 max-w-2xl">
            <div className="flex items-center gap-2 text-emerald-800 font-semibold text-xs tracking-wider uppercase mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Komitmen Bersama</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 font-display">6 Perilaku Utama Warga</h2>
            <p className="mt-3 text-slate-600 text-base">
              Praktik utama yang diterapkan seluruh warga dalam program Green Village untuk menjaga kebersihan desa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {greenVillagePractices.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-7 border border-stone-200/80 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manfaat Green Village */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-14 max-w-2xl">
            <div className="flex items-center gap-2 text-emerald-800 font-semibold text-xs tracking-wider uppercase mb-2">
              <Leaf className="w-4 h-4 text-emerald-600" />
              <span>Dampak Positif</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 font-display">Manfaat Green Village</h2>
            <p className="mt-3 text-slate-600 text-base">
              Manfaat nyata yang dirasakan masyarakat dan lingkungan desa secara keseluruhan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {manfaat.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-[#FAFAFA] rounded-2xl p-7 border border-stone-200/70 hover:border-emerald-300 hover:bg-white transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-100/70 text-emerald-800 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Perilaku PHBS */}
      <section className="py-20 bg-[#F4F6F3] border-t border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12 max-w-3xl">
            <div className="flex items-center gap-2 text-emerald-800 font-semibold text-xs tracking-wider uppercase mb-2">
              <HeartPulse className="w-4 h-4 text-emerald-600" />
              <span>Kesehatan Keluarga</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 font-display">
              10 Indikator PHBS di Rumah Tangga
            </h2>
            <p className="mt-3 text-slate-600 text-base leading-relaxed">
              Perilaku Hidup Bersih dan Sehat (PHBS) adalah fondasi utama keluarga sehat dan mandiri.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {phbsItems.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-7 h-7 rounded-full bg-emerald-800 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    {i + 1}
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
