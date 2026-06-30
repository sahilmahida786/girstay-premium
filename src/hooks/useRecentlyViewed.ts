import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Property } from '@/types/property';

interface RecentlyViewedState {
  properties: Property[];
  addProperty: (property: Property) => void;
  clearHistory: () => void;
}

export const useRecentlyViewed = create<RecentlyViewedState>()(
  persist(
    (set) => ({
      properties: [],
      addProperty: (property) =>
        set((state) => {
          // Remove if it already exists to avoid duplicates
          const filtered = state.properties.filter((p) => p.id !== property.id);
          // Add to beginning and keep max 6
          return { properties: [property, ...filtered].slice(0, 6) };
        }),
      clearHistory: () => set({ properties: [] }),
    }),
    {
      name: 'recently-viewed-storage',
    }
  )
);
