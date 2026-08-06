import { Link } from 'react-router-dom';
import { Recycle, MapPin, Phone, Mail, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-green-900 to-green-950 text-white">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%]">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L48 55C96 50 192 40 288 33.3C384 26.7 480 23.3 576 25C672 26.7 768 33.3 864 36.7C960 40 1056 40 1152 36.7C1248 33.3 1344 26.7 1392 23.3L1440 20V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z" fill="#14532d" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                <Recycle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Green Village</h3>
                <p className="text-[10px] text-green-300 tracking-wider uppercase">Desa Berkelanjutan</p>
              </div>
            </div>
            <p className="text-green-200/80 text-sm leading-relaxed">
              Mewujudkan Desa Bersih, Sehat, dan Berkelanjutan melalui Pengelolaan Sampah yang terpadu dan berwawasan lingkungan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-green-100">Menu</h4>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Beranda' },
                { to: '/about', label: 'Tentang' },
                { to: '/plants', label: 'Program' },
                { to: '/contact', label: 'Kontak' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-green-300/80 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4 text-green-100">Kategori</h4>
            <ul className="space-y-2">
              {['Organik', 'Anorganik', 'Daur Ulang', 'Berbahaya'].map((cat) => (
                <li key={cat}>
                  <Link
                    to={`/plants?category=${encodeURIComponent(cat)}`}
                    className="text-green-300/80 hover:text-white text-sm transition-colors duration-200"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-green-100">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-green-300/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-400" />
                <span>Desa Tegalsari Timur, Kecamatan Ampelgading, Kabupaten Pemalang</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-green-300/80">
                <Phone className="w-4 h-4 flex-shrink-0 text-green-400" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-green-300/80">
                <Mail className="w-4 h-4 flex-shrink-0 text-green-400" />
                <span>greenvillage@tegalsari.desa.id</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-green-800/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-green-300/60 text-sm flex items-center gap-1">
            © 2026 Green Village Tegalsari Timur. Dibuat dengan
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
            untuk masyarakat.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-green-800/50 hover:bg-green-700 text-green-300 hover:text-white transition-all duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
