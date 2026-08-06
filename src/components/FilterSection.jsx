import { SlidersHorizontal, ArrowDownAZ } from 'lucide-react';

const categories = ['Organik', 'Anorganik', 'Daur Ulang', 'Berbahaya'];

export default function FilterSection({ selectedCategory, onCategoryChange, sortAZ, onSortChange }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
      {/* Category Filter */}
      <div className="flex items-center gap-2 flex-wrap">
        <div className="flex items-center gap-1.5 text-sm text-gray-500 mr-1">
          <SlidersHorizontal className="w-4 h-4" />
          <span className="hidden sm:inline">Filter:</span>
        </div>
        <button
          onClick={() => onCategoryChange('')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
            selectedCategory === ''
              ? 'bg-green-600 text-white shadow-md shadow-green-600/25'
              : 'bg-green-50 text-green-700 hover:bg-green-100'
          }`}
        >
          Semua
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(selectedCategory === cat ? '' : cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
              selectedCategory === cat
                ? 'bg-green-600 text-white shadow-md shadow-green-600/25'
                : 'bg-green-50 text-green-700 hover:bg-green-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Sort Button */}
      <button
        onClick={() => onSortChange(!sortAZ)}
        className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ml-auto ${
          sortAZ
            ? 'bg-green-600 text-white shadow-md shadow-green-600/25'
            : 'bg-green-50 text-green-700 hover:bg-green-100'
        }`}
      >
        <ArrowDownAZ className="w-4 h-4" />
        A-Z
      </button>
    </div>
  );
}
