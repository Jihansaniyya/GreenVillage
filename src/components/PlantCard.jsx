import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function PlantCard({ plant, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/plants/${plant.slug}`}
        className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-stone-200/80"
      >
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={plant.image}
            alt={plant.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          
          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-950/80 backdrop-blur-sm text-white">
              {plant.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors duration-200">
            {plant.name}
          </h3>
          {plant.scientificName && (
            <p className="text-xs text-slate-500 italic mt-0.5">
              {plant.scientificName}
            </p>
          )}
          <p className="text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
            {plant.description}
          </p>

          {/* CTA */}
          <div className="flex items-center gap-1 mt-4 text-sm font-semibold text-emerald-800 group-hover:text-emerald-900">
            <span>Lihat Detail</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
