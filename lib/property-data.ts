export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: 'buy' | 'rent' | 'sell';
  image: string;
  description: string;
  features: string[];
  yearBuilt: number;
  garage: number;
}

export const properties: Property[] = [
  // Buy Properties
  {
    id: 'buy-1',
    title: 'Modern Downtown Penthouse',
    location: 'Downtown, City Center',
    price: 2500000,
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 3200,
    type: 'buy',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    description: 'Stunning penthouse with panoramic city views, modern finishes, and state-of-the-art amenities.',
    features: ['Smart Home', 'Balcony', 'Gym', 'Concierge', 'Modern Kitchen'],
    yearBuilt: 2020,
    garage: 2,
  },
  {
    id: 'buy-2',
    title: 'Spacious Suburban Home',
    location: 'Maple Valley',
    price: 850000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 4100,
    type: 'buy',
    image: '/images/buy1.jpg',
    description: 'Family-friendly home with large backyard, perfect for entertaining and outdoor activities.',
    features: ['Pool', 'Deck', 'Garage', 'Garden', 'Family Room'],
    yearBuilt: 2015,
    garage: 3,
  },
  {
    id: 'buy-3',
    title: 'Cozy Cottage by the Lake',
    location: 'Lakeside',
    price: 625000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 2000,
    type: 'buy',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
    description: 'Charming waterfront cottage with direct lake access and breathtaking water views.',
    features: ['Lake Access', 'Dock', 'Fireplace', 'Patio', 'Updated Interior'],
    yearBuilt: 2010,
    garage: 1,
  },
  {
    id: 'buy-4',
    title: 'Luxury Estate with Vineyard',
    location: 'Hills Country',
    price: 3200000,
    bedrooms: 5,
    bathrooms: 4,
    sqft: 5800,
    type: 'buy',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    description: 'Exclusive estate property with vineyards, infinity pool, and guest house.',
    features: ['Vineyard', 'Pool', 'Guest House', 'Wine Cellar', 'Home Theater'],
    yearBuilt: 2018,
    garage: 4,
  },
  {
    id: 'buy-5',
    title: 'Historic Victorian Mansion',
    location: 'Heritage District',
    price: 1800000,
    bedrooms: 6,
    bathrooms: 3.5,
    sqft: 4500,
    type: 'buy',
    image: 'https://images.unsplash.com/photo-1516617141207-253d5f60b1b1?w=800&h=600&fit=crop',
    description: 'Beautifully restored Victorian mansion with original architectural details and modern updates.',
    features: ['Original Details', 'Restored', 'Grand Staircase', 'Library', 'Ballroom'],
    yearBuilt: 1895,
    garage: 2,
  },
  {
    id: 'buy-6',
    title: 'Contemporary Hillside Villa',
    location: 'Sunset Hills',
    price: 2100000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3800,
    type: 'buy',
    image: 'https://images.unsplash.com/photo-1512917774080-9b274b3dba45?w=800&h=600&fit=crop',
    description: 'Modern villa perched on hillside with panoramic views and resort-like amenities.',
    features: ['Panoramic Views', 'Pool', 'Spa', 'Smart Home', 'Entertainment Area'],
    yearBuilt: 2019,
    garage: 3,
  },

  // Rent Properties
  {
    id: 'rent-1',
    title: 'Downtown Studio Apartment',
    location: 'Urban Core',
    price: 2200,
    bedrooms: 1,
    bathrooms: 1,
    sqft: 650,
    type: 'rent',
    image: '/images/rentals1.jpg',
    description: 'Sleek studio apartment in the heart of downtown with modern amenities and walkable access.',
    features: ['Furnished', 'Utilities Included', 'Parking', 'Gym', 'Rooftop Access'],
    yearBuilt: 2018,
    garage: 1,
  },
  {
    id: 'rent-2',
    title: 'Spacious 2BR Modern Loft',
    location: 'Arts District',
    price: 3500,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1400,
    type: 'rent',
    image: '/images/rentals2.jpg',
    description: 'Industrial-style loft with high ceilings, exposed brick, and natural light.',
    features: ['High Ceilings', 'Exposed Brick', 'Loft Style', 'Dishwasher', 'In-Unit Laundry'],
    yearBuilt: 2015,
    garage: 1,
  },
  {
    id: 'rent-3',
    title: 'Family Townhouse',
    location: 'Suburb Quarters',
    price: 2800,
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 2200,
    type: 'rent',
    image: '/images/rentals3.jpg',
    description: 'Perfect family townhouse with yard, close to schools and shopping.',
    features: ['Backyard', 'Garage', 'Near Schools', 'Shopping Nearby', 'Renovated Kitchen'],
    yearBuilt: 2012,
    garage: 2,
  },
  {
    id: 'rent-4',
    title: 'Luxury Apartment Complex',
    location: 'Premium Neighborhood',
    price: 5200,
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2500,
    type: 'rent',
    image: '/images/rentals4.jpg',
    description: 'Premium apartment with concierge service, fitness center, and exclusive amenities.',
    features: ['Concierge', 'Fitness Center', 'Pool', 'Doorman', 'Valet Parking'],
    yearBuilt: 2021,
    garage: 2,
  },
  {
    id: 'rent-5',
    title: 'Cozy 1BR Garden Apartment',
    location: 'Residential Park',
    price: 1800,
    bedrooms: 1,
    bathrooms: 1,
    sqft: 800,
    type: 'rent',
    image: '/images/rentals5.jpg',
    description: 'Charming apartment with garden view, quiet residential area with excellent amenities.',
    features: ['Garden Access', 'Quiet Area', 'Pet Friendly', 'Parking', 'Furnished'],
    yearBuilt: 2010,
    garage: 1,
  },
  {
    id: 'rent-6',
    title: 'Penthouse Rental',
    location: 'Skyline District',
    price: 8500,
    bedrooms: 4,
    bathrooms: 3.5,
    sqft: 3600,
    type: 'rent',
    image: '/images/rentals6.jpg',
    description: 'Exclusive penthouse with stunning city views, premium finishes, and luxury amenities.',
    features: ['City Views', 'Terrace', 'Smart Home', 'Wine Cellar', 'Home Theater'],
    yearBuilt: 2020,
    garage: 2,
  },

  // Sell Properties (properties being sold by owners)
  {
    id: 'sell-1',
    title: 'Charming Corner House',
    location: 'Neighborhood Avenue',
    price: 720000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2400,
    type: 'sell',
    image: '/images/sell1.jpg',
    description: 'Lovely corner property with mature trees, updated systems, and move-in ready condition.',
    features: ['Corner Lot', 'Mature Trees', 'Updated', 'New Roof', 'Patio'],
    yearBuilt: 2008,
    garage: 2,
  },
  {
    id: 'sell-2',
    title: 'Elegant Colonial Home',
    location: 'Estates Community',
    price: 1450000,
    bedrooms: 5,
    bathrooms: 3,
    sqft: 4200,
    type: 'sell',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    description: 'Stately colonial home in prestigious community with excellent schools and amenities.',
    features: ['Colonial Style', 'Prestigious Area', 'Great Schools', 'Large Lot', 'Tennis Court'],
    yearBuilt: 2000,
    garage: 3,
  },
];

export function getPropertyById(id: string): Property | undefined {
  return properties.find((p) => p.id === id);
}

export function getPropertiesByType(type: 'buy' | 'rent' | 'sell'): Property[] {
  return properties.filter((p) => p.type === type);
}

export function filterProperties(
  type: 'buy' | 'rent' | 'sell',
  filters: {
    searchTerm?: string;
    minPrice?: number;
    maxPrice?: number;
    bedrooms?: number;
    bathrooms?: number;
  }
): Property[] {
  return getPropertiesByType(type).filter((property) => {
    if (filters.searchTerm) {
      const term = filters.searchTerm.toLowerCase();
      if (
        !property.title.toLowerCase().includes(term) &&
        !property.location.toLowerCase().includes(term)
      ) {
        return false;
      }
    }

    if (filters.minPrice !== undefined && property.price < filters.minPrice) {
      return false;
    }

    if (filters.maxPrice !== undefined && property.price > filters.maxPrice) {
      return false;
    }

    if (filters.bedrooms && property.bedrooms < filters.bedrooms) {
      return false;
    }

    if (filters.bathrooms && property.bathrooms < filters.bathrooms) {
      return false;
    }

    return true;
  });
}
