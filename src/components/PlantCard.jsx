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
        className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-green-900/10 transition-all duration-500 border border-green-100/50"
      >
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={plant.image}
            alt={plant.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-green-700 shadow-sm">
              {plant.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
            {plant.name}
          </h3>
          <p className="text-sm text-green-600/80 italic mt-0.5">
            {plant.scientificName}
          </p>
          <p className="text-sm text-gray-500 mt-2 line-clamp-2 leading-relaxed">
            {plant.description}
          </p>

          {/* CTA */}
          <div className="flex items-center gap-1 mt-4 text-sm font-medium text-green-600 group-hover:text-green-700">
            <span>Lihat Detail</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
