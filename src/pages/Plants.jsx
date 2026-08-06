import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Recycle, SearchX } from 'lucide-react';
import { usePlants } from '../hooks/usePlants';
import { useDebounce } from '../hooks/useDebounce';
import { filterPlants } from '../utils/helpers';
import PlantCard from '../components/PlantCard';
import SearchBar from '../components/SearchBar';
import FilterSection from '../components/FilterSection';
import LoadingSkeleton from '../components/LoadingSkeleton';

export default function Plants() {
  const { plants, loading } = usePlants();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 300);
  const [category, setCategory] = useState(searchParams.get('category') || '');
  const [sortAZ, setSortAZ] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setCategory(cat);
  }, [searchParams]);

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    if (cat) {
      setSearchParams({ category: cat });
    } else {
      setSearchParams({});
    }
  };

  const filtered = filterPlants(plants, { search: debouncedSearch, category, sortAZ });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative pt-28 pb-12 bg-[#F4F6F3] border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-emerald-800 font-semibold text-xs tracking-wider uppercase mb-3"
            >
              <Recycle className="w-4 h-4 text-emerald-600" />
              <span>Daftar Kegiatan & Panduan</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-slate-900 font-display leading-tight"
            >
              Program Green Village
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-3 text-slate-600 text-lg leading-relaxed"
            >
              Temukan berbagai panduan dan program kerja lingkungan yang dapat diterapkan di desa kita.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-6 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <SearchBar value={search} onChange={setSearch} />
          <FilterSection
            selectedCategory={category}
            onCategoryChange={handleCategoryChange}
            sortAZ={sortAZ}
            onSortChange={setSortAZ}
          />
        </div>
      </section>

      {/* Program Grid */}
      <section className="py-8 pb-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <LoadingSkeleton type="card" count={6} />
          ) : filtered.length > 0 ? (
            <>
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-gray-500">
                  Menampilkan <span className="font-semibold text-green-700">{filtered.length}</span> program
                  {category && (
                    <span> dalam kategori <span className="font-semibold text-green-700">{category}</span></span>
                  )}
                  {debouncedSearch && (
                    <span> untuk "<span className="font-semibold text-green-700">{debouncedSearch}</span>"</span>
                  )}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((plant, i) => (
                  <PlantCard key={plant.id} plant={plant} index={i} />
                ))}
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-50 mb-6">
                <SearchX className="w-10 h-10 text-green-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Program tidak ditemukan
              </h3>
              <p className="text-gray-500 mb-6">
                Coba ubah kata kunci pencarian atau filter kategori.
              </p>
              <button
                onClick={() => {
                  setSearch('');
                  setCategory('');
                  setSortAZ(false);
                  setSearchParams({});
                }}
                className="px-6 py-2.5 bg-green-600 text-white rounded-xl text-sm font-medium hover:bg-green-700 transition-colors"
              >
                Reset Filter
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
