import { motion } from 'framer-motion';
import { BookOpen, Target, Users, Recycle, TreePine, HeartHandshake } from 'lucide-react';
import Gallery from '../components/Gallery';

const galleryImages = [
  'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&h=400&fit=crop',
];

const galleryCaptions = [
  'Kegiatan pengelolaan sampah desa',
  'Pemilahan sampah rumah tangga',
  'Penghijauan lingkungan desa',
  'Kerajinan daur ulang warga',
  'Ecobrick untuk bangunan ramah lingkungan',
  'Komposting bersama masyarakat',
];

const timeline = [
  {
    year: '2023',
    title: 'Inisiasi Program',
    desc: 'Gagasan Green Village muncul dari keprihatinan warga terhadap permasalahan sampah yang belum terkelola dengan baik di desa.',
  },
  {
    year: '2024',
    title: 'Pembentukan Tim & Sosialisasi',
    desc: 'Tim Green Village dibentuk dan dilakukan sosialisasi program pengelolaan sampah ke seluruh warga desa.',
  },
  {
    year: '2025',
    title: 'Program Berjalan',
    desc: 'Bank sampah mulai beroperasi, program komposting aktif, dan kegiatan daur ulang berjalan rutin di setiap RT.',
  },
  {
    year: '2026',
    title: 'Digitalisasi & Ekspansi',
    desc: 'Peluncuran website Green Village dan perluasan program ke desa-desa tetangga sebagai model percontohan.',
  },
];

const goals = [
  {
    icon: Recycle,
    title: 'Desa Zero Waste',
    desc: 'Mewujudkan desa dengan pengelolaan sampah terpadu yang meminimalisir sampah ke tempat pembuangan akhir.',
  },
  {
    icon: BookOpen,
    title: 'Edukasi Lingkungan',
    desc: 'Memberikan edukasi tentang pemilahan sampah, daur ulang, dan komposting kepada seluruh lapisan masyarakat.',
  },
  {
    icon: TreePine,
    title: 'Ekonomi Sirkular',
    desc: 'Mendorong pemanfaatan sampah sebagai sumber daya ekonomi melalui bank sampah dan kerajinan daur ulang.',
  },
];

const benefits = [
  {
    icon: Target,
    title: 'Lingkungan Bersih',
    desc: 'Mewujudkan lingkungan desa yang bersih, bebas sampah berserakan, dan nyaman untuk ditinggali.',
  },
  {
    icon: Users,
    title: 'Kesehatan Masyarakat',
    desc: 'Mengurangi risiko penyakit akibat sampah yang tidak terkelola dan meningkatkan kualitas hidup warga.',
  },
  {
    icon: HeartHandshake,
    title: 'Pendapatan Tambahan',
    desc: 'Memberikan nilai ekonomi dari sampah melalui bank sampah, kerajinan daur ulang, dan penjualan kompos.',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-cream-50" />
        <div className="absolute top-10 right-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4"
          >
            Tentang Kami
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 font-display"
          >
            Mengenal Green Village
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg"
          >
            Program pengelolaan sampah terpadu di Desa Tegalsari Timur yang hadir untuk 
            mewujudkan lingkungan desa yang bersih, sehat, dan berkelanjutan.
          </motion.p>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
              Perjalanan Kami
            </span>
            <h2 className="text-3xl font-bold text-gray-900 font-display">Sejarah Singkat</h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-green-200 -translate-x-1/2" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative flex items-center mb-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-green-500 rounded-full -translate-x-1/2 border-4 border-cream-50 z-10" />

                {/* Card */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-green-100/50 hover:shadow-md transition-shadow duration-300">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold mb-2">
                      {item.year}
                    </span>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
              Visi & Misi
            </span>
            <h2 className="text-3xl font-bold text-gray-900 font-display">Tujuan Green Village</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {goals.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-gradient-to-br from-green-50 to-cream-50 rounded-2xl p-8 border border-green-100/50 hover:shadow-lg hover:shadow-green-900/5 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center mb-5 shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
              Dampak Positif
            </span>
            <h2 className="text-3xl font-bold text-gray-900 font-display">Manfaat bagi Masyarakat</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-green-100/50 hover:shadow-lg hover:shadow-green-900/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
              Dokumentasi
            </span>
            <h2 className="text-3xl font-bold text-gray-900 font-display">Galeri Foto</h2>
            <p className="mt-4 text-gray-500">Dokumentasi kegiatan pengelolaan sampah dan program Green Village.</p>
          </motion.div>

          <Gallery images={galleryImages} captions={galleryCaptions} />
        </div>
      </section>
    </div>
  );
}
