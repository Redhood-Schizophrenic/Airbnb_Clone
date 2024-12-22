import Navbar from './components/navbar/Navbar';
import Categories from './components/categories/Categories';
import PropertyCard from './components/listings/PropertyCard';

export default function Home() {
  // Sample data - in a real app, this would come from an API
  const sampleListings = [
    {
      title: "Luxury Villa with Ocean View",
      imageSrc: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3",
      location: "Malibu, California",
      price: 350,
      rating: 4.9
    },
    {
      title: "Modern Downtown Apartment",
      imageSrc: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3",
      location: "New York City",
      price: 200,
      rating: 4.8
    },
    {
      title: "Cozy Mountain Cabin",
      imageSrc: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3",
      location: "Aspen, Colorado",
      price: 250,
      rating: 4.7
    },
    {
      title: "Beachfront Paradise",
      imageSrc: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3",
      location: "Miami Beach, Florida",
      price: 280,
      rating: 4.9
    },
    {
      title: "Modern Glass House",
      imageSrc: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3",
      location: "Los Angeles, California",
      price: 420,
      rating: 4.95
    },
    {
      title: "Historic Downtown Loft",
      imageSrc: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3",
      location: "Chicago, Illinois",
      price: 190,
      rating: 4.6
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pb-20 pt-28">
        <Categories />
        <div className="pt-8 max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {sampleListings.map((listing, index) => (
              <PropertyCard
                key={index}
                {...listing}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
