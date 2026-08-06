import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Recycle, Home, Info, FileCheck } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Beranda', icon: Home },
  { to: '/about', label: 'Tentang', icon: Info },
  { to: '/plants', label: 'Program', icon: FileCheck },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-lg shadow-green-900/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-emerald-900 rounded-xl flex items-center justify-center text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
              <Recycle className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-slate-900 leading-tight">
                Green Village
              </span>
              <span className="text-[10px] text-emerald-800 font-semibold tracking-wider uppercase leading-tight hidden sm:block">
                Desa Berkelanjutan
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? 'text-white bg-emerald-800 shadow-sm'
                      : 'text-slate-700 hover:text-emerald-900 hover:bg-stone-100'
                  }`
                }
              >
                <Icon className="w-4 h-4" />
                {label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-gray-600 hover:text-green-700 hover:bg-green-50 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-green-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-emerald-800'
                        : 'text-slate-700 hover:text-emerald-900 hover:bg-stone-100'
                    }`
                  }
                >
                  <Icon className="w-5 h-5" />
                  {label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
