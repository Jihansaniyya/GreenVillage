import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Recycle,
  Clock,
  Gauge,
  CheckCircle2,
  BookOpen,
  Wrench,
  HeartHandshake,
  Lightbulb,
  Package,
} from 'lucide-react';
import { usePlant } from '../hooks/usePlants';
import Badge from '../components/Badge';
import LoadingSkeleton from '../components/LoadingSkeleton';

export default function PlantDetail() {
  const { slug } = useParams();
  const { plant, loading, adjacent } = usePlant(slug);

  if (loading) {
    return <LoadingSkeleton type="detail" />;
  }

  if (!plant) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream-50">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-50 mb-6">
            <Recycle className="w-10 h-10 text-green-300" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Program Tidak Ditemukan</h2>
          <p className="text-gray-500 mb-6">Program yang Anda cari tidak tersedia.</p>
          <Link
            to="/plants"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Daftar Program
          </Link>
        </div>
      </div>
    );
  }

  const infoItems = [
    { icon: Clock, label: 'Waktu Proses', value: plant.watering },
    { icon: Gauge, label: 'Tingkat Kesulitan', value: plant.light },
    { icon: Wrench, label: 'Alat & Bahan', value: plant.soil },
    ...(plant.harvestTime ? [{ icon: Package, label: 'Hasil', value: plant.harvestTime }] : []),
  ];

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Breadcrumb */}
      <div className="pt-20 bg-gradient-to-b from-green-50 to-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/plants"
            className="inline-flex items-center gap-2 text-sm text-green-600 hover:text-green-700 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Daftar Program
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Main Card */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-green-100/50">
            {/* Image */}
            <div className="relative aspect-video overflow-hidden">
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-green-700">
                  {plant.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 lg:p-10">
              {/* Title */}
              <div className="mb-6">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 font-display">
                  {plant.name}
                </h1>
                <p className="text-green-600 italic mt-1 text-lg">{plant.scientificName}</p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                <Badge label={plant.difficulty} type="Kesulitan" />
                <Badge label={plant.category} type="Kategori" />
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-3">
                  <BookOpen className="w-5 h-5 text-green-600" />
                  Deskripsi Program
                </h2>
                <p className="text-gray-600 leading-relaxed">{plant.description}</p>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {infoItems.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="bg-green-50/60 rounded-2xl p-4 text-center border border-green-100/50"
                  >
                    <Icon className="w-5 h-5 text-green-600 mx-auto mb-2" />
                    <p className="text-xs text-gray-500 mb-1">{label}</p>
                    <p className="text-sm font-semibold text-gray-900">{value}</p>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-3">
                  <HeartHandshake className="w-5 h-5 text-green-600" />
                  Manfaat
                </h2>
                <ul className="space-y-2">
                  {plant.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Steps */}
              <div className="mb-8">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-3">
                  <Lightbulb className="w-5 h-5 text-green-600" />
                  Langkah Pengelolaan
                </h2>
                <div className="bg-green-50/40 rounded-2xl p-5 border border-green-100/50">
                  <p className="text-gray-600 leading-relaxed">{plant.planting}</p>
                </div>
              </div>

              {/* Tips */}
              <div className="mb-8">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-3">
                  <Recycle className="w-5 h-5 text-green-600" />
                  Tips & Perawatan
                </h2>
                <div className="bg-green-50/40 rounded-2xl p-5 border border-green-100/50">
                  <p className="text-gray-600 leading-relaxed">{plant.care}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 gap-4">
            {adjacent.prev ? (
              <Link
                to={`/plants/${adjacent.prev.slug}`}
                className="flex items-center gap-2 px-5 py-3 bg-white rounded-2xl shadow-sm border border-green-100/50 text-sm font-medium text-gray-700 hover:text-green-700 hover:border-green-200 hover:shadow-md transition-all duration-300 group"
              >
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <p className="text-xs text-gray-400">Sebelumnya</p>
                  <p className="text-sm font-medium">{adjacent.prev.name}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            <Link
              to="/plants"
              className="px-5 py-3 bg-green-600 text-white rounded-2xl shadow-md shadow-green-600/20 text-sm font-medium hover:bg-green-700 transition-colors hidden sm:flex items-center gap-2"
            >
              <Recycle className="w-4 h-4" />
              Semua Program
            </Link>

            {adjacent.next ? (
              <Link
                to={`/plants/${adjacent.next.slug}`}
                className="flex items-center gap-2 px-5 py-3 bg-white rounded-2xl shadow-sm border border-green-100/50 text-sm font-medium text-gray-700 hover:text-green-700 hover:border-green-200 hover:shadow-md transition-all duration-300 group"
              >
                <div className="text-right">
                  <p className="text-xs text-gray-400">Berikutnya</p>
                  <p className="text-sm font-medium">{adjacent.next.name}</p>
                </div>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
