import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Recycle, FolderTree, ArrowRight, Lightbulb, CheckCircle2, Droplets, Trash2, Leaf, ShieldAlert, Sparkles } from 'lucide-react';
import { usePlants } from '../hooks/usePlants';
import { getCategories } from '../utils/helpers';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7 },
};

export default function Home() {
  const { plants } = usePlants();
  const categories = getCategories(plants);

  const stats = [
    { icon: Recycle, label: 'Program Desa', value: plants.length, color: 'from-green-500 to-emerald-600' },
    { icon: FolderTree, label: 'Kategori', value: categories.length, color: 'from-teal-500 to-green-600' },
  ];



  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen lg:h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1600&h=900&fit=crop"
            alt="Green Village"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-green-900/75 to-green-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-green-950/50 to-transparent" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 sm:pt-28 sm:pb-24 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-emerald-300 font-semibold text-xs tracking-wider uppercase mb-4"
            >
              <Recycle className="w-4 h-4 text-emerald-400" />
              <span>Desa Bersih, Sehat & Berkelanjutan</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-display"
            >
              Green Village
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-lg text-emerald-100/90 leading-relaxed max-w-xl"
            >
              Bersama-sama kita jaga desa kita supaya tetap bersih, sehat, dan nyaman
              untuk ditinggali anak cucu kita nanti.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-3.5"
            >
              <Link
                to="/plants"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-xl shadow-sm transition-all duration-200"
              >
                Program Pengelolaan Sampah
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-200 backdrop-blur-sm"
              >
                Selengkapnya
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none -mb-px z-10">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0 40L60 36.7C120 33.3 240 26.7 360 28.3C480 30 600 40 720 43.3C840 46.7 960 43.3 1080 38.3C1200 33.3 1320 26.7 1380 23.3L1440 20V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0V40Z" fill="#F4F6F3" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#F4F6F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto gap-6">
            {stats.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200/80 text-center flex flex-col items-center justify-center"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-800 text-white flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-slate-900 font-display">{value}</div>
                <div className="text-sm font-medium text-slate-500 mt-1">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tahukah Kamu Section */}
      <section className="py-20 bg-[#F4F6F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            whileInView={fadeInUp.animate}
            viewport={{ once: true }}
            className="mb-12 max-w-xl"
          >
            <div className="flex items-center gap-2 text-emerald-800 font-semibold text-sm tracking-wide uppercase mb-2">
              <Lightbulb className="w-4 h-4 text-emerald-600" />
              <span>Info & Informasi Lingkungan</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display">
              Tahukah Kamu?
            </h2>
            <p className="mt-3 text-slate-600 text-base leading-relaxed">
              Ternyata soal sampah dan lingkungan itu banyak hal yang jarang orang tahu, lho.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Trash2,
                highlight: '500 Tahun',
                desc: 'Bayangin, satu kantong plastik aja butuh waktu 500 tahun baru hancur. Makanya mending pakai tas kain aja, ya!',
              },
              {
                icon: ShieldAlert,
                highlight: '64 Juta Ton',
                desc: 'Indonesia menghasilkan sampah sebanyak itu tiap tahun. Kalau dari rumah sudah dipilah, sampah ke TPA bisa jauh berkurang.',
              },
              {
                icon: Recycle,
                highlight: '60% Organik',
                desc: 'Lebih dari setengah sampah rumah tangga itu sampah organik. Sisa sayur, kulit buah, nasi basi — semua bisa jadi kompos atau POC.',
              },
              {
                icon: Droplets,
                highlight: '1 Liter Jelantah',
                desc: 'Cuma 1 liter minyak jelantah yang dibuang ke got bisa bikin 1 juta liter air tercemar. Serem kan?',
              },
              {
                icon: Leaf,
                highlight: '2-3 Bulan',
                desc: 'Sampah organik cuma perlu 2-3 bulan buat jadi kompos. Lumayan banget buat tanaman di pekarangan rumah.',
              },
              {
                icon: Sparkles,
                highlight: '1 Baterai Bekas',
                desc: 'Satu baterai bekas aja bisa bikin tanah seluas 1 meter persegi tercemar selama 50 tahun. Jangan buang sembarangan!',
              },
            ].map(({ icon: IconComponent, highlight, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-7 border border-stone-200/80 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-5">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 font-display mb-2">
                    {highlight}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Harian Section */}
      <section className="py-20 bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            whileInView={fadeInUp.animate}
            viewport={{ once: true }}
            className="mb-14 max-w-xl"
          >
            <div className="flex items-center gap-2 text-emerald-800 font-semibold text-sm tracking-wide uppercase mb-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Panduan Kebiasaan Baik</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display">
              Tips Harian untuk Warga
            </h2>
            <p className="mt-3 text-slate-600 text-base leading-relaxed">
              Hal-hal kecil yang kalau rutin dilakukan, dampaknya besar banget buat lingkungan kita.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '1',
                title: 'Pilah Sampah dari Rumah',
                desc: 'Cukup siapin 2 tempat sampah di rumah — satu buat sisa makanan dan daun, satu lagi buat plastik, kertas, dan botol.',
              },
              {
                num: '2',
                title: 'Bawa Tas Belanja Sendiri',
                desc: 'Kalau mau ke warung atau pasar, bawa tas kain dari rumah. Selain hemat, juga ngurangin plastik.',
              },
              {
                num: '3',
                title: 'Olah Sisa Dapur Jadi Kompos',
                desc: 'Sisa sayur, kulit buah, nasi basi jangan langsung dibuang. Kumpulin, bisa jadi kompos atau pupuk cair.',
              },
              {
                num: '4',
                title: 'Hemat Air Bersih',
                desc: 'Pakai air secukupnya aja. Kalau hujan, tampung airnya buat nyiram tanaman.',
              },
              {
                num: '5',
                title: 'Buang Minyak Jelantah Benar',
                desc: 'Minyak bekas goreng jangan dibuang ke got. Bisa dikumpulin dan disetor ke bank sampah, atau diolah jadi sabun.',
              },
              {
                num: '6',
                title: 'Manfaatkan Barang Bekas',
                desc: 'Botol bekas bisa jadi pot, karton bisa jadi tempat simpan barang. Tinggal kreatif aja!',
              },
              {
                num: '7',
                title: 'Jaga Kebersihan Selokan',
                desc: 'Sempetin bersihin selokan depan rumah biar nggak mampet dan nggak jadi sarang nyamuk.',
              },
              {
                num: '8',
                title: 'Ajak Keluarga & Tetangga',
                desc: 'Ngajak tetangga dan keluarga buat bareng-bareng jaga kebersihan itu penting. Kan nggak seru kalau sendirian.',
              },
            ].map(({ num, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-[#FAFAFA] rounded-2xl p-6 border border-stone-200/70 hover:border-emerald-300 hover:bg-white transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-800 text-white font-bold text-xs flex items-center justify-center mb-4">
                  {num}
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F4F6F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-emerald-950 rounded-3xl p-8 sm:p-12 lg:p-14 text-center border border-emerald-900"
          >
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
                Jelajahi Program Green Village
              </h2>
              <p className="mt-3 text-emerald-200/80 leading-relaxed text-base">
                Temukan berbagai panduan dan program yang dapat diterapkan untuk mewujudkan desa yang bersih, sehat, dan berkelanjutan.
              </p>
              <Link
                to="/plants"
                className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-white text-emerald-950 font-semibold rounded-xl shadow-sm hover:bg-emerald-50 transition-all duration-200"
              >
                Lihat Semua Program
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
