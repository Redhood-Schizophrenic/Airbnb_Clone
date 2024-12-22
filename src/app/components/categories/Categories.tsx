"use client";

import { useRef } from 'react';
import { 
  HomeIcon,
  BuildingOfficeIcon,
  HomeModernIcon,
  CameraIcon,
  MapPinIcon,
  BeakerIcon,
  FireIcon,
  BuildingLibraryIcon,
  WifiIcon,
  TvIcon
} from '@heroicons/react/24/outline';

interface Category {
  label: string;
  icon: React.ForwardRefExoticComponent<any>;
  description: string;
}

export const categories: Category[] = [
  {
    label: 'Modern',
    icon: HomeModernIcon,
    description: 'Modern homes with contemporary design'
  },
  {
    label: 'Trending',
    icon: FireIcon,
    description: 'Popular properties this week'
  },
  {
    label: 'Amazing views',
    icon: CameraIcon,
    description: 'Properties with stunning views'
  },
  {
    label: 'Apartments',
    icon: BuildingOfficeIcon,
    description: 'Properties in apartment buildings'
  },
  {
    label: 'Houses',
    icon: HomeIcon,
    description: 'Comfortable houses'
  },
  {
    label: 'Mansions',
    icon: BuildingLibraryIcon,
    description: 'Luxury mansions'
  },
  {
    label: 'Connected',
    icon: WifiIcon,
    description: 'Properties with fast wifi'
  },
  {
    label: 'Entertainment',
    icon: TvIcon,
    description: 'Properties with entertainment systems'
  },
  {
    label: 'Near you',
    icon: MapPinIcon,
    description: 'Properties in your area'
  },
  {
    label: 'Unique',
    icon: BeakerIcon,
    description: 'Unique and interesting properties'
  }
];

const Categories = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const selectedCategory = ''; // We'll implement this with state management later

  return (
    <div className="pt-4 flex flex-col items-center">
      <div
        ref={scrollContainerRef}
        className="w-full max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4"
      >
        <div className="flex flex-row items-center justify-between overflow-x-auto pb-4">
          {categories.map((item) => (
            <div
              key={item.label}
              className={`
                flex 
                flex-col 
                items-center 
                justify-center
                gap-2
                p-3
                border-b-2
                hover:text-neutral-800
                transition
                cursor-pointer
                min-w-[80px]
                ${selectedCategory === item.label ? 'border-b-neutral-800 text-neutral-800' : 'border-transparent text-neutral-500'}
              `}
            >
              <item.icon className="h-6 w-6" />
              <div className="text-sm font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
