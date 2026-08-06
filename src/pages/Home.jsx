import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Recycle, FolderTree, ArrowRight } from 'lucide-react';
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
            >
              <Recycle className="w-4 h-4 text-green-300" />
              <span className="text-sm text-green-100 font-medium">Desa Bersih, Sehat & Berkelanjutan</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-display"
            >
              Green Village
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg text-green-100/80 leading-relaxed max-w-xl"
            >
              Mewujudkan Desa Bersih, Sehat, dan Berkelanjutan melalui berbagai program
              pemberdayaan masyarakat dan pengelolaan lingkungan yang terpadu.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/plants"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-2xl shadow-lg shadow-green-500/30 hover:shadow-green-400/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                Program Lainnya
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/20 transition-all duration-300"
              >
                Selengkapnya
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none -mb-px z-10">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0 40L60 36.7C120 33.3 240 26.7 360 28.3C480 30 600 40 720 43.3C840 46.7 960 43.3 1080 38.3C1200 33.3 1320 26.7 1380 23.3L1440 20V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0V40Z" fill="#fefdfb" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto gap-6">
            {stats.map(({ icon: Icon, label, value, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-green-100/50 text-center group"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${color} shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 font-display">{value}</div>
                <div className="text-sm text-gray-500 mt-1">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tahukah Kamu Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            whileInView={fadeInUp.animate}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
              💡 Fakta Menarik
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-display">
              Tahukah Kamu?
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Fakta-fakta menarik seputar sampah dan lingkungan yang perlu kamu ketahui.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                emoji: '🛍️',
                highlight: '500 Tahun',
                desc: 'Waktu yang dibutuhkan satu kantong plastik untuk terurai di alam. Yuk, beralih ke tas belanja kain!',
                color: 'from-red-500 to-orange-500',
                bg: 'from-red-50 to-orange-50',
              },
              {
                emoji: '🗑️',
                highlight: '64 Juta Ton',
                desc: 'Jumlah sampah yang dihasilkan Indonesia setiap tahunnya. Pemilahan dari rumah bisa mengurangi volume sampah secara signifikan.',
                color: 'from-amber-500 to-yellow-500',
                bg: 'from-amber-50 to-yellow-50',
              },
              {
                emoji: '♻️',
                highlight: '60%',
                desc: 'Sampah rumah tangga di Indonesia adalah sampah organik yang bisa diolah menjadi kompos atau pupuk cair (POC).',
                color: 'from-green-500 to-emerald-500',
                bg: 'from-green-50 to-emerald-50',
              },
              {
                emoji: '💧',
                highlight: '1 Liter',
                desc: 'Minyak jelantah yang dibuang sembarangan bisa mencemari hingga 1 juta liter air bersih.',
                color: 'from-blue-500 to-cyan-500',
                bg: 'from-blue-50 to-cyan-50',
              },
              {
                emoji: '🌱',
                highlight: '2-3 Bulan',
                desc: 'Waktu yang dibutuhkan sampah organik untuk menjadi kompos siap pakai jika diolah dengan benar.',
                color: 'from-emerald-500 to-teal-500',
                bg: 'from-emerald-50 to-teal-50',
              },
              {
                emoji: '🔋',
                highlight: '1 Baterai',
                desc: 'Satu baterai bekas yang dibuang sembarangan bisa mencemari tanah seluas 1 meter persegi selama 50 tahun.',
                color: 'from-purple-500 to-indigo-500',
                bg: 'from-purple-50 to-indigo-50',
              },
            ].map(({ emoji, highlight, desc, color, bg }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`bg-gradient-to-br ${bg} rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:shadow-gray-900/5 transition-all duration-300 group hover:-translate-y-1`}
              >
                <div className="text-3xl mb-3">{emoji}</div>
                <div className={`text-2xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent font-display mb-2`}>
                  {highlight}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Harian Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            whileInView={fadeInUp.animate}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
              🌿 Tips Praktis
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-display">
              Tips Harian untuk Warga
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Langkah-langkah sederhana yang bisa dilakukan setiap hari untuk menjaga lingkungan desa tetap bersih dan sehat.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                title: 'Pilah Sampah dari Rumah',
                desc: 'Sediakan minimal 2 tempat sampah di rumah: untuk sampah organik (sisa makanan, daun) dan anorganik (plastik, kertas, botol).',
                icon: '🗂️',
              },
              {
                num: '02',
                title: 'Bawa Tas Belanja Sendiri',
                desc: 'Biasakan membawa totebag atau tas kain saat berbelanja ke warung atau pasar untuk mengurangi penggunaan plastik.',
                icon: '🛍️',
              },
              {
                num: '03',
                title: 'Olah Sisa Dapur Jadi Kompos',
                desc: 'Kumpulkan sisa sayuran, kulit buah, dan nasi basi untuk dijadikan kompos atau pupuk organik cair (POC).',
                icon: '🌿',
              },
              {
                num: '04',
                title: 'Hemat Air Bersih',
                desc: 'Gunakan air secukupnya saat mencuci dan mandi. Tampung air hujan untuk menyiram tanaman.',
                icon: '💧',
              },
              {
                num: '05',
                title: 'Buang Minyak Jelantah dengan Benar',
                desc: 'Jangan buang minyak bekas ke saluran air. Kumpulkan dan setor ke bank sampah atau olah jadi sabun.',
                icon: '🫗',
              },
              {
                num: '06',
                title: 'Manfaatkan Barang Bekas',
                desc: 'Botol plastik bisa jadi pot tanaman, karton bekas jadi tempat penyimpanan. Kreativitas mengurangi sampah!',
                icon: '♻️',
              },
              {
                num: '07',
                title: 'Jaga Kebersihan Selokan',
                desc: 'Rutin bersihkan selokan dan saluran air di sekitar rumah agar tidak tersumbat sampah dan mencegah banjir.',
                icon: '🏠',
              },
              {
                num: '08',
                title: 'Ajak Keluarga & Tetangga',
                desc: 'Lingkungan bersih dimulai dari kesadaran bersama. Ajak keluarga dan tetangga untuk peduli kebersihan.',
                icon: '🤝',
              },
            ].map(({ num, title, desc, icon }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative bg-gradient-to-br from-green-50 to-cream-50 rounded-2xl p-6 border border-green-100/50 hover:shadow-lg hover:shadow-green-900/5 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="absolute top-4 right-4 text-3xl font-bold text-green-100 font-display group-hover:text-green-200 transition-colors duration-300">
                  {num}
                </div>
                <div className="text-2xl mb-3">{icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2 pr-8">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-8 sm:p-12 lg:p-16 text-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
                Jelajahi Program Green Village
              </h2>
              <p className="mt-4 text-green-100/80 max-w-xl mx-auto">
                Temukan {plants.length}+ program yang bisa diterapkan
                untuk mewujudkan desa yang bersih, sehat, dan berkelanjutan.
              </p>
              <Link
                to="/plants"
                className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-white text-green-700 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Lihat Semua Program
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
