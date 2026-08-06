/**
 * Generate a slug from a string
 */
export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Get unique categories from plants data
 */
export function getCategories(plants) {
  return [...new Set(plants.map((plant) => plant.category))];
}

/**
 * Filter and sort plants
 */
export function filterPlants(plants, { search = '', category = '', sortAZ = false }) {
  let filtered = [...plants];

  if (search) {
    const query = search.toLowerCase();
    filtered = filtered.filter(
      (plant) =>
        plant.name.toLowerCase().includes(query) ||
        plant.scientificName.toLowerCase().includes(query)
    );
  }

  if (category) {
    filtered = filtered.filter((plant) => plant.category === category);
  }

  if (sortAZ) {
    filtered.sort((a, b) => a.name.localeCompare(b.name, 'id'));
  }

  return filtered;
}

/**
 * Format number with Indonesian locale
 */
export function formatNumber(num) {
  return new Intl.NumberFormat('id-ID').format(num);
}
