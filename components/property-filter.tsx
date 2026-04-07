'use client';

import { useState } from 'react';
import { Search, Sliders } from 'lucide-react';

interface PropertyFilterProps {
  onFilterChange: (filters: FilterState) => void;
  type?: 'buy' | 'rent' | 'sell';
}

export interface FilterState {
  searchTerm: string;
  minPrice: number;
  maxPrice: number;
  bedrooms: number;
  bathrooms: number;
}

export default function PropertyFilter({ onFilterChange, type }: PropertyFilterProps) {
  const [filters, setFilters] = useState<FilterState>({
    searchTerm: '',
    minPrice: 0,
    maxPrice: Infinity,
    bedrooms: 0,
    bathrooms: 0,
  });

  const handleChange = (updates: Partial<FilterState>) => {
    const newFilters = { ...filters, ...updates };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleReset = () => {
    const emptyFilters: FilterState = {
      searchTerm: '',
      minPrice: 0,
      maxPrice: Infinity,
      bedrooms: 0,
      bathrooms: 0,
    };
    setFilters(emptyFilters);
    onFilterChange(emptyFilters);
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-8">
      <div className="flex items-center gap-2 mb-6">
        <Sliders className="w-5 h-5 text-primary" />
        <h2 className="text-lg font-semibold">Filter Properties</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
        {/* Search */}
        <div>
          <label className="block text-sm font-medium mb-2">Search Location</label>
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="City, address..."
              value={filters.searchTerm}
              onChange={(e) => handleChange({ searchTerm: e.target.value })}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Min Price */}
        <div>
          <label className="block text-sm font-medium mb-2">Min Price</label>
          <input
            type="number"
            placeholder="0"
            value={filters.minPrice}
            onChange={(e) => handleChange({ minPrice: Number(e.target.value) || 0 })}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Max Price */}
        <div>
          <label className="block text-sm font-medium mb-2">Max Price</label>
          <input
            type="number"
            placeholder="No limit"
            value={filters.maxPrice === Infinity ? '' : filters.maxPrice}
            onChange={(e) => handleChange({ maxPrice: Number(e.target.value) || Infinity })}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Bedrooms */}
        <div>
          <label className="block text-sm font-medium mb-2">Bedrooms</label>
          <select
            value={filters.bedrooms}
            onChange={(e) => handleChange({ bedrooms: Number(e.target.value) })}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value={0}>Any</option>
            <option value={1}>1+</option>
            <option value={2}>2+</option>
            <option value={3}>3+</option>
            <option value={4}>4+</option>
            <option value={5}>5+</option>
          </select>
        </div>

        {/* Bathrooms */}
        <div>
          <label className="block text-sm font-medium mb-2">Bathrooms</label>
          <select
            value={filters.bathrooms}
            onChange={(e) => handleChange({ bathrooms: Number(e.target.value) })}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value={0}>Any</option>
            <option value={1}>1+</option>
            <option value={2}>2+</option>
            <option value={3}>3+</option>
            <option value={4}>4+</option>
          </select>
        </div>
      </div>

      <button
        onClick={handleReset}
        className="text-sm text-muted-foreground hover:text-foreground transition"
      >
        Reset Filters
      </button>
    </div>
  );
}
