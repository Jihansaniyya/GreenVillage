import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Alamat',
    value: 'Desa Tegalsari Timur, Kecamatan Ampelgading, Kabupaten Pemalang, Jawa Tengah',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Phone,
    label: 'Telepon',
    value: '+62 812-3456-7890',
    href: 'tel:+6281234567890',
    color: 'from-teal-500 to-green-600',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'greenvillage@tegalsari.desa.id',
    href: 'mailto:greenvillage@tegalsari.desa.id',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Clock,
    label: 'Jam Operasional',
    value: 'Senin - Sabtu: 08.00 - 16.00 WIB',
    color: 'from-green-600 to-emerald-700',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-cream-50" />
        <div className="absolute top-10 right-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4"
          >
            Hubungi Kami
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 font-display"
          >
            Kontak & Lokasi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-500 max-w-2xl mx-auto"
          >
            Kunjungi Green Village Desa Tegalsari Timur atau hubungi kami untuk informasi lebih lanjut tentang program pengelolaan sampah.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 pb-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Cards */}
            <div className="lg:col-span-2 space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-green-100/50 hover:shadow-md transition-shadow duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-medium">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="text-gray-900 font-medium hover:text-green-700 transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-gray-900 font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* WhatsApp CTA */}
              <motion.a
                {...fadeInUp}
                href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20bertanya%20tentang%20program%20Green%20Village"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl font-semibold shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Chat via WhatsApp
              </motion.a>
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-green-100/50 h-full min-h-[400px]">
                <div className="p-4 border-b border-green-100/50">
                  <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-600" />
                    Lokasi Green Village
                  </h3>
                </div>
                <div className="aspect-[4/3] lg:aspect-auto lg:h-[calc(100%-56px)]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31579.82846783843!2d114.29!3d-8.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd157a4fdf5a7f3%3A0x0!2sTegalsari%20Banyuwangi!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '350px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Green Village Tegalsari Timur"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
