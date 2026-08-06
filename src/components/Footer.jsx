import { Link } from 'react-router-dom';
import { Recycle, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-emerald-950 text-white border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-emerald-800 rounded-xl flex items-center justify-center text-white shadow-sm">
                <Recycle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Green Village</h3>
                <p className="text-[10px] text-emerald-400 font-semibold tracking-wider uppercase">Desa Berkelanjutan</p>
              </div>
            </div>
            <p className="text-emerald-200/80 text-sm leading-relaxed max-w-sm">
              Mewujudkan Desa Bersih, Sehat, dan Berkelanjutan melalui berbagai program pemberdayaan masyarakat dan pengelolaan lingkungan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-white text-sm tracking-wide uppercase">Menu</h4>
            <ul className="space-y-2.5">
              {[
                { to: '/', label: 'Beranda' },
                { to: '/about', label: 'Tentang Kami' },
                { to: '/plants', label: 'Program Desa' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-emerald-300/80 hover:text-white text-sm transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold mb-4 text-white text-sm tracking-wide uppercase">Kategori Program</h4>
            <ul className="space-y-2.5">
              {['Organik', 'Anorganik', 'Daur Ulang', 'Berbahaya'].map((cat) => (
                <li key={cat}>
                  <Link
                    to={`/plants?category=${encodeURIComponent(cat)}`}
                    className="text-emerald-300/80 hover:text-white text-sm transition-colors duration-200"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-emerald-900/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-emerald-400/80 text-sm">
            © 2026 Green Village Tegalsari Timur. Dibuat oleh admin cantik untuk masyarakat.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-emerald-200 hover:text-white transition-all duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
