import { useState, useEffect } from 'react';
import plantsData from '../data/plants.json';

export function usePlants() {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for skeleton effect
    const timer = setTimeout(() => {
      setPlants(plantsData);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return { plants, loading };
}

export function usePlant(slug) {
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [adjacent, setAdjacent] = useState({ prev: null, next: null });

  useEffect(() => {
    const timer = setTimeout(() => {
      const index = plantsData.findIndex((p) => p.slug === slug);
      if (index !== -1) {
        setPlant(plantsData[index]);
        setAdjacent({
          prev: index > 0 ? plantsData[index - 1] : null,
          next: index < plantsData.length - 1 ? plantsData[index + 1] : null,
        });
      } else {
        setPlant(null);
      }
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [slug]);

  return { plant, loading, adjacent };
}
