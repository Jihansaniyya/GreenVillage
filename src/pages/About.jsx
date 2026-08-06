import { motion } from 'framer-motion';
import { Trash2, Recycle, ShoppingBag, Droplets, Leaf, Sparkles, Target, Users, HeartHandshake, Home, Bath, UtensilsCrossed, Apple, Bug, Wind, HandHeart } from 'lucide-react';
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

const greenVillagePractices = [
  {
    icon: Trash2,
    title: 'Buang Sampah Pada Tempatnya',
    desc: 'Membiasakan diri untuk selalu membuang sampah pada tempat yang telah disediakan agar lingkungan tetap bersih dan terhindar dari pencemaran.',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Recycle,
    title: 'Pilah Sampah Organik & Anorganik',
    desc: 'Memisahkan sampah organik (sisa makanan, daun) dan anorganik (plastik, kertas, logam) sejak dari rumah untuk memudahkan proses daur ulang.',
    color: 'from-teal-500 to-green-600',
  },
  {
    icon: ShoppingBag,
    title: 'Kurangi Penggunaan Plastik Sekali Pakai',
    desc: 'Mengurangi penggunaan kantong plastik, sedotan, dan kemasan sekali pakai untuk mengurangi volume sampah yang sulit terurai.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Droplets,
    title: 'Gunakan Totebag & Botol Minum Isi Ulang',
    desc: 'Beralih menggunakan tas belanja kain (totebag) dan botol minum yang dapat diisi ulang sebagai langkah nyata mengurangi sampah plastik.',
    color: 'from-green-600 to-emerald-700',
  },
  {
    icon: Leaf,
    title: 'Olah Sampah Organik Menjadi Kompos atau POC',
    desc: 'Mengolah sampah organik rumah tangga menjadi pupuk kompos atau Pupuk Organik Cair (POC) yang bermanfaat untuk tanaman dan pertanian.',
    color: 'from-lime-500 to-green-600',
  },
  {
    icon: Sparkles,
    title: 'Jaga Lingkungan Bersih, Sehat & Nyaman',
    desc: 'Menjaga kebersihan lingkungan sekitar rumah dan desa agar tetap bersih, sehat, dan nyaman untuk ditinggali oleh seluruh warga.',
    color: 'from-green-500 to-lime-600',
  },
];

const manfaat = [
  {
    icon: Target,
    title: 'Lingkungan Bersih & Asri',
    desc: 'Mewujudkan lingkungan desa yang bersih, bebas sampah berserakan, dan nyaman untuk ditinggali oleh semua warga.',
  },
  {
    icon: Users,
    title: 'Kesehatan Masyarakat Meningkat',
    desc: 'Mengurangi risiko penyakit akibat sampah yang tidak terkelola, seperti diare, demam berdarah, dan infeksi saluran pernapasan.',
  },
  {
    icon: HeartHandshake,
    title: 'Pendapatan Tambahan',
    desc: 'Memberikan nilai ekonomi dari sampah melalui bank sampah, kerajinan daur ulang, dan penjualan pupuk kompos/POC.',
  },
  {
    icon: Leaf,
    title: 'Kelestarian Lingkungan',
    desc: 'Menjaga kelestarian alam dan mengurangi pencemaran tanah, air, dan udara untuk generasi mendatang.',
  },
  {
    icon: Recycle,
    title: 'Pengurangan Volume Sampah',
    desc: 'Mengurangi volume sampah yang dibuang ke TPA melalui pemilahan, daur ulang, dan pengomposan.',
  },
  {
    icon: Home,
    title: 'Desa Mandiri & Berkelanjutan',
    desc: 'Mendorong kemandirian desa dalam pengelolaan sampah dengan prinsip ekonomi sirkular yang berkelanjutan.',
  },
];

const phbsItems = [
  {
    icon: Bath,
    title: 'Mencuci Tangan dengan Sabun',
    desc: 'Membiasakan mencuci tangan pakai sabun dengan air mengalir sebelum makan, setelah BAB, dan setelah memegang sampah.',
  },
  {
    icon: Droplets,
    title: 'Menggunakan Air Bersih',
    desc: 'Menggunakan air bersih untuk kebutuhan sehari-hari seperti memasak, minum, mandi, dan mencuci.',
  },
  {
    icon: Home,
    title: 'Menggunakan Jamban Sehat',
    desc: 'Buang air besar dan kecil di jamban yang memenuhi syarat kesehatan, tidak di sembarang tempat.',
  },
  {
    icon: Trash2,
    title: 'Membuang Sampah pada Tempatnya',
    desc: 'Menyediakan tempat sampah di rumah dan membiasakan seluruh anggota keluarga untuk membuang sampah pada tempatnya.',
  },
  {
    icon: Wind,
    title: 'Menjaga Sirkulasi Udara Rumah',
    desc: 'Memastikan ventilasi rumah baik agar udara bersih dan segar dapat masuk, mencegah penyakit pernapasan.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Makan Buah & Sayur Setiap Hari',
    desc: 'Mengonsumsi buah dan sayur setiap hari untuk memenuhi kebutuhan gizi dan meningkatkan daya tahan tubuh.',
  },
  {
    icon: Apple,
    title: 'Menjaga Kebersihan Makanan',
    desc: 'Menutup makanan dengan baik, mencuci bahan makanan sebelum dimasak, dan menjaga kebersihan dapur.',
  },
  {
    icon: Bug,
    title: 'Memberantas Jentik Nyamuk',
    desc: 'Melakukan 3M Plus (Menguras, Menutup, Mengubur) untuk mencegah perkembangbiakan nyamuk penyebab DBD.',
  },
  {
    icon: HandHeart,
    title: 'Tidak Merokok di Dalam Rumah',
    desc: 'Menjaga kualitas udara dalam rumah dengan tidak merokok di dalam ruangan demi kesehatan seluruh anggota keluarga.',
  },
  {
    icon: Sparkles,
    title: 'Menjaga Kebersihan Rumah & Lingkungan',
    desc: 'Rutin membersihkan rumah, halaman, dan saluran air untuk menciptakan lingkungan yang bersih dan sehat.',
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

      {/* Apa Itu Green Village */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-6">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
              Pengenalan
            </span>
            <h2 className="text-3xl font-bold text-gray-900 font-display">Apa Itu Green Village?</h2>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-green-100/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shadow-lg shadow-green-500/20">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Green Village — Desa Hijau Berkelanjutan</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Green Village</strong> adalah sebuah program dan gerakan pengelolaan sampah terpadu berbasis masyarakat
                yang bertujuan mewujudkan lingkungan desa yang bersih, sehat, dan berkelanjutan. Program ini mengajak seluruh 
                warga desa untuk berperan aktif dalam menjaga kebersihan lingkungan melalui praktik-praktik pengelolaan sampah 
                yang baik dan benar.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Konsep Green Village berfokus pada prinsip <strong>3R (Reduce, Reuse, Recycle)</strong> — yaitu mengurangi, 
                menggunakan kembali, dan mendaur ulang sampah. Dengan pendekatan ini, volume sampah yang dibuang ke Tempat 
                Pembuangan Akhir (TPA) dapat dikurangi secara signifikan, sekaligus memberikan nilai ekonomi dari sampah 
                yang dikelola.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Dalam penerapannya, Green Village mengedepankan 6 perilaku utama yang wajib diterapkan oleh setiap warga, 
                mulai dari membuang sampah pada tempatnya hingga mengolah sampah organik menjadi kompos atau Pupuk Organik 
                Cair (POC), serta menjaga lingkungan agar tetap bersih, sehat, dan nyaman.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6 Perilaku Green Village */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
              6 Perilaku Utama
            </span>
            <h2 className="text-3xl font-bold text-gray-900 font-display">Praktik Green Village</h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Enam perilaku utama yang diterapkan dalam program Green Village untuk mewujudkan 
              lingkungan yang bersih, sehat, dan nyaman.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {greenVillagePractices.map(({ icon: Icon, title, desc, color }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-cream-50 rounded-2xl p-7 border border-green-100/50 hover:shadow-lg hover:shadow-green-900/5 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manfaat Green Village */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
              Dampak Positif
            </span>
            <h2 className="text-3xl font-bold text-gray-900 font-display">Manfaat Green Village</h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Green Village memberikan banyak manfaat bagi masyarakat dan lingkungan desa secara keseluruhan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {manfaat.map(({ icon: Icon, title, desc }, i) => (
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

      {/* Perilaku PHBS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-6">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
              PHBS
            </span>
            <h2 className="text-3xl font-bold text-gray-900 font-display">
              Perilaku Hidup Bersih dan Sehat
            </h2>
            <h3 className="text-xl text-green-700 font-semibold mt-2">dalam Kehidupan Rumah Tangga</h3>
            <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
              PHBS (Perilaku Hidup Bersih dan Sehat) di rumah tangga adalah upaya untuk memberdayakan anggota keluarga 
              agar tahu, mau, dan mampu melaksanakan perilaku hidup bersih dan sehat serta berperan aktif dalam 
              mewujudkan masyarakat sehat.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="max-w-4xl mx-auto mb-10"
          >
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 sm:p-8 border border-green-200/50">
              <p className="text-gray-600 leading-relaxed text-center">
                Penerapan PHBS di rumah tangga merupakan salah satu pilar utama dalam program Green Village. 
                Dengan menerapkan PHBS, setiap keluarga berkontribusi langsung terhadap terciptanya lingkungan 
                yang bersih, sehat, dan nyaman. Berikut adalah 10 indikator PHBS dalam tatanan rumah tangga:
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {phbsItems.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative bg-white rounded-2xl p-6 shadow-sm border border-green-100/50 hover:shadow-md hover:border-green-200 transition-all duration-300 group"
              >
                <div className="absolute top-4 right-4 text-3xl font-bold text-green-100 font-display group-hover:text-green-200 transition-colors duration-300">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 pr-8">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-cream-50">
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
